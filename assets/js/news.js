(async function () {
  const DATA_URL = new URL("../json/posts.json", import.meta.url);
  // ↑ relativ von /assets/js/ nach /assets/json/

  const selectors = "[data-news-mode]";

  // --- helpers --------------------------------------------------------------
  const escapeHtml = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c]));

  // Inline-Markdown: **bold**, *em*, [text](url), nackte http(s)-URLs
  // Wichtig: Diese Funktion erwartet "already escaped" Text.
  function formatInline(escapedText) {
    let t = String(escapedText);

    // bold / italic
    t = t
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(?!\*)(.+?)\*/g, "<em>$1</em>");

    // ------------------------------------------------------------
    // 1. Externe Links (http / https)
    // ------------------------------------------------------------
    t = t.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      `<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>`
    );

    // ------------------------------------------------------------
    // 2. Anchor-Links (#hardware)
    // ------------------------------------------------------------
    t = t.replace(
      /\[([^\]]+)\]\((#[a-zA-Z0-9_-]+)\)/g,
      `<a href="$2">$1</a>`
    );

    // ------------------------------------------------------------
    // 3. Relative Links
    // erlaubt:
    //   /projects/x.html
    //   ../docs/file.html
    //   ./local.html
    // ------------------------------------------------------------
    t = t.replace(
      /\[([^\]]+)\]\(((?:\/|\.\.?\/)[^\s)]+)\)/g,
      `<a href="$2">$1</a>`
    );

    // ------------------------------------------------------------
    // 4. Nackte URLs automatisch verlinken
    // ------------------------------------------------------------
    t = t.replace(/(https?:\/\/[^\s<]+)(?![^<]*>)/g, (m) => {
      const match = m.match(/^(.*?)([).,;:!?]+)?$/);
      const url = match ? match[1] : m;
      const trail = match && match[2] ? match[2] : "";
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>${trail}`;
    });

    return t;
  }


  function mdToHtml(md) {
    const lines = String(md).split("\n");
    let html = "";
    let inList = false;
    let pBuf = [];

    const flushP = () => {
      if (!pBuf.length) return "";
      const escaped = escapeHtml(pBuf.join(" ").trim());
      const txt = formatInline(escaped);
      pBuf = [];
      return `<p>${txt}</p>`;
    };

    for (const raw of lines) {
      const line = raw.trimEnd();

      if (line.trim() === "") {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        html += flushP();
        continue;
      }

      // ~hint~ block (whole line)
      if (line.trim().startsWith("~") && line.trim().endsWith("~")) {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        html += flushP();

        // Hint: erlaubt Inline-Markdown (bold/italic/links)
        const hintEscaped = escapeHtml(line.trim().slice(1, -1));
        const hintText = formatInline(hintEscaped);
        html += `<p class="hint">${hintText}</p>`;
        continue;
      }

      if (line.startsWith("- ")) {
        html += flushP();
        if (!inList) {
          html += "<ul>";
          inList = true;
        }

        const itemEscaped = escapeHtml(line.slice(2));
        const item = formatInline(itemEscaped);
        html += `<li>${item}</li>`;
      } else {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        pBuf.push(line); // erst beim flush escapen → sauberer Absatz-Join
      }
    }

    if (inList) html += "</ul>";
    html += flushP();
    return html;
  }

  function renderPost(post) {
    const body =
      post.format === "html"
        ? String(post.content || "")
        : post.format === "markdown"
          ? mdToHtml(post.content || "")
          : `<p>${escapeHtml(post.content || "")}</p>`;

    const imgs = Array.isArray(post.images) ? post.images.slice(0, 2) : [];

    const media = imgs.length
      ? `
      <div class="media-row media-row--compact">
        ${imgs.map((img) => `
          <figure class="media">
            <img
              src="${escapeHtml(img.src)}"
              alt="${escapeHtml(img.alt || post.title)}"
              loading="lazy"
              decoding="async"
            >
            ${img.caption ? `<figcaption>${escapeHtml(img.caption)}</figcaption>` : ""}
          </figure>
        `).join("")}
      </div>
    `
      : "";

    return `
      <article class="card news-item">
        <h3 class="card-title">${escapeHtml(post.title)}</h3>
        <p class="card-meta">${escapeHtml(post.date)}</p>
        ${media}
        <div class="news-body">${body}</div>
      </article>`;
  }

  function byDateDesc(a, b) {
    return String(b.date || "").localeCompare(String(a.date || ""));
  }

  async function loadPosts() {
    const res = await fetch(DATA_URL, { cache: "no-store" });
    if (!res.ok) throw new Error("posts.json not available");
    const data = await res.json();
    return Array.isArray(data.posts) ? data.posts : [];
  }

  // --- main -----------------------------------------------------------------
  let posts = [];
  try {
    posts = await loadPosts();
  } catch (e) {
    console.error(e);
    document.querySelectorAll(selectors).forEach((el) => {
      el.innerHTML = `<p class="hint">News not available.</p>`;
    });
    return;
  }

  document.querySelectorAll(selectors).forEach((el) => {
    const topic = el.dataset.newsTopic || "";       // optional
    const subtopic = el.dataset.newsSubtopic || ""; // optional
    const mode = el.dataset.newsMode || "all";      // should exist

    const rawLimit = el.dataset.newsLimit;          // optional
    const limit = rawLimit ? Number.parseInt(rawLimit, 10) : NaN;
    const hasLimit = Number.isFinite(limit) && limit > 0;

    const filtered = posts
      .filter((p) => !topic || p.topic === topic)
      .filter((p) => !subtopic || p.subtopic === subtopic)
      .filter((p) => !p.draft)
      .sort(byDateDesc);

    let chosen;
    if (mode === "latest") {
      const n = hasLimit ? limit : 1;
      chosen = filtered.slice(0, n);
    } else {
      chosen = hasLimit ? filtered.slice(0, limit) : filtered;
    }

    el.innerHTML = chosen.length
      ? chosen.map(renderPost).join("")
      : `<p class="hint">No entries yet.</p>`;
  });
})();
