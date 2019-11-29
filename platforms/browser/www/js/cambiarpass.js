function initCambiarPass(){
	app.closePanel();
	$$("#txtCPUsuario").val(sUsuario);
	$$("#btnCambiarPass").click(function(e){
		e.preventDefault();
		guardarNuevoPass();
	});
}

function guardarNuevoPass(){
	if(validarCambiarPass()){
		  var data = {accion: "4", usuario:$$("#txtCPUsuario").val(),contrasena:$$("#txtCPPassNuevo").val(),idCliente:sIdCliente};
		  $$.ajax({url: sURL, dataType: "json", type: 'POST', data,
		  	beforeSend: function () {
		  		app.showPreloader('Guardando contraseña...')
		  	},
		  	success: function (data) {
		  		if(data==="1"){
                  app.alert("Contraseña Modificada.","Exito!");
                  app.alert("Por favor inicie Sesión nuevamente.","Iniciar Sesión");
                  clearStorage();
                  app.loginScreen();
		  		}else if(data==="0"){
		  			app.alert("Ocurrio un error al modificar su contraseña.","Error!");
		  		}
		  		app.hidePreloader();
		  	},
		  	error: function (e) {
		  		app.hidePreloader();
		  		app.alert("Ocurrio un error al modificar su contraseña.","Error!");
		  	}
		  });
    }
}

function validarCambiarPass(){
	var bnd=true;
	bnd=bnd && validInputVacio($$("#txtCPPassActual"),"Contraseña Actual");
	bnd=bnd && validInputVacio($$("#txtCPPassNuevo"),"Contraseña Nueva");
	bnd=bnd && validInputMaxMin($$("#txtCPPassNuevo"),6,"Contraseña Nueva");
	bnd=bnd && validPassIgual($$("#txtCPPassNuevo"),$$("#txtCPRepetir"));
	if($$("#txtCPPassActual").val()!==sPass){
		app.alert("Su contraseña actual no coincide con la escrita","Contraseña actual");
		bnd=false;
	}
	return bnd;
}