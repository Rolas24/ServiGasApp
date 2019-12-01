var calles=[];
var colonias=[];
var selCalle=0;
var selColonia=0;
function initModificarDomicilio(){
	app.closePanel();
	$$("#btnBuscarCalle").click(function(e){
		e.preventDefault();
		mainView.router.loadPage('buscarCalle.html');
	});
	$$("#btnBuscarColonia").click(function(e){
		e.preventDefault();
		mainView.router.loadPage('buscarColonia.html');
	});
	$$("#btnBuscarUbicacion").click(function(e){
		e.preventDefault();
		mainView.router.loadPage('mapa.html');
	});
	getCalles();
	getColonias();
}

function guardarDomicilio(){
	if(validarDomicilio()){
		var data = {accion: "1",razonSocial:$$("#txtRegNombre").val(),telefonoCelular:$$("#txtRegTelefono").val(),
		correo:$$("#txtRegCorreo").val(),usuario:$$("#txtRegUsuario").val(),contrasena:$$("#txtRegContrasenia").val()};
		
		$$.ajax({url: sURL, dataType: "json", type: 'POST', data,
			beforeSend: function () {
				app.showPreloader('Guardando...')
			},
			success: function (data) {
				if(data.length>0){					
					app.alert("Registrado correctamente ahora puede iniciar sesión","Exito!");
					regresarLogin();
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
	bnd=bnd && validInputVacio($$("#txtRegNombre"),"Nombre");
	bnd=bnd && validInputVacio($$("#txtRegCorreo"),"Correo");
	bnd=bnd && validInputVacio($$("#txtRegTelefono"),"Telefono");
	bnd=bnd && validInputVacio($$("#txtRegUsuario"),"Usuario");
	bnd=bnd && validInputVacio($$("#txtRegContrasenia"),"Contraseña");
	bnd=bnd && validInputVacio($$("#txtRegRepetir"),"Repetir Contraseña");
	bnd=bnd && validInputMaxMin($$("#txtRegUsuario"),6,"Usuario");
	bnd=bnd && validInputMaxMin($$("#txtRegContrasenia"),6,"Contraseña");
	bnd=bnd && validPassIgual($$("#txtRegContrasenia"),$$("#txtRegRepetir"));

	return bnd;
}