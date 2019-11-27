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
		app.alert("Registrado correctamente ahora puede iniciar sesión","Exito!");
		window.localStorage.setItem("sgNombre", $$("#txtRegNombre").val());
		window.localStorage.setItem("sgCorreo", $$("#txtRegCorreo").val());
		window.localStorage.setItem("sgTelefono", $$("#txtRegTelefono").val());
		window.localStorage.setItem("sgUsuario", $$("#txtRegUsuario").val());
		window.localStorage.setItem("sgPass", $$("#txtRegContrasenia").val());
		window.localStorage.setItem("sgURLSucursal", getSucursal($$("input[name='my-radio']:checked").val()));
	    regresarLogin();
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