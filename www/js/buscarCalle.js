function initBuscarCalle(){
	$$("#txtBCBuscarCalle").keyup(function (e) { 
		if($$(this).val().length===4 || $$(this).val().length===6 ||$$(this).val().length===8){
			buscarCalle($$(this).val());
		}
	});
	buscarCalle("ab");
}
function buscarCalle(buscar){
	var html="";
	$$("#listaCalles").html("");
	for (var i = 0; i < calles.length; i++) {
		if(calles[i].descripcion.startsWith(buscar.toUpperCase())){
			html='<li id="licalle'+calles[i].idCalle+'"class="item-content" data-idcalle="'+calles[i].idCalle+'">'+
			'<div class="item-inner">'+
			'<div class="item-title">'+calles[i].descripcion+'</div>'+
			'</div>'+
			'</li>';		
			$$("#listaCalles").append(html);	
			addClickCalle($$("#licalle"+calles[i].idCalle));	
		}
	}
}
function addClickCalle(obj){
  obj.click(function(){
  	selCalle=$$(this).attr('data-idcalle');
  	$$("#txtMDOCalle").val($$(this).text());
  	//mainView.router.back();	
  	app.closeModal(".popup",true);  
  });
}