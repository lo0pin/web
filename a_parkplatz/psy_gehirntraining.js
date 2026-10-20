"use strict";

/* Alle 99 Übungen: redaktionell eigenständige Originalaufgaben. */
const GT_CATEGORIES = {
    "wahrnehmung": {
        "label": "Wahrnehmung",
        "description": "Sinneseindrücke genauer registrieren, unterscheiden und einordnen.",
        "keyWords": "sehen, hören, beobachten"
    },
    "konzentration": {
        "label": "Konzentration",
        "description": "Die Aufmerksamkeit halten und zwischen Regeln kontrolliert wechseln.",
        "keyWords": "Fokus, Ablenkung, Kontrolle"
    },
    "gedaechtnis": {
        "label": "Gedächtnis",
        "description": "Verknüpfungen erzeugen, Inhalte abrufen und Erfahrungen bewahren.",
        "keyWords": "Bilder, Orte, Erinnerung"
    },
    "namen": {
        "label": "Namen & Personen",
        "description": "Begegnungen, Namen und soziale Kontexte bewusster kodieren.",
        "keyWords": "Namen, Gesichter, Kontext"
    },
    "wissen": {
        "label": "Wissen & Verstehen",
        "description": "Fakten mit Bedeutung verbinden, erklären und kritisch überprüfen.",
        "keyWords": "Erklären, Einordnen, Prüfen"
    },
    "kreativitaet": {
        "label": "Kreativität",
        "description": "Neue Perspektiven und unerwartete Lösungswege erproben.",
        "keyWords": "Ideen, Fantasie, Perspektiven"
    },
    "arbeitsgedaechtnis": {
        "label": "Arbeitsgedächtnis",
        "description": "Informationen kurzfristig behalten und gleichzeitig verändern.",
        "keyWords": "Manipulieren, Kombinieren"
    },
    "sprache": {
        "label": "Sprache & Ausdruck",
        "description": "Wortschatz, Bedeutungen und sprachliche Präzision aktivieren.",
        "keyWords": "Wörter, Sätze, Formulieren"
    },
    "zahlen": {
        "label": "Zahlen & Muster",
        "description": "Mengen, Reihenfolgen und Rechenstrategien spielerisch bearbeiten.",
        "keyWords": "Zahlen, Logik, Rechnen"
    },
    "fremdsprachen": {
        "label": "Fremdsprachen",
        "description": "Wörter und Strukturen in sinnvolle sprachliche Situationen bringen.",
        "keyWords": "Übersetzen, Anwenden"
    },
    "entspannung": {
        "label": "Aktivierung & Ruhe",
        "description": "Wahrnehmung des Körpers und bewusste Regeneration fördern.",
        "keyWords": "Pausen, Atmung, Körper"
    },
    "motivation": {
        "label": "Motivation & Gewohnheit",
        "description": "Kleine Anfänge und alltagstaugliche Lernroutinen etablieren.",
        "keyWords": "Routinen, Umsetzung"
    }
};

