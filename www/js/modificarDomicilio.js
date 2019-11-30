map=null;
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
		return map;
	}
	obtenerUbicacionActual();
}
function obtenerUbicacionActual(){
	var onSuccess = function(position) {
		app.alert('Latitude: '          + position.coords.latitude          + '\n' +
			'Longitude: '         + position.coords.longitude         + '\n');
		var latitudeAndLongitudeOne = new google.maps.LatLng(position.coords.latitude ,position.coords.longitude);
		var markerOne = new google.maps.Marker({
			position: latitudeAndLongitudeOne,
			map: map
		});
	};

    // onError Callback receives a PositionError object
    //
    function onError(error) {
    	app.alert('code: '    + error.code    + '\n' +
    		'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}