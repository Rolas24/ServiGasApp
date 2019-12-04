var calles=[];
var colonias=[];
var selCalle=0;
var selColonia=0;
var lat=0;
var lng=0;
function initModificarDomicilio(){
	app.closePanel();
	$$("#btnMDBuscarCalle").click(function(e){
		e.preventDefault();
		$$.get('buscarCalle.html',function(data){
			app.popup(data);
			initBuscarCalle();
		});
		//mainView.router.loadPage('buscarCalle.html');
	});
	$$("#btnMDBuscarColonia").click(function(e){
		e.preventDefault();
		$$.get('buscarColonia.html',function(data){
			app.popup(data);
			initBuscarColonia();
		});
	});
	$$("#btnBuscarUbicacion").click(function(e){
		e.preventDefault();
		$$.get('mapa.html',function(data){
			app.popup(data);
			var map = new GoogleMap();
			map.initialize();
		});
		//mainView.router.loadPage('mapa.html');
	});
	$$("#btnMDGuardarDomicilio").click(function(e){
		e.preventDefault();
		guardarDomicilio();
	});

	$$("#txtMDONumExt").val(sNumExt);
	$$("#txtMDONumInt").val(sNumInt);
	$$("#txtMDOCalle").val(sCalle);
	$$("#txtMDOColonia").val(sColonia);
	$$("#txtMDOEntreCalles").val(sEntreCalles);
	selCalle=sIdCalle;
	selColonia=sIdColonia;
	getCalles();
	getColonias();
}

function guardarDomicilio(){
	if(validarDomicilio()){
		var data = {accion: "3",idCliente:sIdCliente,idCalle:selCalle,numeroExterior:$$("#txtMDONumExt").val(),
		numeroInterior:$$("#txtMDONumInt").val(),idColonia:selColonia,entre_calles:$$("#txtMDOEntreCalles").val(),
		idTipoDomicilio:$$("#sltMDOTipoDomicilio").val(),idCiudad:1,latitud:lat,longitud:lng};
		
		$$.ajax({url: sURL, dataType: "json", type: 'POST', data,
			beforeSend: function () {
				app.showPreloader('Guardando Domicilio...');
			},
			success: function (data) {
				if(data.length>0){					
					app.alert("Su domicilio fue actualizado correctamente","Exito!");
					updateSesionDomicilio(selCalle,$$("#txtMDOCalle").val(),selColonia,$$("#txtMDOColonia").val(),
						$$("#txtMDONumExt").val(),$$("#txtMDONumInt").val(),$$("#txtMDOEntreCalles").val());
					mainView.router.back();	
				}else{
					app.alert("Ocurrió un error al guardar. Intente nuevamente.","Error!");
				}
				app.hidePreloader();
			},
			error: function (e) {
				app.hidePreloader();
				app.alert("Ocurrió un error al guardar. Intente nuevamente.","Error!");
			}
		});
	}
}

function getCalles(){
	var data = {accion: "6"};
	$$.ajax({url: sURL, dataType: "json", type: 'POST', data,
		beforeSend: function () {
			app.showPreloader('Obteniendo calles...');
		},
		success: function (data) {
			if(data.length>0){
				calles=data;
			}else{
				app.alert("Ocurrió un error","Error!");
			}
			app.hidePreloader();
		},
		error: function (e) {
			app.hidePreloader();
			app.alert("Ocurrió un error.","Error!");
		}
	});
}

function getColonias(){
	var data = {accion: "7"};
	$$.ajax({url: sURL, dataType: "json", type: 'POST', data,
		beforeSend: function () {
			app.showPreloader('Obteniendo colonias...');
		},
		success: function (data) {
			if(data.length>0){
				colonias=data;
			}else{
				app.alert("Ocurrió un error","Error!");
			}
			app.hidePreloader();
		},
		error: function (e) {
			app.hidePreloader();
			app.alert("Ocurrió un error.","Error!");
		}
	});
}

function validarDomicilio(){
	var bnd=true;
	bnd=bnd && validDifCero(selCalle,"Calle");
	bnd=bnd && validDifCero(selColonia,"Colonia");
    //bnd=bnd && validDifCero(lat,"Ubicación");
    return bnd;
}

