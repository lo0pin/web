from pathlib import Path
from html.parser import HTMLParser
import json


# ------------------------------------------------------------
# Pfade
# ------------------------------------------------------------

ROOT = Path(__file__).resolve().parents[1]

SOURCE_DIR = ROOT / "a_parkplatz"
OUTPUT_FILE = ROOT / "assets" / "json" / "pages.json"

# Diese Datei soll nicht sich selbst auflisten
EXCLUDED_FILES = {
    "who_s_there.html",
}


# ------------------------------------------------------------
# <title> aus einer HTML-Datei lesen
# ------------------------------------------------------------

class TitleParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.inside_title = False
        self.title_parts = []

    def handle_starttag(self, tag, attrs):
        if tag.lower() == "title":
            self.inside_title = True

    def handle_endtag(self, tag):
        if tag.lower() == "title":
            self.inside_title = False

    def handle_data(self, data):
        if self.inside_title:
            self.title_parts.append(data)

    @property
    def title(self):
        return " ".join(
            " ".join(self.title_parts).split()
        )


# ------------------------------------------------------------
# Seitentitel bestimmen
# ------------------------------------------------------------

def get_title(path):
    try:
        html = path.read_text(
            encoding="utf-8",
            errors="replace"
        )

        parser = TitleParser()
        parser.feed(html)

        if parser.title:
            return parser.title

    except Exception as error:
        print(f"Could not read title from {path}: {error}")

    # Fallback:
    # mein_toller_artikel.html
    # ->
    # Mein Toller Artikel

    return (
        path.stem
        .replace("_", " ")
        .replace("-", " ")
        .title()
    )


# ------------------------------------------------------------
# HTML-Dateien sammeln
# ------------------------------------------------------------

pages = []

for path in sorted(
    SOURCE_DIR.glob("*.html"),
    key=lambda p: p.name.lower()
):

    if path.name in EXCLUDED_FILES:
        continue

    pages.append({
        "file": path.name,
        "title": get_title(path),
    })


# ------------------------------------------------------------
# JSON erzeugen
# ------------------------------------------------------------

data = {
    "directory": "a_parkplatz",
    "pages": pages,
}


OUTPUT_FILE.parent.mkdir(
    parents=True,
    exist_ok=True
)


OUTPUT_FILE.write_text(
    json.dumps(
        data,
        indent=2,
        ensure_ascii=False
    ) + "\n",
    encoding="utf-8"
)


print(
    f"Generated {OUTPUT_FILE} "
    f"with {len(pages)} pages."
)