var sNombre="";
var sTelefono="";
var sDireccion="";
var sCorreo="";
var sUsuario="";
var sPass="";
var sSucursal="";
var sURL="";
var sIdCliente="";

function setSession(){
	sNombre = window.localStorage.getItem("sgNombre");
	sDireccion = window.localStorage.getItem("sgDireccion");
	sTelefono = window.localStorage.getItem("sgTelefono");
	sCorreo = window.localStorage.getItem("sgCorreo");
	sSucursal=window.localStorage.getItem("sgSucursal");
	sURL = window.localStorage.getItem("sgURLSucursal");
	sUsuario=window.localStorage.getItem("sgUsuario");
	sPass = window.localStorage.getItem("sgPass");
  sIdCliente=window.localStorage.getItem("sgIdCliente");
}

function setLocalStorage(nombre,correo,telefono,usuario,pass,sucursal,idCliente){
       window.localStorage.setItem("sgNombre",nombre);
       window.localStorage.setItem("sgCorreo", correo);
       window.localStorage.setItem("sgTelefono", telefono);
       window.localStorage.setItem("sgUsuario",usuario);
       window.localStorage.setItem("sgPass", pass);
       window.localStorage.setItem("sgSucursal",sucursal);
       window.localStorage.setItem("sgIdCliente",idCliente);
}

function clearStorage(){
	window.localStorage.setItem("sgNombre","");
	window.localStorage.setItem("sgCorreo", "");
	window.localStorage.setItem("sgTelefono", "");
	window.localStorage.setItem("sgUsuario","");
	window.localStorage.setItem("sgPass", "");
	window.localStorage.setItem("sgSucursal", "");
	window.localStorage.setItem("sgDireccion", "");
  window.localStorage.setItem("sgIdCliente", "");
}

function modalSucursal(){
  var urlSucursal="";
  app.modal({
    title:  'CIUDAD',
    text: 'Elija Su Ciudad',
    verticalButtons: true,
    buttons: [
    {
      text: 'Chihuahua',
      onClick: function() {
        urlSucursal="http://pedidoschihuahua.dyndns.org/Controlador/pedidosAppController.php";
        window.localStorage.setItem("sgURLSucursal", urlSucursal);
        sURL=urlSucursal;
      }
    },
    {
      text: 'Cuahutemoc',
      onClick: function() {
        urlSucursal="http://pedidoscuauhtemoc.dyndns.org/Controlador/pedidosAppController.php";
        window.localStorage.setItem("sgURLSucursal", urlSucursal);
        sURL=urlSucursal;
      }
    },
    {
      text: 'Delicias',
      onClick: function() {
        urlSucursal="http://pedidosdelicias.dyndns.org/Controlador/pedidosAppController.php";
        window.localStorage.setItem("sgURLSucursal", urlSucursal);
        sURL=urlSucursal;
      }
    },
    {
      text: 'Camargo',
      onClick: function() {
        urlSucursal="http://pedidoscamargo.dyndns.org/Controlador/pedidosAppController.php";
        window.localStorage.setItem("sgURLSucursal", urlSucursal);
        sURL=urlSucursal;
      }
    },
    {
      text: 'Jimenez',
      onClick: function() {
        urlSucursal="http://pedidosjimenez.dyndns.org/Controlador/pedidosAppController.php";
        window.localStorage.setItem("sgURLSucursal", urlSucursal);
        sURL=urlSucursal;
      }
    },
    {
      text: 'Parral',
      onClick: function() {
        urlSucursal="http://pedidosparral.dyndns.org/Controlador/pedidosAppController.php";
        window.localStorage.setItem("sgURLSucursal", urlSucursal);
        sURL=urlSucursal;
      }
    },
    {
      text: 'cGrandes',
      onClick: function() {
        urlSucursal="http://pedidoscgrandesdyns.org/Controlador/pedidosAppController.php";
        window.localStorage.setItem("sgURLSucursal", urlSucursal);
        sURL=urlSucursal;
      }
    },
    {
      text: 'CD. Juarez',
      onClick: function() {
        urlSucursal="http://mcomplejo.dyndns.org/Controlador/pedidosAppController.php";
        window.localStorage.setItem("sgURLSucursal", urlSucursal);
        sURL=urlSucursal;
      }
    },
    ]
  });  
}

function probar(){
  var Permission = window.plugins.Permission
 
var permission = 'android.permission.RECORD_AUDIO'
 
Permission.has(permission, function(results) {
    if (!results[permission]) {
        Permission.request(permission, function(results) {
            if (result[permission]) {
                // permission is granted
            }
        }, alert)
    }
}, alert)
}