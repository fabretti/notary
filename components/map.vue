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
</script>
