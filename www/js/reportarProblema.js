function initReportarProblema(){
	app.closePanel();
	$$("#btnRPReportarProblema").click(function(e){
		e.preventDefault();
		guardarProblema();
	});
}

function guardarProblema(){
	if(validarReportarProblema()){
		var data = {accion: "14", idCliente:sIdCliente,titulo:$$("#txtRPAsunto").val(),comentario:$$("#txtRPDescripcion").val()};
		$$.ajax({url: sURL, dataType: "json", type: 'POST', data,
			beforeSend: function () {
				app.showPreloader('Reportando problema...')
			},
			success: function (data) {
				if(data==="1"){
					app.alert("Reporte guardado. Nos comunicaremos con usted para resolver el problema.","Exito!");
				    mainView.router.back();	
				}else{
					app.alert("Ocurrió un error al reportar su problema.","Error!");
				}
				app.hidePreloader();
			},
			error: function (e) {
				app.hidePreloader();
				app.alert("Ocurrió un error al reportar su problema.","Error!");
			}
		});
	}
}

function validarReportarProblema(){
	var bnd=true;
	bnd=bnd && validInputVacio($$("#txtRPAsunto"),"Asunto");
	bnd=bnd && validInputVacio($$("#txtRPDescripcion"),"Descripción");
	bnd=bnd && validInputMaxMin($$("#txtRPDescripcion"),20,"Descripción");
	return bnd;
}