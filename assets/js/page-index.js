(async function () {

  const list = document.querySelector("#page-index");

  if (!list) {
    return;
  }


  // who_s_there.html liegt in:
  //
  // a_parkplatz/who_s_there.html
  //
  // pages.json liegt in:
  //
  // assets/json/pages.json
  //
  // daher: eine Ebene zurück

  const DATA_URL = "../assets/json/pages.json";


  try {

    const response = await fetch(DATA_URL, {
      cache: "no-store"
    });


    if (!response.ok) {
      throw new Error(
        `pages.json could not be loaded: ${response.status}`
      );
    }


    const data = await response.json();

    const pages = Array.isArray(data.pages)
      ? data.pages
      : [];


    list.innerHTML = "";


    if (pages.length === 0) {

      list.innerHTML =
        `<li class="hint">No pages found.</li>`;

      return;
    }


    for (const page of pages) {

      const li = document.createElement("li");

      const link = document.createElement("a");


      // Alle Seiten liegen im selben Ordner
      // wie who_s_there.html.

      link.href =
        `./${encodeURIComponent(page.file)}`;


      link.textContent =
        page.title || page.file;


      li.appendChild(link);

      list.appendChild(li);
    }


  } catch (error) {

    console.error(
      "Could not create page index:",
      error
    );


    list.innerHTML =
      `<li class="hint">Page index unavailable.</li>`;
  }

})();