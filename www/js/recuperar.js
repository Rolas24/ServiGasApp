function initRecuperar(){
	$$("#btnRegresarLogin2").click(function(e){
		e.preventDefault();
		app.loginScreen();
		setTimeout(function () {
			mainView.router.back();		
		}, 380);
		
	});
	$$("#btnRecuperarPass").click(function(e){
		e.preventDefault();
		app.alert("jaja");
		var data = {accion: "15",correo:$$("#txtRCCorreo").val()};		
		$$.ajax({url: sURL, dataType: "json", type: 'POST', data,
			beforeSend: function () {
				app.showPreloader('Enviando Correo...')
			},
			success: function (data) {
				if(data.length>0){					
					app.alert("Su contraseña fue modificada y enviado a su correo","Enviado");
					regresarLoginRecup();
				}else{
					app.alert("Ocurrió un error al enviar su información","Error!");
				}
				app.hidePreloader();
			},
			error: function (e) {
				app.hidePreloader();
				app.alert("Ocurrió un error al enviar su información por correo","Error!");
			}
		});
	});
}
function regresarLoginRecup(){
	app.loginScreen();
	setTimeout(function () {
		mainView.router.back();		
	}, 380);	
}