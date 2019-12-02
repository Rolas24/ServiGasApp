function initBuscarColonia(){
	$$("#txtBCBuscarColonia").keyup(function (e) { 
		if($$(this).val().length===4 || $$(this).val().length===6 ||$$(this).val().length===8){
			buscarColonia($$(this).val());
		}
	});
	buscarColonia("a");
}
function buscarColonia(buscar){
	var html="";
	$$("#listaColonias").html("");
	for (var i = 0; i < colonias.length; i++) {
		if(colonias[i].descripcion.startsWith(buscar.toUpperCase())){
			html='<li id="licolonia'+colonias[i].idColonia+'" class="item-content" data-idcolonia="'+colonias[i].idColonia+'">'+
			'<div class="item-inner">'+
			'<div class="item-title">'+colonias[i].descripcion+'</div>'+
			'</div>'+
			'</li>';	
			$$("#listaColonias").append(html);	
			addClickColonia($$("#licolonia"+colonias[i].idColonia));	
		}
		
	}

}
function addClickColonia(obj){
  obj.click(function(){
  	selColonia=$$(this).attr('data-idcolonia');
  	$$("#txtMDOColonia").val($$(this).text());
  	mainView.router.back();	
  });
}