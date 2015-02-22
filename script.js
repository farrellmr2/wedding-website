function initialize() {
	var myLatlng = new google.maps.LatLng (32.669391, -79.910501);
  	var mapOptions = {	
  		zoom: 13,
  		center: myLatlng
	}
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var marker = new google.maps.Marker({
		position: myLatlng,
    	map: map,
    	title: 'Beach House'
	});
}
google.maps.event.addDomListener(window, 'load', initialize);


function initialize() {
	var myLatlng = new google.maps.LatLng (32.778142, -79.963752);
  	var mapOptions = {	
  		zoom: 13,
  		center: myLatlng
	}
	var map = new google.maps.Map(document.getElementById('map-canvas-2'), mapOptions);

	var marker = new google.maps.Marker({
		position: myLatlng,
    	map: map,
    	title: 'Springhill Suites'
	});
}
google.maps.event.addDomListener(window, 'load', initialize);


function initialize() {
	var myLatlng = new google.maps.LatLng (32.777826, -79.965783);
  	var mapOptions = {	
  		zoom: 13,
  		center: myLatlng
	}
	var map = new google.maps.Map(document.getElementById('map-canvas-3'), mapOptions);

	var marker = new google.maps.Marker({
		position: myLatlng,
    	map: map,
    	title: 'Residence Inn'
	});
}
google.maps.event.addDomListener(window, 'load', initialize);


/*
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