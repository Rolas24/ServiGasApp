function initRegistro(){
	$$("#btnRegresarLogin").click(function(e){		
		e.preventDefault();
		regresarLogin();	
	});
	
	$$("#btnRegistrarCliente").click(function(e){
		e.preventDefault();
		guardarCliente();
	});
}

function guardarCliente(){
	if(validarCliente()){
		var data = {accion: "1",razonSocial:$$("#txtRegNombre").val(),telefonoCelular:$$("#txtRegTelefono").val(),
		correo:$$("#txtRegCorreo").val(),usuario:$$("#txtRegUsuario").val(),contrasena:$$("#txtRegContrasenia").val()};
		
		$$.ajax({url: sURL, dataType: "html", type: 'POST', data,
			beforeSend: function () {
				app.showPreloader('Guardando...')
			},
			success: function (data) {
				if(data==="duplicado"){					
					app.alert("El nombre de usuario ya existe elija otro nombre.","Ya existe");
					
				}else if(data==="exito"){
					app.alert("Registrado Correctamente","Exito.");
					regresarLogin();
				}else if(data==="error"){
					app.alert("Ocurrió un error al guardar. Intente nuevamente.","Error.");
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

function validarCliente(){
	var bnd=true;
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
function regresarLogin(){
	app.loginScreen();
	setTimeout(function () {
		mainView.router.back();		
	}, 380);	
}