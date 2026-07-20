## Botanik
- "topic": "botanik"

### Subcategories
- "subtopic": "raspberry"
- "subtopic": "ribisl"
- "subtopic": "fig"
- "subtopic": "lemon"
- "subtopic": "bonsai"
- "subtopic": "tomato"
- "subtopic": "kapu"
- "subtopic": "corn"
- "subtopic": "tobacco"
- "subtopic": "cucumber"

## Making
- "topic": "making"

### Subcategories
- "subtopic": "3dprint"
- "subtopic": "weben"


## Code
- "topic": "code" 

### SubC
- "subtopic": "html"
- "subtopic": "python"
- "subtopic": "cpp"
- "subtopic": "linux"

## Words
- "topic": "words"

### SubC
- "subtopic": "communication"
- "subtopic": "history"
- "subtopic": "linguistics"
- "subtopic": "literature"
- "subtopic": "philosophy"
- "subtopic": "poetry"
- "subtopic": "video"

## Electronics
"topic": "electronics"

### SubC
- "subtopic": "mesh"
- "subtopic": "oled_bme"
- "subtopic": "led_matrix"
- "subtopic": "solar"
- "subtopic": "pc_build"
- "subtopic": "arduino"
- "subtopic": "nas"


## Topic nerdism
- "topic": "nerdism" 

### Subtopics
- "subtopic": "gothic_mod"
- "subtopic": "lotr"
- "subtopic": "games"


## Topic Astro
- "topic": "astro"


### Suptopics
- "subtopic": "moon"
- "subtopic": "solar_system"
- "subtopic": "significant_stars"

## Topic Outdoor
- "topic": "outdoor"

### Subtopic
- "subtopic": "drone"
- "subtopic": "hiking"
- "subtopic": "metorology"


## SRC for IMG
assets/img/news...


## Modes
data-news-mode="all"
data-news-mode="latest" 

## Limit
<div data-news-topic="botanik"  data-news-subtopic="raspberry" data-news-mode="latest" data-news-limit="3"></div>
<script type="module" src="../assets/js/news.js"></script>


## Links
Next up: [Routes & Places](/web/sailing/routes_places.html)



## Markdown Guide (for this renderer)

### Inline formatting
* `**bold**` → **bold**
* `*italic*` → *italic*
* `` `code` `` → `code`

### Links
* `[text](https://example.com)` → external link
* `[section](#anchor)` → anchor link
* `[file](../path/file.html)` → relative link
* `https://example.com` → auto-linked

### Structure

* `# Heading` → `<h3>`
* `## Heading` → `<h4>`
* `### Heading` → `<h5>`

* Paragraphs = simple line breaks

* Empty line = new paragraph

### Lists

* `- item` → bullet list
  
```
- first
- second
```

### Code blocks

<pre>
```js
const x = 42;
```
</pre>

### Special: Hint

```
~This is a hint~
```

→ highlighted hint block

---

### Notes

* HTML is escaped by default
* Markdown is only interpreted in `"format": "markdown"` posts



```json
    {
      "id": "2026-02-09-botanik-himbeeren",
      "topic": "botanik",
      "subtopic": "raspberry",
      "date": "2026-02-09",
      "title": "Himbeeren: Raus auf den Balkon",
      "format": "markdown",
      "content": "Heute tagsüber 8°C, nachts leicht unter 0.\n\n**Plan:** tagsüber raus, nachts rein, wenn’s unter -2°C geht.\n\n- Sonne nutzen\n- Windschutz\n- Gießen: sparsam",
      "images": [
        { "src": "/img/botanik/himbeeren-2026-02-09.jpg", "alt": "Himbeeren am Balkon" }
      ]
    },
    {
      "id": "2026-02-08-making-printer-unboxing",
      "topic": "making",
      "subtopic": "3dprint",
      "date": "2026-02-08",
      "title": "3D-Drucker: Unboxing & Assembly",
      "format": "html",
      "content": "<p>Auspacken, Achsen prüfen, Schrauben nachziehen.</p><ul><li>Firmware updaten</li><li>Erstkalibrierung</li></ul>"
    },
    {
      "id": "2026-02-10-botanik-raspberry",
      "topic": "botanik",
      "subtopic": "raspberry",
      "date": "2026-02-09",
      "title": "Raspberry — early growth, carefully slowed down",
      "format": "html",
      "content": "<p class=\"card-meta\">February · autumn-bearing raspberry · 25&nbsp;cm pot · south-facing balcony · Last updated: <time datetime=\"2026-02-07\">Feb 07, 2026</time></p>\n<p>\n  The raspberry has clearly left dormancy and is pushing fresh, healthy shoots from the base.\n  Leaf colour is bright and compact, indicating good vitality rather than stress-driven growth.\n  Despite the early start, conditions are still winter-like.\n</p>\n\n<div class=\"media-row media-row--compact\">\n  <figure class=\"media\">\n    <img src=\"../assets/img/him10.jpeg\" alt=\"\">\n    <figcaption></figcaption>\n  </figure>\n\n  <figure class=\"media\">\n    <img src=\"../assets/img/him11.jpeg\" alt=\"\">\n    <figcaption></figcaption>\n  </figure>\n</div>\n\n<p>\n  <strong>What I did:</strong> removed all dead, old canes; kept the plant bright and cool;\n  avoided fertilizer; started short, daytime balcony exposure to improve light quality and harden the young growth,\n  while bringing the pot back indoors overnight due to frost.\n</p>\n\n<p>\n  <strong>Next steps:</strong> continue controlled day–night acclimation until night temperatures stay above freezing.\n  Once permanently outdoors and shoots reach 10–15&nbsp;cm, begin light organic feeding.\n  Later in spring, reduce the number of canes to a few strong shoots suited to the small container.\n</p>\n\n<p class=\"hint\">\n  The focus right now is structure and resilience, not speed.\n  Strong canes matter more than early growth.\n</p>"
    },
```





python -m http.server 8000

http://localhost:8000/index.html
