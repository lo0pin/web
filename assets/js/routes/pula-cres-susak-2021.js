"use strict";

/*
 * ==========================================================
 * PULA – CRES – MARTINŠĆICA – UNIJE – SUSAK – PULA
 * 21.–27. August 2021
 * ==========================================================
 */

SailingRouteMap.create({
  /*
   * Muss mit der ID des Karten-Divs im HTML übereinstimmen.
   */
  containerId: "sailing-route-map",

  /*
   * Die Route wurde nachträglich rekonstruiert.
   * Daher werden die Linien gestrichelt dargestellt.
   */
  dashed: true,

  /*
   * Etwas Innenabstand zwischen Route und Kartenrand.
   */
  fitPadding: [35, 35],

  /*
   * Verhindert, dass bei sehr kleinen Etappen
   * zu weit hineingezoomt wird.
   */
  maxFitZoom: 13,


  /*
   * ========================================================
   * TAGESETAPPEN
   * ========================================================
   */

  legs: [
    {
      label: "Day 1: Pula – Cres",

      popup:
        "<strong>Day 1</strong><br>" +
        "Pula → Cres",

      points: [
        [44.843197, 13.842462],
        [44.837837, 13.840917],
        [44.833816, 13.842634],
        [44.827725, 13.836109],
        [44.811731, 13.844894],
        [44.758868, 13.897056],
        [44.756373, 13.924231],
        [44.764912, 13.959949],
        [44.821625, 14.094355],
        [44.939462, 14.295611],
        [44.943237, 14.304346],
        [44.942173, 14.307866],
        [44.945243, 14.307394],
        [44.944270, 14.311901],
        [44.949803, 14.310098],
        [44.952665, 14.311620],
        [44.958538, 14.365157],
        [44.957039, 14.393771],
        [44.952723, 14.408367],
        [44.946948, 14.413691]
      ]
    },

    {
      label: "Day 2: Cres – Martinšćica",

      popup:
        "<strong>Day 2</strong><br>" +
        "Cres → Martinšćica",

      points: [
        [44.946826, 14.414206],
        [44.953756, 14.406135],
        [44.956431, 14.392140],
        [44.955129, 14.335603],
        [44.951968, 14.298855],
        [44.935917, 14.288208],
        [44.897230, 14.274814],
        [44.876051, 14.285460],
        [44.833425, 14.293359],
        [44.805590, 14.312056],
        [44.802177, 14.348460],
        [44.809978, 14.355329],
        [44.817796, 14.351081]
      ]
    },

    {
      label: "Day 3: Martinšćica – Unije",

      popup:
        "<strong>Day 3</strong><br>" +
        "Martinšćica → Unije",

      points: [
        [44.817922, 14.350579],
        [44.768028, 14.357195],
        [44.730448, 14.375741],
        [44.713847, 14.353760],
        [44.715707, 14.333932],
        [44.691959, 14.271625],
        [44.675051, 14.248768],
        [44.654645, 14.230909],
        [44.640712, 14.234000],
        [44.636296, 14.244294],
        [44.638985, 14.242834]
      ]
    },

    {
      label: "Day 4: Unije – Susak",

      popup:
        "<strong>Day 4</strong><br>" +
        "Unije → Susak",

      points: [
        [44.635723, 14.243788],
        [44.635967, 14.227646],
        [44.627654, 14.214939],
        [44.609076, 14.222835],
        [44.587057, 14.242068],
        [44.556461, 14.269543],
        [44.527947, 14.302328],
        [44.515812, 14.313817],
        [44.512595, 14.312901],
        [44.512174, 14.311162],
        [44.512557, 14.310561]
      ]
    },

    {
      label: "Day 5: Susak – Pula",

      popup:
        "<strong>Day 5</strong><br>" +
        "Susak → Pula",

      points: [
        [44.512083, 14.311174],
        [44.515232, 14.315365],
        [44.525520, 14.303865],
        [44.568986, 14.253042],
        [44.609850, 14.216637],
        [44.748935, 13.914081],
        [44.767626, 13.888400],
        [44.812737, 13.843753],
        [44.826469, 13.834779],
        [44.832622, 13.839415],
        [44.835973, 13.843966],
        [44.838470, 13.841733],
        [44.844074, 13.842764]
      ]
    }
  ],


  /*
   * ========================================================
   * MARKER
   * ========================================================
   *
   * legIndex beginnt bei 0:
   *
   * 0 = Day 1
   * 1 = Day 2
   * 2 = Day 3
   * 3 = Day 4
   * 4 = Day 5
   */

  markers: [
    {
      legIndex: 0,
      position: "start",

      popup:
        "<strong>Start</strong><br>" +
        "Marina Pula"
    },

    {
      legIndex: 0,
      position: "end",

      popup:
        "<strong>Cres</strong><br>" +
        "ACI Marina Cres"
    },

    {
      legIndex: 1,
      position: "end",

      popup:
        "<strong>Martinšćica</strong><br>" +
        "Overnight stay"
    },

    {
      legIndex: 2,
      position: "end",

      popup:
        "<strong>Unije</strong><br>" +
        "Night anchorage"
    },

    {
      legIndex: 3,
      position: "end",

      popup:
        "<strong>Susak</strong><br>" +
        "Intermediate stop"
    },

    {
      legIndex: 4,
      position: "end",

      popup:
        "<strong>Finish</strong><br>" +
        "Marina Pula"
    }
  ]
});