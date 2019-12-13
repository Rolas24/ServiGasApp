var mapUbicar=null;
var markerUbicar=null;
var infowindow=null;
var interval=null;
function GoogleMapUbicar(){
	app.closePanel();
	this.initialize = function(){
		mapUbicar = showMapUbicar();
	}

	var showMapUbicar = function(){
		var mapOptions2 = {
			zoom: 8,
			streetViewControl: false,
			mapTypeControl:false,
			center: new google.maps.LatLng(28.222665,-104.0468086),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		var mapa = new google.maps.Map(document.getElementById("map_canvas_ubicar"), mapOptions2);
		obtenerUbicacionTiempoReal();
		return mapa;
	}
	$$("#btnCerrarUbicacion").click(function(e){
		e.preventDefault();
		clearInterval(interval);
		mainView.router.back();	
	});
	
}

function obtenerUbicacionTiempoReal(){
	var data = {accion: "12",idPedido:pedidoUbicar};
	$$.ajax({url: sURL, dataType: "json", type: 'POST', data,
		beforeSend: function () {
			app.showPreloader('Buscando ubicación de su pedido...');
		},
		success: function (data) {
			if(data.length>0){
				$$("#btnUltimaUbicacion").text(data[0].fechaHora);
				var latLngTemp=new google.maps.LatLng(data[0].latitud,data[0].longitud);
				crearMarker(latLngTemp,mapUbicar,data[0].pendientes,data[0].fechaHora);
				interval=setInterval(function(){ actualizarUbicacion(); }, 8000);
			}else{
				app.alert("No se encontro la ubicación de su pedido","Sin registro");
			}
			app.hidePreloader();
		},
		error: function (e) {
			alert(e.toString());
			app.hidePreloader();
			app.alert("Ocurrió un error al buscar la ubicación de su pedido.","Error!");
		}
	});
}

function actualizarUbicacion(){
	var data = {accion: "12",idPedido:pedidoUbicar};
	$$.ajax({url: sURL, dataType: "json", type: 'POST', data,
		success: function (data) {
			if(data.length>0){
				$$("#btnUltimaUbicacion").text(data[0].fechaHora);
				var latLngTemp=new google.maps.LatLng(data[0].latitud,data[0].longitud);
				moverMarker(latLngTemp,data[0].pendientes,data[0].fechaHora);
			}
			app.hidePreloader();
		},
		error: function (e) {
			alert(e.toString());
			app.hidePreloader();
			app.alert("Ocurrió un error al actualizar la ubicación de su pedido.","Error!");
		}
	});
}
function crearMarker(latLng, mapUbicar,pendientes,fechaHora) {
	markerUbicar = new google.maps.Marker({
		position: latLng,
		icon:'./img/marker.png',
		map: mapUbicar
	});
	infowindow = new google.maps.InfoWindow({
      content: '<h2>Pedidos Pendientes: '+pendientes+"</h2>"+
               '<h3>FechaHora Ubicación: '+fechaHora+'</h3>'; 
    });
    infowindow.open(mapUbicar, markerUbicar);
	mapUbicar.panTo(latLng);
}
function moverMarker(latlng,pendientes,fechaHora){
	infowindow.setContent('<h2>Pedidos Pendientes: 'pendientes+"</h2>"+
                          '<h3>FechaHora Ubicación: '+fechaHora'</h3>');
 markerUbicar.setPosition(latlng);
}