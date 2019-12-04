function initFullPedidos(){
	var html="";    
	for (var i = 0; i < mispedidos.length; i++) {
		console.log("pos");
		var icontemp="";
		var estatustemp="";
		if(mispedidos[i].estatus==="1"){
			icontemp='estatus_registrado.png';
			estatustemp='registrado';
		}else if(mispedidos[i].estatus==="2"){
			icontemp='estatus_encamino.png';
			estatustemp='En camino';
		}else if(mispedidos[i].estatus==="3"){
			icontemp='estatus_surtido.png';
			estatustemp='Surtido';
		}else if(mispedidos[i].estatus==="4"){
			icontemp='cancelado.png';
			estatustemp='Cancelado';
		}
		html='<li id="pedf'+mispedidos[i].idPedido+'" class="card" data-idpedido="'+mispedidos[i].idPedido+'">'+
		'<div class="card-header">Folio: '+mispedidos[i].idPedido+'<strong> '+mispedidos[i].fechaHoraRegistro+'</strong></div>'+
		'<div class="card-content">'+
		'<div class="card-content-inner">'+
		'Tipo pedido: '+mispedidos[i].tipopedido+'<br>'+
		'estatus: '+estatustemp+" "+
		'<img src="img/'+icontemp+'" width="18" height="18"/>'+
		'</div>'+
		'</div>'+
		'<div class="card-footer"><a href="#" class="button active">Detalle</a></div>'+
		'</li>'
		$$("#listaPedidosFull").append(html);
		addClickPedido($$("#pedf"+mispedidos[i].idPedido));
	}
}