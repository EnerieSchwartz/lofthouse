/*Nav icon*/
const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__top-row");

navBtn.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");
};

/*phone input*/
mask("[data-tel-input]");

/*removes '+' if no text was entered, so placeholder was seen */

const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = "";
  });
  input.addEventListener("blur", () => {
    if (input.value == "+") input.value = "";
  });
});

// ---------------------------------------

/*Map */
// const key = "W0DpvJKsvK4fJhv44UtA";

// const attribution = new ol.control.Attribution({
//   collapsible: false,
// });

// const map = new ol.Map({
//   layers: [
//     new ol.layer.Tile({
//       source: new ol.source.TileJSON({
//         url: "https://api.maptiler.com/maps/streets-v2/style.json?key=W0DpvJKsvK4fJhv44UtA",
//         tileSize: 512,
//       }),
//     }),
//   ],
//   target: "map",
//   view: new ol.View({
//     center: ol.proj.fromLonLat([48.519088, 35.077943]),
//     zoom: 12,
//   }),
// });

/*Marker */
// const marker = new ol.layer.Vector({
//   source: new ol.source.Vector({
//     features: [
//       new ol.Feature({
//         geometry: new ol.geom.Point(ol.proj.fromLonLat([48.519088, 35.077943])),
//       }),
//     ],
//   }),
//   style: new ol.style.Icon({
//     src: "https://docs.maptiler.com/openlayers/default-marker/marker-icon.png",
//     anchor: [0.5, 1],
//   }),
// });

// map.addLayer(marker);

// const layer = new ol.layer.Vector({
//   source: new ol.source.Vector({
//     features: [
//       new ol.Feature({
//         geometry: new ol.geom.Point(
//           ol.proj.fromLonLat([16.62662018, 49.2125578])
//         ),
//       }),
//     ],
//   }),
//   style: new ol.style.Style({
//     image: new ol.style.Icon({
//       anchor: [0.5, 1],
//       crossOrigin: "anonymous",
//       src: "https://docs.maptiler.com/openlayers/default-marker/marker-icon.png",
//     }),
//   }),
// });
// map.addLayer(layer);
// const source = new ol.source.TileJSON({
//   url: `https://api.maptiler.com/maps/streets-v2/tiles.json?key=${key}`, // source URL
//   tileSize: 512,
//   crossOrigin: "anonymous",
// });

// const map = new ol.Map({
//   layers: [
//     new ol.layer.Tile({
//       source: source,
//     }),
//   ],
//   controls: ol.control.defaults
//     .defaults({ attribution: false })
//     .extend([attribution]),
//   target: "map",
//   view: new ol.View({
//     constrainResolution: true,
//     center: ol.proj.fromLonLat([35.077943, 48.519088]), // starting position [lng, lat]
//     zoom: 15, // starting zoom
//   }),
// });
// const layer = new ol.layer.Vector({
//   source: new ol.source.Vector({
//     features: [
//       new ol.Feature({
//         geometry: new ol.geom.Point(ol.proj.fromLonLat([35.077943, 48.519088])),
//       }),
//     ],
//   }),
//   style: new ol.style.Style({
//     image: new ol.style.Icon({
//       anchor: [0.5, 1],
//       crossOrigin: "anonymous",
//       // src: "https://docs.maptiler.com/openlayers/default-marker/marker-icon.png",
//       src: "location-pin.png",
//       // size: [200, 200],
//     }),
//   }),
// });
// map.addLayer(layer);

maptilersdk.config.apiKey = "W0DpvJKsvK4fJhv44UtA";
var geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        message: "Foo",
        iconSize: [60, 60],
      },
      geometry: {
        type: "Point",
        coordinates: [35.077943, 48.519088],
      },
    },
  ],
};
var map = new maptilersdk.Map({
  container: "map",
  style: maptilersdk.MapStyle.STREETS,
  center: [35.077943, 48.519088],
  zoom: 13,
});
// add markers to map
geojson.features.forEach(function (marker) {
  // create a DOM element for the marker
  var el = document.createElement("div");
  el.className = "marker";
  el.style.backgroundImage =
    "url(https://placekitten.com/g/" +
    marker.properties.iconSize.join("/") +
    "/)";
  el.style.width = marker.properties.iconSize[0] + "px";
  el.style.height = marker.properties.iconSize[1] + "px";

  el.addEventListener("click", function () {
    window.alert(marker.properties.message);
  });

  // add marker to map
  new maptilersdk.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
});
