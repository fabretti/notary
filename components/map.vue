<template>
  <div class="yandex-map">
    <div id="map"></div>
  </div>
</template>
<style>
#map {
  max-width: 950px;
  height: 375px;
  z-index: 1;
}
.ymaps-2-1-74-copyrights-pane {
  display: none;
}
</style>
<script>
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [45.017474, 38.935343],
      zoom: 18,
      controls: []
    },
    {
      searchControlProvider: "yandex#search"
    }
  );

  if (window.matchMedia("(max-width: 1500px)").matches) {
    myMap.setCenter([45.017474, 38.935343]);
  }
  if (window.matchMedia("(max-width: 992px)").matches) {
    myMap.setCenter([45.017474, 38.935343]);
  }
  if (window.matchMedia("(max-width: 767px)").matches) {
    myMap.setCenter([45.017474, 38.935343]);
  }

  myGeoObject = new ymaps.GeoObject(
    {
      geometry: {
        type: "Point",
        coordinates: [45.017474, 38.935343]
      }
    },
    {
      preset: "islands#blackStretchyIcon",
      draggable: false,
      iconImage: "static/arrowMap.png",
      iconImageSize: [74, 99],
      iconImageOffset: [-7, -110]
    }
  );

  myMap.behaviors.disable("scrollZoom");

  myMap.geoObjects.add(myGeoObject);
}
</script>