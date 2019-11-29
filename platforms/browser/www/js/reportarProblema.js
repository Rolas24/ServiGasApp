function initReportarProblema(){
	app.closePanel();
	$$("#btnRPReportarProblema").click(function(e){
		e.preventDefault();
		guardarProblema();
	});
}

function guardarProblema(){
	if(validarReportarProblema()){
		app.alert('guardar!');
		var data = {accion: "1"};
		$$.ajax({url: sURL, dataType: "html", type: 'POST', data,
			beforeSend: function () {
				app.showPreloader('Reportando problema...')
			},
			success: function (data) {
				if(data==="success"){
					app.alert("Reporte guardado. Nos comunicaremos con uste para resolver el problema.","Exito!");

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