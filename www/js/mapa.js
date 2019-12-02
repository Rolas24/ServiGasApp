var map=null;
var marker=null;
function GoogleMap(){
	app.closePanel();
	this.initialize = function(){
		map = showMap();
	}

	var showMap = function(){
		var mapOptions = {
			zoom: 5,
			center: new google.maps.LatLng(28.222665,-104.0468086),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		map.addListener('click', function(e) {
			placeMarkerAndPanTo(e.latLng, map);
		});
		obtenerUbicacionActual();
		return map;
	}
	
}

function obtenerUbicacionActual(){
	var onSuccess = function(position) {
		lat=position.coords.latitude ;
		long=position.coords.longitude;
		var latitudeAndLongitudeOne = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
		marker = new google.maps.Marker({
			position: latitudeAndLongitudeOne,
			icon:'./img/marker.png',
			animation: google.maps.Animation.DROP,
			map: map
		});
	};

    function onError(error) {
    	app.alert("Es necesario encender su GPS para obtener su ubicación actual","Permitir ubicación");
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
function placeMarkerAndPanTo(latLng, map) {
	marker.setMap(null);
    marker = new google.maps.Marker({
    position: latLng,
    animation: google.maps.Animation.DROP,
    map: map
  });
  map.panTo(latLng);
}