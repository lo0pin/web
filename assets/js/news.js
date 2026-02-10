(async function () {
  const DATA_URL = new URL("../json/posts.json", import.meta.url);

  // ↑ relativ von /assets/js/ nach /assets/json/

  const selectors = "[data-news-topic]";

  // --- helpers --------------------------------------------------------------
  const escapeHtml = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));

  function mdToHtml(md) {
    const lines = String(md).split("\n");
    let html = "";
    let inList = false;
    let pBuf = [];

    const flushP = () => {
      if (!pBuf.length) return "";
      const txt = pBuf.join(" ").trim()
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      pBuf = [];
      return `<p>${txt}</p>`;
    };

    for (const raw of lines) {
      const line = raw.trimEnd();

      if (line.trim() === "") {
        if (inList) { html += "</ul>"; inList = false; }
        html += flushP();
        continue;
      }

      if (line.startsWith("- ")) {
        html += flushP();
        if (!inList) { html += "<ul>"; inList = true; }
        const item = escapeHtml(line.slice(2))
          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
        html += `<li>${item}</li>`;
      } else {
        if (inList) { html += "</ul>"; inList = false; }
        pBuf.push(escapeHtml(line));
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
  
  const media = imgs.length ? `
    <div class="media-row media-row--compact">
      ${imgs.map(img => `
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
  ` : "";
    

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
    if (!res.ok) throw new Error("posts.json konnte nicht geladen werden");
    const data = await res.json();
    return Array.isArray(data.posts) ? data.posts : [];
  }

  // --- main -----------------------------------------------------------------
  let posts = [];
  try {
    posts = await loadPosts();
  } catch (e) {
    console.error(e);
    document.querySelectorAll(selectors).forEach(el => {
      el.innerHTML = `<p class="hint">News konnten nicht geladen werden.</p>`;
    });
    return;
  }

  document.querySelectorAll(selectors).forEach(el => {
    const topic = el.dataset.newsTopic;
    const mode  = el.dataset.newsMode || "all";

    const filtered = posts
      .filter(p => !topic || p.topic === topic)
      .filter(p => !p.draft)
      .sort(byDateDesc);

    const chosen = mode === "latest" ? filtered.slice(0, 1) : filtered;

    el.innerHTML = chosen.length
      ? chosen.map(renderPost).join("")
      : `<p class="hint">Noch keine Beiträge.</p>`;
  });
})();
