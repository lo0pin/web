(async function () {
  const DATA_URL = new URL("../json/posts.json", import.meta.url);
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

  // Inline-Markdown:
  // - **bold**
  // - *italic*
  // - `inline code`
  // - [text](url)
  // - nackte http(s)-URLs
  //
  // WICHTIG:
  // Diese Funktion erwartet bereits escaped Text.
  function formatInline(escapedText) {
    let t = String(escapedText);

    // ------------------------------------------------------------
    // 0. Inline code zuerst schützen
    // ------------------------------------------------------------
    const codeTokens = [];
    t = t.replace(/`([^`]+)`/g, (_, code) => {
      const token = `@@CODE${codeTokens.length}@@`;
      codeTokens.push(`<code>${code}</code>`);
      return token;
    });

    // ------------------------------------------------------------
    // 1. Bold / Italic
    // ------------------------------------------------------------
    t = t
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(?!\*)(.+?)\*/g, "<em>$1</em>");

    // ------------------------------------------------------------
    // 2. Externe Links (http / https)
    // ------------------------------------------------------------
    t = t.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      `<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>`
    );

    // ------------------------------------------------------------
    // 3. Anchor-Links (#hardware)
    // ------------------------------------------------------------
    t = t.replace(
      /\[([^\]]+)\]\((#[a-zA-Z0-9_-]+)\)/g,
      `<a href="$2">$1</a>`
    );

    // ------------------------------------------------------------
    // 4. Relative Links
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
    // 5. Nackte URLs automatisch verlinken
    // ------------------------------------------------------------
    t = t.replace(/(https?:\/\/[^\s<]+)(?![^<]*>)/g, (m) => {
      const match = m.match(/^(.*?)([).,;:!?]+)?$/);
      const url = match ? match[1] : m;
      const trail = match && match[2] ? match[2] : "";
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>${trail}`;
    });

    // ------------------------------------------------------------
    // 6. Inline-code-Tokens zurücksetzen
    // ------------------------------------------------------------
    t = t.replace(/@@CODE(\d+)@@/g, (_, i) => codeTokens[Number(i)] || "");

    return t;
  }

  function mdToHtml(md) {
    const lines = String(md).split("\n");
    let html = "";
    let inList = false;
    let inCodeBlock = false;
    let codeLang = "";
    let codeBuf = [];
    let pBuf = [];

    const flushP = () => {
      if (!pBuf.length) return "";
      const escaped = escapeHtml(pBuf.join(" ").trim());
      const txt = formatInline(escaped);
      pBuf = [];
      return `<p>${txt}</p>`;
    };

    const flushCode = () => {
      if (!codeBuf.length && !codeLang) return "";
      const code = escapeHtml(codeBuf.join("\n"));
      const cls = codeLang ? ` class="language-${escapeHtml(codeLang)}"` : "";
      codeBuf = [];
      codeLang = "";
      return `<pre><code${cls}>${code}</code></pre>`;
    };

    for (const raw of lines) {
      const line = raw.trimEnd();
      const trimmed = line.trim();

      // ----------------------------------------------------------
      // Code fence start / end
      // ----------------------------------------------------------
      if (trimmed.startsWith("```")) {
        if (inCodeBlock) {
          html += flushCode();
          inCodeBlock = false;
        } else {
          if (inList) {
            html += "</ul>";
            inList = false;
          }
          html += flushP();
          inCodeBlock = true;
          codeLang = trimmed.slice(3).trim(); // optional language
        }
        continue;
      }

      if (inCodeBlock) {
        codeBuf.push(raw);
        continue;
      }

      // ----------------------------------------------------------
      // Leerzeile
      // ----------------------------------------------------------
      if (trimmed === "") {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        html += flushP();
        continue;
      }

      // ----------------------------------------------------------
      // Hint block (whole line)
      // ----------------------------------------------------------
      if (trimmed.startsWith("~") && trimmed.endsWith("~")) {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        html += flushP();

        const hintEscaped = escapeHtml(trimmed.slice(1, -1));
        const hintText = formatInline(hintEscaped);
        html += `<p class="hint">${hintText}</p>`;
        continue;
      }

      // ----------------------------------------------------------
      // Headings
      // ----------------------------------------------------------
      if (trimmed.startsWith("### ")) {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        html += flushP();
        const h = formatInline(escapeHtml(trimmed.slice(4)));
        html += `<h5>${h}</h5>`;
        continue;
      }

      if (trimmed.startsWith("## ")) {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        html += flushP();
        const h = formatInline(escapeHtml(trimmed.slice(3)));
        html += `<h4>${h}</h4>`;
        continue;
      }

      if (trimmed.startsWith("# ")) {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        html += flushP();
        const h = formatInline(escapeHtml(trimmed.slice(2)));
        html += `<h3>${h}</h3>`;
        continue;
      }

      // ----------------------------------------------------------
      // Lists
      // ----------------------------------------------------------
      if (trimmed.startsWith("- ")) {
        html += flushP();
        if (!inList) {
          html += "<ul>";
          inList = true;
        }

        const itemEscaped = escapeHtml(trimmed.slice(2));
        const item = formatInline(itemEscaped);
        html += `<li>${item}</li>`;
        continue;
      }

      // ----------------------------------------------------------
      // Default: paragraph buffer
      // ----------------------------------------------------------
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      pBuf.push(trimmed);
    }

    if (inCodeBlock) {
      html += flushCode();
    }

    if (inList) html += "</ul>";
    html += flushP();

    return html;
  }

  function renderPost(post) {
    const isBilingual =
      ("teaser" in post) || ("content_en" in post) || ("content_de" in post);

    const renderAny = (val) => {
      if (post.format === "html") return String(val || "");
      if (post.format === "markdown") return mdToHtml(val || "");
      return `<p>${escapeHtml(val || "")}</p>`;
    };

    const teaserHtml = isBilingual ? renderAny(post.teaser || "") : "";
    const enHtml = isBilingual ? renderAny(post.content_en || "") : "";
    const deHtml = isBilingual ? renderAny(post.content_de || "") : "";

    const legacyBody = renderAny(post.content || "");

    const body = isBilingual
      ? `
        <div class="news-teaser">${teaserHtml}</div>
        <details class="news-details">
          <summary>read more</summary>
          <div class="news-body">${enHtml}</div>
        </details>
        <hr class="lang-divider" />
        <details class="news-details">
          <summary>mehr erfahren</summary>
          <div class="news-body">${deHtml}</div>
        </details>
      `
      : `<div class="news-body">${legacyBody}</div>`;

    const imgs = Array.isArray(post.images) ? post.images : [];

const media = imgs.length
  ? `
    <div class="media-row media-row--compact">
      ${imgs.map((img) => `
        <figure class="media">
          <a
            href="${escapeHtml(img.src)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="${escapeHtml(img.src)}"
              alt="${escapeHtml(img.alt || post.title)}"
              loading="lazy"
              decoding="async"
            >
            ${img.caption ? `<figcaption>${escapeHtml(img.caption)}</figcaption>` : ""}
          </a>
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
        ${body}
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
    const topic = el.dataset.newsTopic || "";
    const subtopic = el.dataset.newsSubtopic || "";
    const mode = el.dataset.newsMode || "all";

    const rawLimit = el.dataset.newsLimit;
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
