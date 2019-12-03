function initModificarDatos(){
	app.closePanel();
	$$("#btnMDGuardarDatos").click(function(e){
		e.preventDefault();
		actualizarDatosCliente();
	});
	$$("#txtMDNombre").val(sNombre);
	$$("#txtMDCorreo").val(sCorreo);
	$$("#txtMDTelefono").val(sTelefono);
	$$("#txtMDUsuario").val(sUsuario);
	//$$("input[name=rbMDCiudad][value='" + sSucursal + "']").attr('checked', 'checked');
}

function actualizarDatosCliente(){
	if(validarActualizacionDatos()){
		var nombre=$$("#txtMDNombre").val();
		var correo=$$("#txtMDCorreo").val();
		var telefono=$$("#txtMDTelefono").val();
		var usuario=$$("#txtMDUsuario").val();

		var data = {accion: "2", razonSocial:nombre,correo:correo,telefonoCelular:telefono,idCliente:sIdCliente};

		$$.ajax({url: sURL, dataType: "json", type: 'POST', data,
			beforeSend: function () {
				app.showPreloader('Modificando datos...');
			},
			success: function (data) {
				if(data==="1"){
					app.alert("Información actualizada.","Exito!");
                    updateSesionDatos(nombre,correo,telefono,usuario);
					$("#txtPnlUsuario").text(sUsuario);
				}else if(data==="0"){
                  app.alert("Ocurrio un error al actualizar sus datos.","Error!");
				}
				app.hidePreloader();
			},
			error: function (e) {
				app.hidePreloader();
				app.alert("Ocurrio un error al actualizar sus datos.","Error!");
			}
		});
	}
}
function validarActualizacionDatos(){
	var bnd=true;
	bnd=bnd && validInputVacio($$("#txtMDNombre"),"Nombre");
	bnd=bnd && validInputVacio($$("#txtMDCorreo"),"Correo");
	bnd=bnd && validInputVacio($$("#txtMDTelefono"),"Telefono");
	return bnd;
}