"use strict";

/*
 * ==========================================================
 * REUSABLE SAILING ROUTE MAP
 * ==========================================================
 *
 * Allgemeine Leaflet-Logik für rekonstruierte Segelrouten.
 *
 * Die einzelnen Törns werden nicht hier eingetragen,
 * sondern jeweils in einer eigenen Konfigurationsdatei:
 *
 * assets/js/routes/pula-cres-susak-2021.js
 * assets/js/routes/kastela-2026.js
 * usw.
 */

(function () {
  /*
   * Standardfarben für Tagesetappen.
   *
   * Wenn eine Route mehr Etappen als Farben enthält,
   * beginnt die Farbliste wieder von vorne.
   */
  const defaultRouteColors = [
    "#d33",
    "#e67e22",
    "#8e44ad",
    "#168aad",
    "#2a9d58",
    "#b5651d",
    "#34495e"
  ];


  /*
   * Ermittelt die Position eines Markers.
   *
   * Ein Marker kann entweder:
   *
   * 1. direkte Koordinaten besitzen:
   *    coordinates: [44.84, 13.84]
   *
   * oder
   *
   * 2. auf Anfang oder Ende einer Etappe verweisen:
   *    legIndex: 0,
   *    position: "start"
   */
  function getMarkerPosition(marker, legs) {
    if (
      Array.isArray(marker.coordinates) &&
      marker.coordinates.length === 2
    ) {
      return marker.coordinates;
    }

    const leg = legs[marker.legIndex];

    if (
      !leg ||
      !Array.isArray(leg.points) ||
      leg.points.length === 0
    ) {
      return null;
    }

    /*
     * Optional kann auch ein konkreter Punkt
     * innerhalb einer Etappe ausgewählt werden.
     */
    if (
      Number.isInteger(marker.pointIndex) &&
      leg.points[marker.pointIndex]
    ) {
      return leg.points[marker.pointIndex];
    }

    if (marker.position === "start") {
      return leg.points[0];
    }

    /*
     * Standardmäßig wird das Ende der Etappe verwendet.
     */
    return leg.points[leg.points.length - 1];
  }


  /*
   * Erstellt eine Leaflet-Karte.
   */
  function createSailingRouteMap(config) {
    /*
     * Leaflet muss vorher geladen worden sein.
     */
    if (typeof window.L === "undefined") {
      console.error(
        "Leaflet wurde nicht geladen. " +
        "Prüfe die Reihenfolge der Script-Dateien."
      );

      return null;
    }

    /*
     * ID des Kartencontainers prüfen.
     */
    if (!config || !config.containerId) {
      console.error(
        "Für die Segelkarte wurde keine containerId angegeben."
      );

      return null;
    }

    const mapContainer =
      document.getElementById(config.containerId);

    /*
     * Falls die Seite keinen Kartencontainer enthält,
     * wird keine Karte erzeugt.
     *
     * Das erlaubt, dieselbe JS-Struktur auf mehreren
     * Seiten einzusetzen.
     */
    if (!mapContainer) {
      console.warn(
        `Kartencontainer #${config.containerId} wurde nicht gefunden.`
      );

      return null;
    }

    /*
     * Verhindert, dass Leaflet dieselbe Karte
     * versehentlich zweimal initialisiert.
     */
    if (mapContainer._leaflet_id) {
      console.warn(
        `Kartencontainer #${config.containerId} ` +
        "wurde bereits initialisiert."
      );

      return null;
    }

    const legs = Array.isArray(config.legs)
      ? config.legs
      : [];

    if (legs.length === 0) {
      console.error(
        `Für #${config.containerId} wurden keine Etappen angegeben.`
      );

      return null;
    }


    /*
     * ======================================================
     * KARTE
     * ======================================================
     */

    const map = L.map(
      config.containerId,
      {
        scrollWheelZoom: false,
        zoomControl: true,
        ...config.mapOptions
      }
    );


    /*
     * OpenStreetMap-Grundkarte.
     */
    const baseMap = L.tileLayer(
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,

        referrerPolicy:
          "strict-origin-when-cross-origin",

        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">' +
          "OpenStreetMap-Mitwirkende</a>"
      }
    ).addTo(map);


    /*
     * OpenSeaMap als transparente nautische Ebene.
     */
    const seaMarks = L.tileLayer(
      "https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png",
      {
        maxZoom: 18,

        referrerPolicy:
          "strict-origin-when-cross-origin",

        attribution:
          '&copy; <a href="https://www.openseamap.org">' +
          "OpenSeaMap-Mitwirkende</a>"
      }
    );

    /*
     * Standardmäßig werden die nautischen Zeichen angezeigt.
     */
    if (config.showSeaMarks !== false) {
      seaMarks.addTo(map);
    }


    /*
     * ======================================================
     * ROUTENETAPPEN
     * ======================================================
     */

    const routeLines = [];

    /*
     * Ebenen, die später über die Leaflet-Ebenenauswahl
     * ein- und ausgeschaltet werden können.
     */
    const overlayLayers = {
      "Nautische Zeichen": seaMarks
    };


    legs.forEach(function (leg, index) {
      if (
        !Array.isArray(leg.points) ||
        leg.points.length < 2
      ) {
        console.warn(
          `Etappe ${index + 1} besitzt zu wenige Punkte.`
        );

        return;
      }

      /*
       * Allgemeines Routendesign.
       *
       * Die Werte können je Törn oder je Etappe
       * überschrieben werden.
       */
      const routeStyle = {
        color:
          leg.color ||
          defaultRouteColors[
            index % defaultRouteColors.length
          ],

        weight: 4,
        opacity: 0.9,

        /*
         * Gestrichelte Darstellung als Hinweis darauf,
         * dass es sich um eine rekonstruierte Route handelt.
         */
        dashArray:
          config.dashed === false
            ? null
            : "10 8",

        lineJoin: "round",
        lineCap: "round",

        /*
         * Allgemeine Einstellungen des Törns.
         */
        ...(config.routeStyle || {}),

        /*
         * Individuelle Einstellungen dieser Etappe.
         */
        ...(leg.style || {})
      };


      const routeLine = L.polyline(
        leg.points,
        routeStyle
      ).addTo(map);


      /*
       * Popup beim Anklicken der Route.
       */
      if (leg.popup) {
        routeLine.bindPopup(leg.popup);
      }


      routeLines.push(routeLine);


      /*
       * Name in der Ebenenauswahl.
       */
      const layerName =
        leg.label ||
        `Etappe ${index + 1}`;

      overlayLayers[layerName] = routeLine;
    });


    /*
     * ======================================================
     * MARKER
     * ======================================================
     */

    const markers = Array.isArray(config.markers)
      ? config.markers
      : [];


    markers.forEach(function (marker) {
      const markerPosition =
        getMarkerPosition(marker, legs);

      if (!markerPosition) {
        console.warn(
          "Eine Markerposition konnte nicht ermittelt werden:",
          marker
        );

        return;
      }

      const leafletMarker =
        L.marker(markerPosition).addTo(map);


      if (marker.popup) {
        leafletMarker.bindPopup(marker.popup);
      }

      if (marker.tooltip) {
        leafletMarker.bindTooltip(marker.tooltip);
      }
    });


    /*
     * ======================================================
     * KARTENAUSSCHNITT
     * ======================================================
     */

    if (routeLines.length > 0) {
      /*
       * Eine temporäre FeatureGroup ermittelt die Grenzen
       * aller Routenlinien gemeinsam.
       */
      const completeRoute =
        L.featureGroup(routeLines);

      map.fitBounds(
        completeRoute.getBounds(),
        {
          padding:
            config.fitPadding || [30, 30],

          maxZoom:
            config.maxFitZoom || 13
        }
      );
    } else {
      /*
       * Fallback, falls aus irgendeinem Grund
       * keine gültigen Linien vorhanden sind.
       */
      map.setView(
        config.fallbackCenter || [44.8, 14.0],
        config.fallbackZoom || 8
      );
    }


    /*
     * ======================================================
     * EBENENAUSWAHL
     * ======================================================
     */

    if (config.showLayerControl !== false) {
      L.control.layers(
        null,
        overlayLayers,
        {
          collapsed:
            config.layerControlCollapsed !== false
        }
      ).addTo(map);
    }


    /*
     * Behebt gelegentliche Darstellungsprobleme,
     * wenn die Karte erst nach dem Seitenaufbau
     * ihre endgültige Größe erhält.
     */
    window.setTimeout(function () {
      map.invalidateSize();
    }, 0);


    /*
     * Gibt das Leaflet-Kartenobjekt zurück.
     *
     * Damit könnte die Karte später bei Bedarf
     * noch erweitert oder verändert werden.
     */
    return map;
  }


  /*
   * Die Funktion global verfügbar machen.
   *
   * Routendateien können dadurch einfach aufrufen:
   *
   * SailingRouteMap.create({...});
   */
  window.SailingRouteMap = {
    create: createSailingRouteMap
  };
})();