const GT_EXERCISES = [
    {
        "id": "uebung-001",
        "category": "wahrnehmung",
        "title": "Fensterinventur",
        "prompt": "Sieh 15 Sekunden aus einem Fenster. Wende dich ab und notiere fünf Gegenstände mit jeweils einer Eigenschaft. Überprüfe dann, welche Einzelheiten du richtig erinnert hast.",
        "variation": "Sortiere die Beobachtungen nach Nähe und Entfernung, ohne erneut hinzusehen.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-002",
        "category": "wahrnehmung",
        "title": "Drei Geräuschebenen",
        "prompt": "Lausche eine halbe Minute. Unterscheide Geräusche im Vordergrund, in mittlerer Entfernung und weit weg. Gib jeder Ebene eine kurze Bezeichnung.",
        "variation": "Beschreibe, wie sich die drei Klangquellen überlagern, statt sie nur aufzuzählen.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-003",
        "category": "wahrnehmung",
        "title": "Materialdetektiv",
        "prompt": "Berühre drei harmlose Oberflächen in deiner Umgebung, etwa Holz, Stoff und Papier. Beschreibe Struktur, Temperatur und Widerstand möglichst genau.",
        "variation": "Erkennst du eine Oberfläche bei geschlossenen Augen wieder?",
        "context": "zuhause",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-004",
        "category": "wahrnehmung",
        "title": "Der veränderte Winkel",
        "prompt": "Betrachte ein vertrautes Objekt einmal von unten, einmal von der Seite. Sammle Details, die du normalerweise übersiehst.",
        "variation": "Zeichne die Silhouette aus der ungewohnten Perspektive aus dem Gedächtnis.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-005",
        "category": "wahrnehmung",
        "title": "Farbfamilien",
        "prompt": "Finde innerhalb von 60 Sekunden fünf unterschiedliche Abstufungen derselben Farbe in deinem Umfeld. Benenne die Unterschiede so präzise wie möglich.",
        "variation": "Ordne die Farbtöne nach Helligkeit und Sättigung.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-006",
        "category": "wahrnehmung",
        "title": "Geruch und Erinnerung",
        "prompt": "Denke an drei Orte, die einen charakteristischen Geruch haben. Versuche, zu jedem Ort eine konkrete Erinnerung statt nur ein Etikett aufzurufen.",
        "variation": "Beschreibe zu jedem Ort auch ein Geräusch und eine Lichtstimmung.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-007",
        "category": "wahrnehmung",
        "title": "Der zweite Blick",
        "prompt": "Wähle eine unauffällige Szene. Formuliere zuerst eine spontane Beschreibung, betrachte sie dann nochmals und ergänze mindestens vier neue Details.",
        "variation": "Unterscheide Beobachtung von Interpretation: Was hast du gesehen, was bloß vermutet?",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-008",
        "category": "wahrnehmung",
        "title": "Objektgedächtnis",
        "prompt": "Betrachte eine kleine Gruppe von Gegenständen 20 Sekunden. Verdeck sie und zähle auf, welche Formen, Farben und Positionen du gesehen hast.",
        "variation": "Stelle die Gegenstände aus dem Gedächtnis in derselben Reihenfolge wieder auf.",
        "context": "zuhause",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-009",
        "category": "wahrnehmung",
        "title": "Die stille Minute",
        "prompt": "Beobachte einen kurzen Moment lang nur die Bewegungen um dich herum: Schatten, Pflanzen, Menschen oder Wolken. Halte drei Veränderungen fest.",
        "variation": "Schätze zuerst die zeitliche Reihenfolge der Veränderungen und kontrolliere sie anschließend.",
        "context": "unterwegs",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-010",
        "category": "konzentration",
        "title": "Zeichenjäger",
        "prompt": "Suche im angezeigten Buchstabenstrom ausschließlich den Buchstaben A. Zähle sorgfältig und prüfe dein Ergebnis mit einem zweiten Durchgang.",
        "variation": "Wiederhole die Suche nach jedem zweiten A nur mit den Augen, ohne mitzuzählen.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": "letters"
    },
    {
        "id": "uebung-011",
        "category": "konzentration",
        "title": "Das Gegenteil zuerst",
        "prompt": "Antworte auf alltägliche Ja-Nein-Fragen zunächst gedanklich mit dem Gegenteil, bevor du die richtige Antwort formulierst. Wechsle bei jeder neuen Frage bewusst die Regel.",
        "variation": "Versuche, während des gesamten Durchgangs keine Regelverwechslung zuzulassen.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-012",
        "category": "konzentration",
        "title": "Fokus trotz Geräusch",
        "prompt": "Wähle einen kurzen Text und lies ihn bewusst langsam, während gewöhnliche Umgebungsgeräusche vorhanden sind. Fasse anschließend den Hauptgedanken in einem Satz zusammen.",
        "variation": "Notiere zusätzlich zwei Details, die trotz der Ablenkung hängen geblieben sind.",
        "context": "zuhause",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-013",
        "category": "konzentration",
        "title": "Die alphabetische Spur",
        "prompt": "Nenne zu einem Thema Begriffe, deren Anfangsbuchstaben nacheinander im Alphabet aufsteigen. Starte beispielsweise bei B und arbeite dich bis H vor.",
        "variation": "Verbiete dir Eigennamen und Wiederholungen.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-014",
        "category": "konzentration",
        "title": "Fehler im Rhythmus",
        "prompt": "Klopfe viermal einen regelmäßigen Takt und setze beim fünften Schlag bewusst aus. Wiederhole das Muster sechsmal und verliere die Zählung nicht.",
        "variation": "Kombiniere einen langsameren Fußtakt mit dem schnelleren Handtakt.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-015",
        "category": "konzentration",
        "title": "Rückwärts durch den Satz",
        "prompt": "Formuliere einen Satz mit acht Wörtern. Sage die Wörter anschließend in umgekehrter Reihenfolge, ohne den ursprünglichen Satz aufzuschreiben.",
        "variation": "Verändere dabei nicht die Wörter und achte auf ihren genauen Wortlaut.",
        "context": "überall",
        "difficulty": "knifflig",
        "generator": ""
    },
    {
        "id": "uebung-016",
        "category": "konzentration",
        "title": "Doppelte Suchregel",
        "prompt": "Lies einen beliebigen kurzen Absatz und markiere in Gedanken Wörter, die sowohl mehr als sechs Buchstaben besitzen als auch mit einem Vokal beginnen.",
        "variation": "Suche anschließend Wörter, die genau eine der beiden Bedingungen erfüllen.",
        "context": "zuhause",
        "difficulty": "knifflig",
        "generator": ""
    },
    {
        "id": "uebung-017",
        "category": "konzentration",
        "title": "Schritt für Schritt",
        "prompt": "Plane eine vertraute Tätigkeit als Folge von sechs kleinen Schritten. Gehe sie gedanklich durch, ohne gedanklich bereits zum Ziel zu springen.",
        "variation": "Tausche zwei Schritte aus und erkläre, weshalb die neue Reihenfolge problematisch wäre.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-018",
        "category": "konzentration",
        "title": "Unterbrechung kontrollieren",
        "prompt": "Widme dich 40 Sekunden ausschließlich einer Aufgabe. Wenn ein anderer Gedanke auftaucht, benenne ihn kurz als Ablenkung und kehre zurück.",
        "variation": "Zähle nicht die Störungen, sondern die gelungenen Rückkehrbewegungen.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-019",
        "category": "konzentration",
        "title": "Die präzise Minute",
        "prompt": "Wähle einen Absatz und entdecke innerhalb einer Minute möglichst viele Satzzeichen. Unterscheide dabei Komma, Punkt, Doppelpunkt und Strichpunkt.",
        "variation": "Rekonstruiere die Abfolge der Satzzeichen danach aus dem Kopf.",
        "context": "zuhause",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-020",
        "category": "gedaechtnis",
        "title": "Der Weg zum Briefkasten",
        "prompt": "Stelle dir eine bekannte kurze Strecke vor. Lege in Gedanken an fünf markanten Stellen je einen neuen Begriff ab und rufe sie am Ende in Wegreihenfolge ab.",
        "variation": "Gehe den Weg in Gedanken zurück und nenne die Begriffe rückwärts.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": "words"
    },
    {
        "id": "uebung-021",
        "category": "gedaechtnis",
        "title": "Eine absurde Einkaufsszene",
        "prompt": "Verknüpfe die eingeblendeten Begriffe zu einer einzigen übertriebenen Szene. Verdecke die Liste und versuche, alle Wörter abzurufen.",
        "variation": "Erzähle die Szene rückwärts, ohne ein Wort zu verlieren.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": "words"
    },
    {
        "id": "uebung-022",
        "category": "gedaechtnis",
        "title": "Ein Moment mit vier Sinnen",
        "prompt": "Rufe eine Begebenheit aus der vergangenen Woche auf. Rekonstruiere jeweils ein visuelles, akustisches, körperliches und emotionales Detail.",
        "variation": "Vergleiche die Erinnerung mit einem Tagebucheintrag, falls vorhanden.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-023",
        "category": "gedaechtnis",
        "title": "Ort als Schlüssel",
        "prompt": "Wähle einen Ort, den du gut kennst. Ordne drei Lerninhalte unterschiedlichen Möbelstücken zu und rufe sie nach einer kurzen Ablenkung wieder ab.",
        "variation": "Ersetze abstrakte Lerninhalte durch bildhafte, möglichst bewegte Vorstellungen.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": "words"
    },
    {
        "id": "uebung-024",
        "category": "gedaechtnis",
        "title": "Das Merkwort",
        "prompt": "Erfinde ein ungewöhnliches zusammengesetztes Wort als Gedächtnishilfe für drei Verpflichtungen des nächsten Tages.",
        "variation": "Versuche, dich einige Stunden später allein vom Merkwort aus an die Verpflichtungen zu erinnern.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-025",
        "category": "gedaechtnis",
        "title": "Sieben Dinge, eine Geschichte",
        "prompt": "Nutze die eingeblendete Wortfolge für eine zusammenhängende Minigeschichte. Prüfe danach, ob dir alle Ausgangswörter wieder einfallen.",
        "variation": "Baue Ursache und Wirkung ein statt einer bloßen Aneinanderreihung.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": "words"
    },
    {
        "id": "uebung-026",
        "category": "gedaechtnis",
        "title": "Gestern in drei Szenen",
        "prompt": "Teile den gestrigen Tag in Morgen, Nachmittag und Abend. Suche zu jedem Abschnitt eine möglichst konkrete Episode und benenne einen Auslöser der Erinnerung.",
        "variation": "Ordne die drei Episoden nach Intensität ihrer Sinneseindrücke.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-027",
        "category": "gedaechtnis",
        "title": "Die Gedächtnisbrücke",
        "prompt": "Verwandle die angezeigte Zahlenfolge in eine kleine Erzählung, indem du jeder Ziffer ein selbst gewähltes Bild zuweist.",
        "variation": "Nutze beim nächsten Durchgang dieselben Bilder und vergleiche die Abrufgeschwindigkeit.",
        "context": "überall",
        "difficulty": "knifflig",
        "generator": "digits"
    },
    {
        "id": "uebung-028",
        "category": "gedaechtnis",
        "title": "Abruf ohne Nachschlagen",
        "prompt": "Lies einen kurzen selbst gewählten Sachabschnitt. Schließe die Quelle und formuliere aus dem Gedächtnis drei Kerninformationen.",
        "variation": "Prüfe anschließend gezielt nur die Punkte, bei denen du unsicher warst.",
        "context": "zuhause",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-029",
        "category": "gedaechtnis",
        "title": "Das spätere Wiedersehen",
        "prompt": "Präge dir vier kurze Begriffe ein, beschäftige dich mit etwas anderem und rufe sie nach einigen Minuten nochmals ab.",
        "variation": "Notiere, welche Art von Verknüpfung den späteren Abruf erleichtert hat.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": "words4"
    },
    {
        "id": "uebung-030",
        "category": "namen",
        "title": "Gesicht und Merkmal",
        "prompt": "Denke an eine Person, die du erst kürzlich kennengelernt hast. Verknüpfe den Namen mit einem unverwechselbaren, respektvollen Merkmal oder Kontext.",
        "variation": "Rufe den Namen später ohne Zugriff auf die Kontaktliste ab.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-031",
        "category": "namen",
        "title": "Begegnung als kleine Szene",
        "prompt": "Stelle dir vor, du lernst jemanden namens Nora kennen. Erfinde eine einprägsame Szene, in der der Name und der Ort der Begegnung zusammen auftreten.",
        "variation": "Ersetze Nora durch einen neuen frei erfundenen Namen.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-032",
        "category": "namen",
        "title": "Drei neue Bekanntschaften",
        "prompt": "Erfinde drei Personen mit drei unterschiedlichen Namen und Berufen. Gib jeder Person eine markante Tätigkeit, an die du ihren Namen knüpfst.",
        "variation": "Rufe zuerst nur die Berufe und danach die zugehörigen Namen ab.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-033",
        "category": "namen",
        "title": "Anfangsklang statt Anfangsbuchstabe",
        "prompt": "Nimm einen Namen und suche drei Wörter, die mit demselben Klang beginnen. Verwende eines für eine lebhafte Merkvorstellung.",
        "variation": "Probiere dieselbe Methode mit einem Namen, dessen Schreibung ungewohnt ist.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-034",
        "category": "namen",
        "title": "Namen sicher wiederholen",
        "prompt": "Spiele gedanklich eine Begrüßung durch und verwende den gerade gehörten Namen in einem natürlichen Folgesatz.",
        "variation": "Sage den Namen nach 30 Sekunden ein zweites Mal, ohne unnatürlich zu wirken.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-035",
        "category": "namen",
        "title": "Wer saß wo?",
        "prompt": "Stell dir einen Tisch mit vier Sitzplätzen und vier erfundenen Personen vor. Ordne die Namen festen Plätzen zu und rufe sie nach einer Ablenkung ab.",
        "variation": "Drehe das gedachte Bild um 180 Grad und identifiziere die Personen erneut.",
        "context": "überall",
        "difficulty": "knifflig",
        "generator": ""
    },
    {
        "id": "uebung-036",
        "category": "namen",
        "title": "Kontextmarken",
        "prompt": "Wähle drei reale Kontakte und verknüpfe ihren Namen jeweils mit einem gemeinsamen Gesprächsthema, nicht mit bloßer Ähnlichkeit des Namens.",
        "variation": "Rufe das Gesprächsthema beim nächsten Kontakt bewusst als Einstieg auf.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-037",
        "category": "namen",
        "title": "Das Namensnetz",
        "prompt": "Verknüpfe vier frei erfundene Namen zu einem Mini-Dialog. Jede Person sagt genau einen Satz, der zur nächsten Person führt.",
        "variation": "Rufe die Sprecherfolge nur mithilfe der Inhalte ab.",
        "context": "überall",
        "difficulty": "knifflig",
        "generator": ""
    },
    {
        "id": "uebung-038",
        "category": "wissen",
        "title": "Eine Behauptung zerlegen",
        "prompt": "Nimm einen Sachverhalt, den du zu kennen glaubst. Trenne in einem Satz gesicherte Kenntnis, Vermutung und offene Frage.",
        "variation": "Formuliere eine konkrete Möglichkeit, die offene Frage zu überprüfen.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-039",
        "category": "wissen",
        "title": "Die Erklärung für Zwölfjährige",
        "prompt": "Erkläre einen vertrauten Fachbegriff in höchstens drei kurzen Sätzen, ohne ein weiteres Fachwort zu benötigen.",
        "variation": "Finde eine alltagstaugliche Analogie und sage auch, wo sie nicht mehr trägt.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-040",
        "category": "wissen",
        "title": "Epochenleiter",
        "prompt": "Ordne vier historische Ereignisse, die du kennst, zeitlich. Erkläre bei mindestens einem, warum es vor oder nach einem anderen liegt.",
        "variation": "Überprüfe Daten nach der Übung und korrigiere eventuelle Irrtümer.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-041",
        "category": "wissen",
        "title": "Ein Ort, drei Eigenschaften",
        "prompt": "Wähle eine Stadt oder Region. Nenne dazu je eine geografische, kulturelle und historische Besonderheit.",
        "variation": "Trenne überprüfbare Tatsachen von verbreiteten Klischees.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-042",
        "category": "wissen",
        "title": "Wissen miteinander verbinden",
        "prompt": "Kombiniere zwei Wissensgebiete, etwa Wetterkunde und Architektur. Formuliere eine Frage, zu deren Antwort beide nötig sind.",
        "variation": "Suche später eine belastbare Quelle und prüfe deine Hypothese.",
        "context": "überall",
        "difficulty": "knifflig",
        "generator": ""
    },
    {
        "id": "uebung-043",
        "category": "wissen",
        "title": "Rätsel aus der eigenen Bibliothek",
        "prompt": "Suche ein Buch aus dem Regal und notiere aus dem Gedächtnis Autor, Erscheinungszeitraum und Thema. Vergleiche anschließend mit den bibliografischen Angaben.",
        "variation": "Ergänze eine Verbindung zu einem zweiten Buch.",
        "context": "zuhause",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-044",
        "category": "wissen",
        "title": "Begriffsleiter",
        "prompt": "Starte mit einem bekannten Fachbegriff. Finde drei präzisere Unterbegriffe und anschließend einen übergeordneten Oberbegriff.",
        "variation": "Zeichne ein kleines Begriffsnetz mit mindestens zwei Querverbindungen.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-045",
        "category": "wissen",
        "title": "Aktiv lesen",
        "prompt": "Lies eine kurze Nachricht oder einen sachlichen Absatz. Formuliere anschließend die Kernthese und eine Nachfrage, die der Text nicht beantwortet.",
        "variation": "Unterscheide berichtete Fakten von Bewertungen der Autorin oder des Autors.",
        "context": "zuhause",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-046",
        "category": "kreativitaet",
        "title": "Ungewöhnliche Verwendung",
        "prompt": "Suche für einen ganz gewöhnlichen Gegenstand fünf sinnvolle Zweitverwendungen, die nichts mit seinem Hauptzweck zu tun haben.",
        "variation": "Verwerfe die ersten drei offensichtlichen Antworten und finde weitere.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-047",
        "category": "kreativitaet",
        "title": "Der unmögliche Gegenstand",
        "prompt": "Entwirf in Gedanken einen Gegenstand mit zwei widersprüchlichen Eigenschaften, etwa einen faltbaren Stein. Erfinde eine Welt, in der er sinnvoll wäre.",
        "variation": "Formuliere eine technische oder erzählerische Regel, die ihn plausibel macht.",
        "context": "überall",
        "difficulty": "knifflig",
        "generator": ""
    },
    {
        "id": "uebung-048",
        "category": "kreativitaet",
        "title": "Zwei Wörter, ein Produkt",
        "prompt": "Nutze die eingeblendeten Begriffe als Ausgangspunkt für eine erfundene Dienstleistung. Beschreibe Zielgruppe und Nutzen in zwei Sätzen.",
        "variation": "Gib deiner Idee einen Titel mit höchstens drei Wörtern.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": "words"
    },
    {
        "id": "uebung-049",
        "category": "kreativitaet",
        "title": "Ein anderer Schluss",
        "prompt": "Nimm eine dir bekannte Alltagsepisode und ändere eine kleine Entscheidung. Denke drei mögliche Folgen dieser Veränderung durch.",
        "variation": "Wähle die unwahrscheinlichste Folge und mache sie erzählerisch überzeugend.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-050",
        "category": "kreativitaet",
        "title": "Geschichte in einem Satz",
        "prompt": "Erfinde eine winzige Geschichte mit Ausgangslage, Wendung und Schluss – alles in nur einem einzigen Satz.",
        "variation": "Schreibe denselben Inhalt anschließend aus Sicht einer Nebenfigur.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-051",
        "category": "kreativitaet",
        "title": "Perspektiventausch",
        "prompt": "Beschreibe ein vertrautes Zimmer so, als würde ein Insekt dort unterwegs sein. Was erscheint groß, gefährlich oder rätselhaft?",
        "variation": "Wiederhole das Experiment aus Sicht eines Staubroboters.",
        "context": "zuhause",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-052",
        "category": "kreativitaet",
        "title": "Die Verbindungslinie",
        "prompt": "Suche zwischen zwei scheinbar unverbundenen Dingen mindestens vier Gemeinsamkeiten, ohne oberflächliche Antworten wie „beides existiert“.",
        "variation": "Erfinde daraus einen Vergleich, der etwas tatsächlich erklärt.",
        "context": "überall",
        "difficulty": "knifflig",
        "generator": ""
    },
    {
        "id": "uebung-053",
        "category": "kreativitaet",
        "title": "Geräusch wird Landschaft",
        "prompt": "Denke dir aus einem beliebigen Geräusch eine imaginäre Landschaft. Beschreibe ihre Topografie und Stimmung.",
        "variation": "Überführe die Landschaft in eine kurze Szene mit einer Handlung.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-054",
        "category": "kreativitaet",
        "title": "Bild aus fünf Formen",
        "prompt": "Zeichne mit nur Kreis, Dreieck, Linie, Rechteck und Punkt ein erfundenes Wesen oder Gerät. Jede Form darf höchstens zweimal vorkommen.",
        "variation": "Erkläre die Funktion jedes gezeichneten Elements.",
        "context": "zuhause",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-055",
        "category": "arbeitsgedaechtnis",
        "title": "Ziffern rückwärts",
        "prompt": "Präge dir die angezeigte Zahlenfolge kurz ein. Decke sie ab und sprich alle Ziffern in umgekehrter Reihenfolge.",
        "variation": "Erhöhe die Zahl der Stellen um zwei, wenn die Aufgabe mehrfach gelingt.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": "digits"
    },
    {
        "id": "uebung-056",
        "category": "arbeitsgedaechtnis",
        "title": "Wörter alphabetisch sortieren",
        "prompt": "Sieh dir die angezeigten Wörter an. Verberge sie und ordne sie im Kopf nach alphabetischer Reihenfolge.",
        "variation": "Nenne erst die letzten und dann die ersten beiden Begriffe.",
        "context": "überall",
        "difficulty": "knifflig",
        "generator": "words"
    },
    {
        "id": "uebung-057",
        "category": "arbeitsgedaechtnis",
        "title": "Rechenpfad im Kopf",
        "prompt": "Starte bei 24. Addiere 9, ziehe 5 ab, verdopple das Ergebnis und teile anschließend durch 4. Behalte jeden Zwischenwert im Kopf.",
        "variation": "Formuliere einen eigenen Pfad mit einer zusätzlichen Operation.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-058",
        "category": "arbeitsgedaechtnis",
        "title": "Muster merken, Muster verändern",
        "prompt": "Sieh die Buchstabenfolge an. Verdecke sie und ersetze gedanklich jeden zweiten Buchstaben durch den folgenden im Alphabet.",
        "variation": "Sage die veränderte Folge rückwärts.",
        "context": "überall",
        "difficulty": "knifflig",
        "generator": "letters"
    },
    {
        "id": "uebung-059",
        "category": "arbeitsgedaechtnis",
        "title": "Die gedrehte Uhr",
        "prompt": "Stelle dir eine Analoguhr um 3:15 Uhr vor. Drehe sie gedanklich um eine halbe Umdrehung und erkläre, wohin Stunden- und Minutenzeiger nun zeigen.",
        "variation": "Wiederhole mit 7:40 Uhr und einer Vierteldrehung.",
        "context": "überall",
        "difficulty": "knifflig",
        "generator": ""
    },
    {
        "id": "uebung-060",
        "category": "arbeitsgedaechtnis",
        "title": "Zwei Regeln auf einmal",
        "prompt": "Nenne innerlich Zahlen von 1 bis 20. Bei Vielfachen von 3 sagst du „rot“, bei Vielfachen von 4 „blau“, bei gemeinsamen Vielfachen beide Wörter.",
        "variation": "Starte bei 20 und arbeite abwärts.",
        "context": "überall",
        "difficulty": "knifflig",
        "generator": ""
    },
    {
        "id": "uebung-061",
        "category": "arbeitsgedaechtnis",
        "title": "Das fehlende Element",
        "prompt": "Schaue dir die Wortliste an. Decke sie ab, lass dir gedanklich ein Wort wegfallen und überlege, welche vier übrig bleiben.",
        "variation": "Rufe danach die vollständige ursprüngliche Liste wieder auf.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": "words5"
    },
    {
        "id": "uebung-062",
        "category": "arbeitsgedaechtnis",
        "title": "Die wandernde Position",
        "prompt": "Merke dir die Reihenfolge der angezeigten Begriffe. Verschiebe gedanklich das erste Wort ans Ende, ohne die übrigen zu vertauschen.",
        "variation": "Verschiebe danach zusätzlich das neue zweite Wort an den Anfang.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": "words"
    },
    {
        "id": "uebung-063",
        "category": "arbeitsgedaechtnis",
        "title": "Ein Satz, zwei Aufgaben",
        "prompt": "Denke dir einen Satz mit sechs Wörtern. Zähle seine Silben und merke dir zugleich das dritte Wort.",
        "variation": "Gib danach sowohl die Silbenzahl als auch das dritte Wort wieder.",
        "context": "überall",
        "difficulty": "knifflig",
        "generator": ""
    },
    {
        "id": "uebung-064",
        "category": "arbeitsgedaechtnis",
        "title": "Mentales Koordinatenspiel",
        "prompt": "Stelle dir ein Raster aus drei mal drei Feldern vor. Beginne in der Mitte und gehe gedanklich hoch, rechts, runter, runter, links. In welchem Feld landest du?",
        "variation": "Erfinde eine neue gültige Wegfolge, die im Ausgangsfeld endet.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-065",
        "category": "sprache",
        "title": "Das präzisere Wort",
        "prompt": "Ersetze in einem selbst formulierten Satz ein unscharfes Verb wie „machen“ oder „haben“ durch ein treffenderes. Verändere den Sinn dabei nicht.",
        "variation": "Finde zwei Varianten mit unterschiedlichem Stilregister.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-066",
        "category": "sprache",
        "title": "Wortfamilie untersuchen",
        "prompt": "Wähle ein Wort und sammle möglichst viele verwandte Begriffe aus derselben Wortfamilie. Trenne Ableitungen und Zusammensetzungen.",
        "variation": "Erkläre, wie sich die Bedeutung zwischen zwei Ableitungen verändert.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-067",
        "category": "sprache",
        "title": "Die Gegenbegriffe",
        "prompt": "Suche zu fünf beliebigen Eigenschaften jeweils ein möglichst präzises Gegenteil. Vermeide automatische Paare wie „heiß – kalt“.",
        "variation": "Finde zu einem Begriff zwei Gegensätze, die je einen anderen Aspekt hervorheben.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-068",
        "category": "sprache",
        "title": "Drei Beschreibungen",
        "prompt": "Beschreibe denselben Gegenstand sachlich, humorvoll und poetisch, jeweils in höchstens einem Satz.",
        "variation": "Streiche in jeder Version ein überflüssiges Adjektiv.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-069",
        "category": "sprache",
        "title": "Buchstaben neu sortiert",
        "prompt": "Nimm das eingeblendete Wortmaterial. Baue daraus möglichst viele kürzere Wörter, ohne einen Buchstaben öfter zu verwenden als vorhanden.",
        "variation": "Versuche ausschließlich Wörter mit mindestens vier Buchstaben.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": "syllables"
    },
    {
        "id": "uebung-070",
        "category": "sprache",
        "title": "Ein Begriff ohne seinen Namen",
        "prompt": "Erkläre einen bekannten Gegenstand so, dass eine andere Person ihn erraten könnte, ohne den Namen oder seine Bestandteile auszusprechen.",
        "variation": "Verbiete dir zusätzlich die zwei naheliegendsten Synonyme.",
        "context": "mitpartner",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-071",
        "category": "sprache",
        "title": "Mini-Rede ohne Füllwörter",
        "prompt": "Sprich 60 Sekunden lang über ein vertrautes Thema. Achte darauf, keine Füllwörter als Überbrückung einzusetzen.",
        "variation": "Nimm dich auf und unterscheide bewusste Pausen von Fülllauten.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-072",
        "category": "sprache",
        "title": "Ein Gedanke als Frage",
        "prompt": "Nimm eine Behauptung aus deinem Alltag und formuliere daraus drei verschiedene Fragen: eine offene, eine kritische und eine hypothetische.",
        "variation": "Überprüfe, wie stark die Wortwahl mögliche Antworten vorprägt.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-073",
        "category": "sprache",
        "title": "Erzählung aus drei Substantiven",
        "prompt": "Verbinde die drei eingeblendeten Begriffe in einem Mini-Text. Der Schluss muss die Bedeutung des ersten Wortes verändern.",
        "variation": "Ersetze den ersten Satz, ohne die Handlung zu verändern.",
        "context": "überall",
        "difficulty": "knifflig",
        "generator": "words"
    },
    {
        "id": "uebung-074",
        "category": "zahlen",
        "title": "Die Summe sehen",
        "prompt": "Nimm die eingeblendete Zahlenfolge und suche Paare, deren Summe 10 ergibt. Arbeite gedanklich, ohne die Zahlen zu verschieben.",
        "variation": "Suche stattdessen Zahlenpaare, die zusammen 12 ergeben.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": "sum10"
    },
    {
        "id": "uebung-075",
        "category": "zahlen",
        "title": "Kopfrechnen mit Anker",
        "prompt": "Berechne 49 × 6 über den benachbarten glatten Wert 50 × 6. Erkläre die nötige Korrektur.",
        "variation": "Übertrage das Verfahren auf 98 × 7.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-076",
        "category": "zahlen",
        "title": "Zahlen in Gruppen",
        "prompt": "Betrachte die angezeigten Ziffern und teile sie in zwei bis vier sinnvolle Blöcke. Versuche, dir die Folge mithilfe der Gruppen zu merken.",
        "variation": "Probiere eine andere Gruppierung und vergleiche, welche leichter abrufbar ist.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": "digits"
    },
    {
        "id": "uebung-077",
        "category": "zahlen",
        "title": "Überschlagen statt raten",
        "prompt": "Schätze ohne Taschenrechner das Ergebnis von 203 × 18. Gib zuerst eine Größenordnung und erst danach eine genauere Näherung an.",
        "variation": "Bestimme den relativen Fehler nach einer exakten Rechnung.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-078",
        "category": "zahlen",
        "title": "Zahlengeschichte",
        "prompt": "Nutze eine beliebige dreistellige Zahl. Erfinde zu ihren Ziffern drei zusammenhängende Bilder und merke dir die Reihenfolge.",
        "variation": "Prüfe den Abruf nach zwei Minuten Ablenkung.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": "digits"
    },
    {
        "id": "uebung-079",
        "category": "zahlen",
        "title": "Muster mit Ausnahmen",
        "prompt": "Analysiere die angezeigte Zahlenreihe und formuliere eine mögliche Fortsetzungsregel. Überlege, ob mehr als eine Regel passen könnte.",
        "variation": "Erfinde absichtlich eine zweite, ungewöhnliche gültige Regel.",
        "context": "überall",
        "difficulty": "knifflig",
        "generator": "pattern"
    },
    {
        "id": "uebung-080",
        "category": "zahlen",
        "title": "Der Ein-Minuten-Kassenbon",
        "prompt": "Denke dir drei kleine Einkäufe aus und gib jedem einen gerundeten Preis. Berechne die Gesamtsumme und das Wechselgeld bei einer 20-Euro-Zahlung.",
        "variation": "Nutze danach realistische Centbeträge und rechne genauer.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-081",
        "category": "zahlen",
        "title": "Halbieren und verdoppeln",
        "prompt": "Beginne bei 18. Verdopple zweimal, halbiere einmal, addiere 7 und subtrahiere 13. Nenne am Ende auch die Zwischenergebnisse.",
        "variation": "Baue eine weitere Halbierung ein, ohne Dezimalzahlen zu erhalten.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-082",
        "category": "zahlen",
        "title": "Fehlerdiagnose",
        "prompt": "Denke dir eine plausible, aber falsche Rechnung aus. Erkläre, an welchem Rechenschritt der Fehler entstanden ist, und verbessere ihn.",
        "variation": "Formuliere eine Kontrollrechnung mit einer anderen Methode.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-083",
        "category": "fremdsprachen",
        "title": "Die Küche zweisprachig",
        "prompt": "Benenne fünf Gegenstände in deiner Umgebung in einer Fremdsprache, die du lernst. Zu jedem Wort formulierst du einen sehr kurzen Satz.",
        "variation": "Beschreibe zusätzlich Ort oder Eigenschaft jedes Gegenstands.",
        "context": "zuhause",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-084",
        "category": "fremdsprachen",
        "title": "Satz aus drei Bausteinen",
        "prompt": "Formuliere einen Satz mit einer Person, einer Tätigkeit und einer Zeitangabe. Übersetze ihn und überprüfe die Wortstellung.",
        "variation": "Verwandle die Aussage anschließend in eine Frage.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-085",
        "category": "fremdsprachen",
        "title": "Wörter aus dem Zusammenhang",
        "prompt": "Wähle ein unbekanntes Wort aus einem kurzen fremdsprachigen Text. Rate seine Bedeutung aus dem Kontext und überprüfe sie erst danach.",
        "variation": "Notiere, welche Textsignale dich zur Vermutung geführt haben.",
        "context": "zuhause",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-086",
        "category": "fremdsprachen",
        "title": "Falsche Freunde erkennen",
        "prompt": "Suche ein Wortpaar zweier Sprachen, das ähnlich aussieht, aber Unterschiedliches bedeutet. Baue beide Wörter in je einen Beispielsatz ein.",
        "variation": "Sammle später zwei weitere Paare und erkläre die Unterschiede.",
        "context": "überall",
        "difficulty": "knifflig",
        "generator": ""
    },
    {
        "id": "uebung-087",
        "category": "fremdsprachen",
        "title": "Ein Gedanke, drei Register",
        "prompt": "Übersetze dieselbe Bitte in eine höfliche, neutrale und umgangssprachliche Form. Achte auf Situation und Adressat.",
        "variation": "Vergleiche, ob sich die Direktheit der Formulierung verändert.",
        "context": "überall",
        "difficulty": "knifflig",
        "generator": ""
    },
    {
        "id": "uebung-088",
        "category": "fremdsprachen",
        "title": "Mini-Dialog im Ausland",
        "prompt": "Stell dir vor, du müsstest nach dem Weg fragen. Formuliere die Frage und eine mögliche Antwort in deiner Lernsprache.",
        "variation": "Spiele danach eine unerwartete Rückfrage durch.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-089",
        "category": "entspannung",
        "title": "Schultern bewusst lösen",
        "prompt": "Ziehe die Schultern für wenige Sekunden sanft hoch, lasse sie wieder sinken und beobachte den Unterschied. Wiederhole das ohne Kraftaufwand.",
        "variation": "Verbinde das Loslassen mit einem besonders ruhigen Ausatmen.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-090",
        "category": "entspannung",
        "title": "Atemzüge zählen",
        "prompt": "Atme in angenehmem eigenem Rhythmus. Zähle die Ausatmungen von eins bis zehn und beginne bei jeder Ablenkung ruhig von vorn.",
        "variation": "Verkürze die Zählstrecke auf fünf und richte mehr Aufmerksamkeit auf den Atemfluss.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-091",
        "category": "entspannung",
        "title": "Blick in die Ferne",
        "prompt": "Unterbrich die Bildschirmarbeit kurz. Schaue auf ein entferntes Objekt und beobachte Form und Umriss, ohne die Augen anzustrengen.",
        "variation": "Vergleiche bewusst einen nahen und einen fernen Gegenstand.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-092",
        "category": "entspannung",
        "title": "Gesicht entspannen",
        "prompt": "Prüfe Stirn, Kiefer und Augenpartie auf unnötige Spannung. Löse die Spannung nacheinander und achte auf den Unterschied.",
        "variation": "Verbinde jede Entspannung mit einem einfachen Stichwort.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-093",
        "category": "entspannung",
        "title": "Eine ruhige Körperreise",
        "prompt": "Wandere mit deiner Aufmerksamkeit langsam von den Füßen bis zum Kopf. Benenne an drei Stationen die Empfindung, ohne sie zu bewerten.",
        "variation": "Wiederhole die Reise in umgekehrter Richtung.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-094",
        "category": "entspannung",
        "title": "Der Minutenwechsel",
        "prompt": "Unterbrich für eine Minute bewusst deine gegenwärtige Tätigkeit. Spüre deine Haltung, richte dich bequem aus und bestimme anschließend den nächsten einzelnen Arbeitsschritt.",
        "variation": "Verzichte in dieser Minute vollständig auf den Blick aufs Smartphone.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-095",
        "category": "motivation",
        "title": "Ein kleiner Anfang",
        "prompt": "Wähle eine Aufgabe, die du seit Tagen aufschiebst. Zerlege sie in einen Teilschritt, der wirklich innerhalb von 60 Sekunden erledigt werden kann.",
        "variation": "Führe genau diesen Teilschritt unmittelbar nach der Übung aus.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-096",
        "category": "motivation",
        "title": "Gelungen statt perfekt",
        "prompt": "Rufe eine Sache auf, die heute nicht perfekt, aber ausreichend gut gelungen ist. Benenne konkret, woran du den Fortschritt erkennst.",
        "variation": "Formuliere eine nächste Verbesserung ohne Selbstabwertung.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-097",
        "category": "motivation",
        "title": "Die Hindernisfrage",
        "prompt": "Denke an eine gewünschte Gewohnheit. Benenne das wahrscheinlichste Hindernis und entwickle einen konkreten Wenn-dann-Plan dafür.",
        "variation": "Teste die Formulierung an einem realen Beispiel der vergangenen Woche.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    },
    {
        "id": "uebung-098",
        "category": "motivation",
        "title": "Ein Grund, der trägt",
        "prompt": "Formuliere in einem Satz, warum du eine Fertigkeit erlernen möchtest. Ergänze ein Beispiel, wann du sie im Alltag tatsächlich brauchst.",
        "variation": "Ersetze ein abstraktes Motiv durch eine überprüfbare Handlung.",
        "context": "überall",
        "difficulty": "leicht",
        "generator": ""
    },
    {
        "id": "uebung-099",
        "category": "motivation",
        "title": "Der Wochenrückblick",
        "prompt": "Schätze, welche Lernaufgabe dir zuletzt leichter fiel und welche schwieriger. Leite für die nächste Woche eine kleine Änderung ab.",
        "variation": "Unterscheide Motivation, verfügbare Zeit und tatsächliche Schwierigkeit.",
        "context": "überall",
        "difficulty": "mittel",
        "generator": ""
    }
];

/* Browserlogik: kein Framework, keine externen Requests.
   Tagesrotation: 99 eindeutige Einträge je 99-Tage-Zyklus.
   Fortschritt: ausschließlich Browser-localStorage, keine serverseitige Synchronisierung. */
(() => {
    const $ = (id) => document.getElementById(id);
    const STORAGE_KEY = 'gehirntraining-lokal-v1';
    const MS_PER_DAY = 86400000;
    const CODES = new Set(GT_EXERCISES.map((e) => e.id));
    const byId = new Map(GT_EXERCISES.map((e) => [e.id, e]));
    const localeDay = () => {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    };
    const dayIndex = () => {
        const [y, m, d] = localeDay().split('-').map(Number);
        return (Date.UTC(y, m - 1, d) - Date.UTC(2026, 0, 1)) / MS_PER_DAY;
    };
    const today = localeDay();
    let storageEnabled = true;
    let progress = { countById: {}, completedByDate: {}, favorites: [] };

    function loadProgress() {
        try {
            const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
            if (raw && typeof raw === 'object') {
                progress.countById = raw.countById && typeof raw.countById === 'object' ? raw.countById : {};
                progress.completedByDate = raw.completedByDate && typeof raw.completedByDate === 'object' ? raw.completedByDate : {};
                progress.favorites = Array.isArray(raw.favorites) ? raw.favorites.filter(id => CODES.has(id)) : [];
            }
        } catch (e) { storageEnabled = false; console.info('Training ohne dauerhaften Browserspeicher.', e) }
    }
    function saveProgress() {
        if (!storageEnabled) return;
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
        catch (e) { storageEnabled = false; console.info('Fortschritt ist nur für diese Sitzung verfügbar.', e) }
    }
    loadProgress();

    // Deterministischer Pseudozufall: derselbe Tag ergibt auf jedem Reload dieselbe Übung.
    function mulberry32(seed) { let t = seed >>> 0; return () => { t += 0x6d2b79f5; let x = t; x = Math.imul(x ^ (x >>> 15), x | 1); x ^= x + Math.imul(x ^ (x >>> 7), x | 61); return ((x ^ (x >>> 14)) >>> 0) / 4294967296 } }
    const randInt = (rand, min, max) => min + Math.floor(rand() * (max - min + 1));
    const shuffle = (input, rand) => { const arr = input.slice(); for (let i = arr.length - 1; i > 0; i--) { let j = Math.floor(rand() * (i + 1));[arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; };
    function deckForCycle(cycle) {
        // Absichtlich dieselbe faire Reihenfolge in jedem Durchgang:
        // Nur so ist in JEDEM gleitenden 99-Tage-Fenster jede Aufgabe exakt einmal vertreten.
        // Einzelne Zahlen-/Wortvorlagen variieren dank Tagesdatum trotzdem.
        const rand = mulberry32(0x64b1ac7);
        const deck = shuffle(GT_EXERCISES, rand);
        // Nachbarschaften derselben Kategorie möglichst reduzieren, ohne Aufgaben zu duplizieren.
        for (let i = 1; i < deck.length; i++) {
            if (deck[i].category !== deck[i - 1].category) continue;
            const replacement = deck.findIndex((candidate, j) => j > i && candidate.category !== deck[i - 1].category && (j === deck.length - 1 || deck[j + 1].category !== deck[i].category));
            if (replacement > i) { [deck[i], deck[replacement]] = [deck[replacement], deck[i]]; }
        }
        return deck;
    }
    function dailyInfo() {
        const ordinal = dayIndex(); const cycle = Math.floor(ordinal / GT_EXERCISES.length);
        const slot = ((ordinal % GT_EXERCISES.length) + GT_EXERCISES.length) % GT_EXERCISES.length;
        return { deck: deckForCycle(cycle), slot, cycle };
    }
    const daily = dailyInfo();
    const mainDaily = daily.deck[daily.slot];

    const STIMULUS_WORDS = ['Leuchtturm', 'Kiesel', 'Kompass', 'Kirsche', 'Wolke', 'Schlüssel', 'Balkon', 'Fahrrad', 'Teleskop', 'Muschel', 'Koffer', 'Kerze', 'Glocke', 'Biber', 'Trommel', 'Fels', 'Löffel', 'Buch', 'Falter', 'Insel', 'Tinte', 'Brücke', 'Komet', 'Blume', 'Rucksack', 'Spiegel', 'Orgel', 'Schnecke', 'Schiff', 'Dach', 'Messer', 'Schal', 'Mond', 'Stern', 'Kräuter', 'Fenster', 'Bach', 'Würfel', 'Bogen', 'Karton', 'Garten', 'Zirkel', 'Birne', 'Mühle', 'Hafen', 'Musik', 'Sonne', 'Feder', 'Sofa', 'Stiefel', 'Pfau', 'Nebel'];
    const SOURCE_WORDS = ['GARTENZAUN', 'WINTERSONNE', 'REGENMANTEL', 'HAFENLICHT', 'WOLKENBILD', 'BUCHSTABEN'];
    function generatedContent(item, nonce = 0) {
        if (!item.generator) return null;
        const idNumber = Number(item.id.split('-')[1]);
        const rand = mulberry32(((idNumber * 991 + dayIndex() * 53 + nonce * 3907 + 76543) >>> 0));
        if (item.generator.startsWith('words')) {
            const quantity = Number(item.generator.slice(5)) || 7;
            const words = shuffle(STIMULUS_WORDS, rand).slice(0, quantity);
            return { text: words.join(' · '), solution: null };
        }
        if (item.generator === 'digits') {
            const digits = Array.from({ length: 8 }, () => randInt(rand, 0, 9));
            return { text: digits.join('  '), solution: `Rückwärts gelesen: ${digits.slice().reverse().join('  ')}` };
        }
        if (item.generator === 'letters') {
            const alphabet = 'ABCEFGHIKLMNOPRSTUVWXYZ';
            const amount = item.title === 'Zeichenjäger' ? 74 : 9;
            const result = Array.from({ length: amount }, () => alphabet[randInt(rand, 0, alphabet.length - 1)]);
            return { text: result.join(amount > 30 ? '' : '  '), solution: item.title === 'Zeichenjäger' ? `Der Buchstabe A erscheint ${result.filter(x => x === 'A').length}-mal.` : null };
        }
        if (item.generator === 'syllables') return { text: SOURCE_WORDS[randInt(rand, 0, SOURCE_WORDS.length - 1)], solution: null };
        if (item.generator === 'sum10') {
            const pairs = Array.from({ length: 5 }, () => { const v = randInt(rand, 1, 9); return [v, 10 - v] });
            const seq = shuffle(pairs.flat(), rand);
            return { text: seq.join(' · '), solution: 'Eine vollständige Paarung enthält fünf Zahlenpaare mit Summe 10.' };
        }
        if (item.generator === 'pattern') {
            const from = randInt(rand, 2, 12), step = randInt(rand, 2, 7);
            const seq = Array.from({ length: 6 }, (_, i) => from + i * step);
            return { text: seq.join(' · ') + ' · ?', solution: `Eine mögliche Regel lautet: immer ${step} addieren. Nächste Zahl: ${from + 6 * step}. Andere Regeln können ebenfalls zu den gegebenen Werten passen.` };
        }
        if (item.generator === 'sequence') {
            const seq = Array.from({ length: 9 }, () => randInt(rand, 0, 15));
            return { text: seq.join(' · '), solution: null };
        }
        return null;
    }

    const elements = {
        activeDomain: $('gt-active-domain'), activeTitle: $('gt-active-title'), activeMeta: $('gt-active-meta'), activePrompt: $('gt-active-prompt'), activeVariation: $('gt-active-variation'), activePurpose: $('gt-active-purpose'),
        stimulusBlock: $('gt-stimulus-block'), stimulusText: $('gt-stimulus-text'), stimulusToggle: $('gt-toggle-stimulus'), stimulusSolution: $('gt-solution'), solutionContainer: $('gt-solution-container'),
        timerDisplay: $('gt-timer-display'), timerBar: $('gt-timer-bar'), timerStart: $('gt-timer-start'), timerReset: $('gt-timer-reset'),
        feedback: $('gt-feedback'), favorite: $('gt-favorite'), complete: $('gt-complete'), next: $('gt-next'), planStatus: $('gt-plan-status')
    };
    let selected = null;
    let stimulus = null;
    let stimulusNonce = 0;
    let stimulusShown = true;
    let plan = [];
    let planPosition = 0;
    let countdown = { remaining: 60000, running: false, deadline: 0, timer: null };
    const categoryName = (key) => GT_CATEGORIES[key]?.label || key;
    const cleanText = (value) => String(value).replace(/\s+/g, ' ').trim();
    const localDayKeys = () => Object.keys(progress.completedByDate).filter(day => Array.isArray(progress.completedByDate[day]) && progress.completedByDate[day].length);
    const seenToday = (id) => Array.isArray(progress.completedByDate[today]) && progress.completedByDate[today].includes(id);
    function updateStats() {
        const uniques = GT_EXERCISES.filter(item => Number(progress.countById[item.id] || 0) > 0).length;
        const total = GT_EXERCISES.reduce((n, item) => n + (Number(progress.countById[item.id] || 0) || 0), 0);
        const dates = new Set(localDayKeys());
        let streak = 0; let start = dayIndex();
        if (!dates.has(today)) start--;
        for (let day = start; streak < 3660; day--) {
            const iso = new Date(Date.UTC(2026, 0, 1) + day * MS_PER_DAY).toISOString().slice(0, 10);
            if (!dates.has(iso)) break;
            streak++;
        }
        $('gt-stat-unique').textContent = String(uniques);
        $('gt-stat-total').textContent = String(total);
        $('gt-stat-streak').textContent = String(streak);
    }
    function showNotice(text) { elements.feedback.textContent = text; }
    function stopClock() { if (countdown.timer !== null) { clearInterval(countdown.timer); countdown.timer = null; } countdown.running = false; }
    function renderClock() {
        const wholeSeconds = Math.ceil(countdown.remaining / 1000);
        elements.timerDisplay.textContent = `${String(Math.floor(wholeSeconds / 60)).padStart(2, '0')}:${String(wholeSeconds % 60).padStart(2, '0')}`;
        elements.timerBar.style.width = `${Math.max(0, Math.min(100, countdown.remaining / 600))}%`;
        elements.timerStart.textContent = countdown.running ? 'Pause' : countdown.remaining < 1 ? 'Erneut starten' : countdown.remaining < 60000 ? 'Fortsetzen' : '60 Sekunden starten';
    }
    function resetClock() { stopClock(); countdown.remaining = 60000; renderClock(); }
    function clockStep() {
        countdown.remaining = Math.max(0, countdown.deadline - Date.now());
        if (countdown.remaining <= 0) { stopClock(); showNotice('60 Sekunden sind vorbei. Du kannst die Übung jetzt als erledigt markieren oder ohne Zeitdruck fortsetzen.'); }
        renderClock();
    }
    function toggleClock() {
        if (!selected) return;
        if (countdown.running) { clockStep(); stopClock(); renderClock(); return; }
        if (countdown.remaining < 1) countdown.remaining = 60000;
        countdown.deadline = Date.now() + countdown.remaining;
        countdown.running = true;
        countdown.timer = setInterval(clockStep, 120);
        clockStep();
    }
    function renderStimulus() {
        stimulus = generatedContent(selected, stimulusNonce);
        elements.stimulusBlock.hidden = !stimulus;
        if (!stimulus) return;
        stimulusShown = true;
        elements.stimulusText.textContent = stimulus.text;
        elements.stimulusText.classList.remove('gt-hidden');
        elements.stimulusToggle.textContent = 'Material ausblenden';
        elements.solutionContainer.hidden = !stimulus.solution;
        elements.solutionContainer.open = false;
        elements.stimulusSolution.textContent = stimulus.solution || '';
    }
    function renderActive() {
        if (!selected) return;
        elements.activeDomain.textContent = categoryName(selected.category);
        elements.activeTitle.textContent = selected.title;
        elements.activeMeta.textContent = `Nr. ${Number(selected.id.slice(-3))} von 99 · ${selected.difficulty} · ${selected.context === 'mitpartner' ? 'mit einer zweiten Person' : selected.context}`;
        elements.activePrompt.textContent = selected.prompt;
        elements.activeVariation.textContent = selected.variation;
        elements.activePurpose.textContent = `Trainingsziel: ${GT_CATEGORIES[selected.category].description}`;
        renderStimulus();
        const favorite = progress.favorites.includes(selected.id);
        elements.favorite.setAttribute('aria-pressed', String(favorite));
        elements.favorite.innerHTML = favorite ? '★ <span>Gemerkt</span>' : '☆ <span>Merken</span>';
        const done = seenToday(selected.id);
        elements.complete.disabled = done;
        elements.complete.textContent = done ? '✓ Heute bereits erledigt' : '✓ Als erledigt markieren';
        elements.planStatus.textContent = plan.length ? `Dein Plan: Aufgabe ${planPosition + 1} von ${plan.length} · ${plan.map(e => e.title).join(' → ')}` : `Freie Übung · ${selected.title}`;
        elements.next.textContent = plan.length && planPosition < plan.length - 1 ? 'Nächste Planaufgabe →' : 'Nächste Übung →';
        elements.feedback.textContent = '';
        if (window.history && history.replaceState) history.replaceState(null, '', `#${selected.id}`);
    }
    function activate(item, { preservePlan = false, scroll = false } = {}) {
        if (!item) return;
        selected = item;
        if (!preservePlan) { plan = []; planPosition = 0; }
        stimulusNonce = 0;
        resetClock();
        renderActive();
        if (scroll) $('training').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    }
    function planForDay(count) {
        const result = [mainDaily], usedCategories = new Set([mainDaily.category]);
        for (let j = 1; j < daily.deck.length && result.length < count; j++) {
            const index = (daily.slot + 11 * j) % daily.deck.length;
            const candidate = daily.deck[index];
            if (usedCategories.has(candidate.category)) continue;
            if (result.some(item => item.id === candidate.id)) continue;
            result.push(candidate); usedCategories.add(candidate.category);
        }
        if (result.length < count) { for (const item of daily.deck) { if (!result.some(x => x.id === item.id)) result.push(item); if (result.length >= count) break; } }
        return result;
    }
    function launchPlan() {
        const count = Number($('gt-plan-size').value) || 3;
        plan = planForDay(Math.min(5, Math.max(1, count)));
        planPosition = 0;
        activate(plan[0], { preservePlan: true });
        showNotice('Tipp: Erst die Aufgabe lesen, dann den Timer starten. Eine erledigte Aufgabe bestätigst du selbst.');
    }
    function chooseAnother() {
        const recentSet = new Set(Object.values(progress.completedByDate).flat().filter(id => CODES.has(id)));
        const options = GT_EXERCISES.filter(item => item.id !== selected?.id && item.category !== selected?.category && !recentSet.has(item.id));
        const pool = options.length ? options : GT_EXERCISES.filter(item => item.id !== selected?.id && item.category !== selected?.category);
        activate(pool[Math.floor(Math.random() * pool.length)] || mainDaily, { scroll: true });
    }
    function nextExercise() {
        if (plan.length && planPosition < plan.length - 1) { planPosition++; activate(plan[planPosition], { preservePlan: true }); return; }
        if (plan.length) { showNotice('Der Tagesplan ist durchlaufen. Du kannst einen neuen Plan starten oder eine beliebige weitere Übung wählen.'); }
        chooseAnother();
    }
    function markComplete() {
        if (!selected || seenToday(selected.id)) return;
        stopClock(); renderClock();
        progress.countById[selected.id] = (Number(progress.countById[selected.id]) || 0) + 1;
        if (!Array.isArray(progress.completedByDate[today])) progress.completedByDate[today] = [];
        progress.completedByDate[today].push(selected.id);
        saveProgress(); updateStats(); renderActive(); renderTable();
        showNotice(storageEnabled ? 'Als erledigt eingetragen und lokal gespeichert. Gut, dass du die Aufgabe bewusst abgeschlossen hast.' : 'Als erledigt eingetragen. Dein Browser erlaubt derzeit keine dauerhafte Speicherung.');
    }
    function toggleFavorite() {
        if (!selected) return;
        progress.favorites = progress.favorites.includes(selected.id) ? progress.favorites.filter(id => id !== selected.id) : [...progress.favorites, selected.id];
        saveProgress(); renderActive(); renderTable();
    }
    function dayLabel() {
        const [y, m, d] = today.split('-').map(Number);
        const fmt = new Intl.DateTimeFormat('de-AT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
        $('gt-day-label').textContent = `${fmt.format(new Date(y, m - 1, d))} · Empfehlung: ${mainDaily.title} · Übungszyklus ${daily.cycle + 1}`;
    }
    function renderCategories() {
        const grid = $('gt-category-grid'), select = $('gt-category');
        for (const [key, info] of Object.entries(GT_CATEGORIES)) {
            const count = GT_EXERCISES.filter(e => e.category === key).length;
            const option = document.createElement('option'); option.value = key; option.textContent = `${info.label} (${count})`; select.append(option);
            const btn = document.createElement('button'); btn.type = 'button'; btn.className = 'gt-category';
            const title = document.createElement('strong'); title.textContent = info.label;
            const desc = document.createElement('span'); desc.textContent = info.description;
            const footer = document.createElement('small'); footer.textContent = `${count} eigenständige Übungen →`;
            btn.append(title, desc, footer);
            btn.addEventListener('click', () => { select.value = key; renderTable(); $('katalog').scrollIntoView({ behavior: 'smooth' }); });
            grid.append(btn);
        }
    }
    function shortDescription(text, max = 115) { const compact = cleanText(text); return compact.length > max ? compact.slice(0, max).replace(/\s+\S*$/, '') + ' …' : compact; }
    function matchesSetting(item, setting) {
        if (setting === 'all') return true;
        if (setting === 'unterwegs') return ['unterwegs', 'überall'].includes(item.context);
        if (setting === 'zuhause') return ['zuhause', 'überall'].includes(item.context);
        return item.context === setting;
    }
    function filterTasks() {
        const query = $('gt-search').value.trim().toLocaleLowerCase('de');
        const cat = $('gt-category').value, level = $('gt-level').value, setting = $('gt-setting').value, favorites = $('gt-favorites-only').checked;
        return GT_EXERCISES.filter(item => (cat === 'all' || item.category === cat)
            && (level === 'all' || item.difficulty === level)
            && matchesSetting(item, setting)
            && (!favorites || progress.favorites.includes(item.id))
            && (!query || [item.title, item.prompt, item.variation, categoryName(item.category)].some(part => part.toLocaleLowerCase('de').includes(query))));
    }
    function cell(row, value, className = '') {
        const td = document.createElement('td'); td.textContent = value; if (className) td.className = className; row.append(td); return td;
    }
    function renderTable() {
        const list = filterTasks(), body = $('gt-table-body'), frag = document.createDocumentFragment();
        for (const item of list) {
            const tr = document.createElement('tr');
            cell(tr, String(Number(item.id.slice(-3))).padStart(2, '0'));
            const descr = document.createElement('td');
            const title = document.createElement('span'); title.className = 'gt-table-title'; title.textContent = item.title;
            const excerpt = document.createElement('span'); excerpt.className = 'gt-table-excerpt'; excerpt.textContent = shortDescription(item.prompt);
            descr.append(title, excerpt); tr.append(descr);
            cell(tr, categoryName(item.category)); cell(tr, item.difficulty);
            cell(tr, seenToday(item.id) ? '✓ Heute' : (Number(progress.countById[item.id]) || 0) > 0 ? '✓ Geübt' : progress.favorites.includes(item.id) ? '☆ Favorit' : '–');
            const actionCell = document.createElement('td'); const action = document.createElement('button'); action.type = 'button'; action.textContent = 'Öffnen';
            action.setAttribute('aria-label', `${item.title} öffnen`);
            action.addEventListener('click', () => activate(item, { scroll: true }));
            actionCell.append(action); tr.append(actionCell);
            frag.append(tr);
        }
        body.replaceChildren(frag);
        $('gt-results').textContent = `${list.length} von ${GT_EXERCISES.length} Übungen angezeigt`;
        $('gt-empty').hidden = list.length !== 0;
    }
    function resetFilters() {
        $('gt-search').value = ''; $('gt-category').value = 'all'; $('gt-level').value = 'all'; $('gt-setting').value = 'all'; $('gt-favorites-only').checked = false;
        renderTable();
    }
    function resetProgress() {
        if (!confirm('Wirklich alle lokal gespeicherten Übungstage, Abschlusszahlen und Favoriten löschen? Das lässt sich nicht rückgängig machen.')) return;
        progress = { countById: {}, completedByDate: {}, favorites: [] }; saveProgress(); updateStats(); renderActive(); renderTable(); showNotice('Der lokale Trainingsfortschritt wurde zurückgesetzt.');
    }
    async function shareExercise() {
        if (!selected) return;
        const url = new URL(window.location.href); url.hash = selected.id;
        try { await navigator.clipboard.writeText(url.toString()); showNotice('Direkter Link zur Übung in die Zwischenablage kopiert.'); }
        catch (e) { showNotice(`Kopiere diesen Link aus der Adressleiste: ${url.toString()}`); }
    }

    $('gt-daily').addEventListener('click', () => activate(mainDaily));
    $('gt-start-plan').addEventListener('click', launchPlan);
    $('gt-surprise').addEventListener('click', chooseAnother);
    elements.timerStart.addEventListener('click', toggleClock);
    elements.timerReset.addEventListener('click', resetClock);
    elements.complete.addEventListener('click', markComplete);
    elements.next.addEventListener('click', nextExercise);
    elements.favorite.addEventListener('click', toggleFavorite);
    $('gt-share').addEventListener('click', shareExercise);
    $('gt-reset-progress').addEventListener('click', resetProgress);
    $('gt-remix').addEventListener('click', () => { stimulusNonce++; renderStimulus(); showNotice('Neues Trainingsmaterial erzeugt.'); });
    elements.stimulusToggle.addEventListener('click', () => {
        if (!stimulus) return;
        stimulusShown = !stimulusShown;
        elements.stimulusText.textContent = stimulusShown ? stimulus.text : 'Material ausgeblendet. Rufe die Inhalte aus dem Gedächtnis ab.';
        elements.stimulusText.classList.toggle('gt-hidden', !stimulusShown);
        elements.stimulusToggle.textContent = stimulusShown ? 'Material ausblenden' : 'Material anzeigen';
    });
    for (const id of ['gt-search', 'gt-category', 'gt-level', 'gt-setting', 'gt-favorites-only']) {
        $(id).addEventListener(id === 'gt-search' ? 'input' : 'change', renderTable);
    }
    $('gt-reset-filter').addEventListener('click', resetFilters);
    window.addEventListener('pageshow', () => { if (countdown.running) clockStep(); });
    document.addEventListener('visibilitychange', () => { if (!document.hidden && countdown.running) clockStep(); });
    window.addEventListener('hashchange', () => { const id = location.hash.slice(1); if (byId.has(id) && id !== selected?.id) activate(byId.get(id)); });
    dayLabel(); renderCategories(); updateStats(); renderTable();
    const requested = byId.get(decodeURIComponent(location.hash.slice(1)));
    activate(requested || mainDaily);
})();
