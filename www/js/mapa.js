var map=null;
var marker=null;
function GoogleMap(){
	app.closePanel();
	this.initialize = function(){
		map = showMap();
	}

	var showMap = function(){
		var mapOptions = {
			zoom: 7,
			center: new google.maps.LatLng(28.222665,-104.0468086),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		map.addListener('click', function(e) {
			$$("#btnLatLng").text(e.latLng);
			placeMarkerAndPanTo(e.latLng, map);
		});
		obtenerUbicacionActual();
		return map;
	}
	$$("#btnAceptarUbicacion").click(function(e){
		e.preventDefault();
		$$("#txtMDOUbicacion").text(lat+" "+lng);
		mainView.router.back();	
	});
	
}

function obtenerUbicacionActual(){
	var onSuccess = function(position) {
		lat=position.coords.latitude ;
		lng=position.coords.longitude;
		$$("#btnLatLng").text(lat+" "+lng);
		var latitudeAndLongitudeOne = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
		marker = new google.maps.Marker({
			position: latitudeAndLongitudeOne,
			icon:'./img/marker.png',
			map: map
		});
		map.setCenter(new google.maps.LatLng(lat, lng));
		if(lat ===0 || lat===null){
			app.alert("Es necesario encender su GPS para obtener su ubicación actual","Permitir ubicación");
		}
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
		icon:'./img/marker.png',
		map: map
	});
	map.panTo(latLng);
}