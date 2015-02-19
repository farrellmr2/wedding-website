function initialize() {
var mapCanvas = document.getElementById('map-canvas');
var mapOptions = {
  center: new google.maps.LatLng(32.6625, -79.9322),
  zoom: 13,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initialize);


function initialize_2() {
var mapCanvas = document.getElementById('map-canvas-2');
var mapOptions = {
  center: new google.maps.LatLng(32.778142, -79.963752),
  zoom: 13,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initialize_2);


function initialize_3() {
var mapCanvas = document.getElementById('map-canvas-3');
var mapOptions = {
  center: new google.maps.LatLng(32.777826, -79.965783),
  zoom: 13,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initialize_3);