var map=null;
var marker=null;
function GoogleMap(){
	app.closePanel();
	this.initialize = function(){
		map = showMap();
	}

	var showMap = function(){
		var mapOptions = {
			zoom: 8,
			streetViewControl: false,
			mapTypeControl:false,
			center: new google.maps.LatLng(28.222665,-104.0468086),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		map.addListener('click', function(e) {
			$$("#btnLatLng").text(e.latLng.substring(0,25));
			lat=e.latLng.lat();
		    lng=e.latLng.lng();
			placeMarkerAndPanTo(e.latLng, map);
		});
		obtenerUbicacionActual();
		return map;
	}
	$$("#btnAceptarUbicacion").click(function(e){
		e.preventDefault();
		$$("#txtMDOUbicacion").val(lat+" "+lng);
		mainView.router.back();	
	});
	
}

function obtenerUbicacionActual(){
	var onSuccess = function(position) {
		lat=position.coords.latitude;
		lng=position.coords.longitude;
		$$("#btnLatLng").text(lat+" "+lng);
		var latitudeAndLongitudeOne = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
		marker = new google.maps.Marker({
			position: latitudeAndLongitudeOne,
			icon:'./img/marker.png',
			map: map
		});
		map.setCenter(new google.maps.LatLng(lat, lng));
		map.setZoom(12);
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

/*function getAddress(lat,lng){
	$$.ajax({url: "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&location_type=ROOFTOP&result_type=street_address&key=AIzaSyCXmTKa8vi3rJManvt6EpTJ40ul8BaGrHw&amp", dataType: "json", type: 'POST', 
		beforeSend: function () {

		},
		success: function (data) {
			if(data.length>0){					
				app.alert(data);
			}else{
				app.alert("Error en get address","Error!");
			}
			app.hidePreloader();
		},
		error: function (e) {
			app.hidePreloader();
			app.alert("Error en getAddress.","Error!");
		}
	});
}
*/