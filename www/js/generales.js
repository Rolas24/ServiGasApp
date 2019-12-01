function validInputVacio(obj,nom){
	if(obj.val().trim().length<=0){
		app.alert("El dato "+nom+" esta vacío","Campo Vacío");
		return false;
	}else{
		return true;
	}
}
function validPassIgual(obj1,obj2){
	if(obj1.val()===obj2.val()){
		return true;
	}else{
		app.alert("Las contraseñas ingresadas no coinciden","Contraseñas distintas");
		return false;
	}
}
function validInputMaxMin(obj,tam,nom){
	if(obj.val().trim().length<tam){
		app.alert("El dato "+nom+" debe tener al menos "+tam+" caracteres","Tamaño Minimo");
		return false;
	}else{
		return true;
	}
}
function valDifCero(val,nom){
	if(val===0){
		app.alert("El dato "+nom+" no puede estar vacio","Sin Selección");
	}else{
		return true;
	}

}
function getSucursal(val){
	var urlSucursal="";
	switch (val) {
		case '1':
		urlSucursal="http://pedidoschihuahua.dyndns.org/";
		break;
		case '2':
		urlSucursal="http://pedidoscuauhtemoc.dyndns.org/";
		break;
		case '3':
		urlSucursal="http://pedidosdelicias.dyndns.org/";
		break;
		case '4':
		urlSucursal="http://pedidoscamargo.dyndns.org/";
		break;
		case '5':
		urlSucursal="http://pedidosjimenez.dyndns.org/";
		break;
		case '6':
		urlSucursal="http://pedidosparral.dyndns.org/";
		break;
		case '7':
		urlSucursal="http://pedidoscgrandesdyns.org/";
		break;
		case '8':
		urlSucursal="http://mcomplejo.dyndns.org/Controlador/pedidosAppController.php";
		break;
		default:
		urlSucursal="http://pedidoschihuahua.dyndns.org/";
	}
}