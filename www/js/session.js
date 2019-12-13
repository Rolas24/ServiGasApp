var sNombre="";
var sTelefono="";
var sCorreo="";
var sUsuario="";
var sPass="";
var sSucursal="";
var sURL="";
var sIdCliente="";
var sIdDomicilio="";
var sIdCalle="";
var sIdColonia="";
var sCalle="";
var sColonia="";
var sNumInt="";
var sNumExt="";
var sEntreCalles="";
var sUltimoPedido="";
var sTelSucursal="";
function setSession(){
 sIdCliente=window.localStorage.getItem("sgIdCliente");
 if (typeof sIdCliente !== 'undefined' && sIdCliente !== null){
   sNombre = window.localStorage.getItem("sgNombre");
   sTelefono = window.localStorage.getItem("sgTelefono");
   sCorreo = window.localStorage.getItem("sgCorreo");
   sSucursal=window.localStorage.getItem("sgSucursal");
   sURL = window.localStorage.getItem("sgURLSucursal");
   sUsuario=window.localStorage.getItem("sgUsuario");
   sPass = window.localStorage.getItem("sgPass");
   sIdDomicilio=window.localStorage.getItem("sgIdDomicilio");
   sIdCalle=window.localStorage.getItem("sgIdCalle");
   sIdColonia=window.localStorage.getItem("sgIdColonia");
   sCalle=window.localStorage.getItem("sgCalle");
   sColonia=window.localStorage.getItem("sgColonia");
   sNumInt=window.localStorage.getItem("sgNumInt");
   sNumExt=window.localStorage.getItem("sgNumExt");
   sEntreCalles=window.localStorage.getItem("sgEntreCalles");
   sTelSucursal=window.localStorage.getItem("sgTelSucursal");
 }
}

function setLocalStorage(nombre,telefono,correo,sucursal,usuario,pass,
  idCliente,idDomicilio,idCalle,idColonia,calle,colonia,numint,numext,entrecalles){
 window.localStorage.setItem("sgNombre",nombre);
 window.localStorage.setItem("sgTelefono", telefono);
 window.localStorage.setItem("sgCorreo",correo);
 window.localStorage.setItem("sgSucursal",sucursal);
 window.localStorage.setItem("sgUsuario",usuario);
 window.localStorage.setItem("sgPass",pass);
 window.localStorage.setItem("sgIdCliente",idCliente);
 window.localStorage.setItem("sgIdDomicilio",idDomicilio);
 window.localStorage.setItem("sgIdCalle", idCalle);
 window.localStorage.setItem("sgIdColonia",idColonia);
 window.localStorage.setItem("sgCalle", calle);
 window.localStorage.setItem("sgColonia",colonia);
 window.localStorage.setItem("sgNumInt",numint);
 window.localStorage.setItem("sgNumExt",numext);
 window.localStorage.setItem("sgEntreCalles",entrecalles);
}

function updateSesionDomicilio(idCalle,calle,idColonia,colonia,numext,numint,entrecalles){
  sIdCalle=idCalle;
  sCalle=calle;
  sIdColonia=idColonia;
  sColonia=colonia;
  sNumExt=numext;
  sNumInt=numint;
  sEntreCalles=entrecalles;
  window.localStorage.setItem("sgIdCalle", idCalle);
  window.localStorage.setItem("sgIdColonia",idColonia);
  window.localStorage.setItem("sgCalle", calle);
  window.localStorage.setItem("sgColonia",colonia);
  window.localStorage.setItem("sgNumInt",numint);
  window.localStorage.setItem("sgNumExt",numext);
  window.localStorage.setItem("sgEntreCalles",entrecalles);
}

function updateSesionDatos(nombre,correo,telefono,usuario){
  sNombre=nombre;
  sTelefono=telefono;
  sCorreo=correo;
  sUsuario=usuario;
  window.localStorage.setItem("sgNombre",nombre);
  window.localStorage.setItem("sgTelefono", telefono);
  window.localStorage.setItem("sgCorreo",correo);
  window.localStorage.setItem("sgUsuario",usuario);
}

function clearStorage(){
	window.localStorage.setItem("sgNombre","");
	window.localStorage.setItem("sgCorreo", "");
	window.localStorage.setItem("sgTelefono", "");
	window.localStorage.setItem("sgUsuario","");
	window.localStorage.setItem("sgPass", "");
	window.localStorage.setItem("sgSucursal", "");
  window.localStorage.setItem("sgIdCliente", "");
  window.localStorage.setItem("sgIdDomicilio", "");
  window.localStorage.setItem("sgIdCalle", "");
  window.localStorage.setItem("sgIdColonia","");
  window.localStorage.setItem("sgCalle", "");
  window.localStorage.setItem("sgColonia","");
  window.localStorage.setItem("sgNumInt","");
  window.localStorage.setItem("sgNumExt","");
  window.localStorage.setItem("sgEntreCalles","");
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
        window.localStorage.setItem("sgTelSucursal","614-424-2121");
        window.localStorage.setItem("sgURLSucursal", urlSucursal);
        sURL=urlSucursal;
        sTelSucursal="614-424-2121";   
      }
    },
    {
      text: 'Cuahutemoc',
      onClick: function() {
        urlSucursal="http://pedidoscuauhtemoc.dyndns.org/Controlador/pedidosAppController.php";
        window.localStorage.setItem("sgTelSucursal", "625-106-0169");
        window.localStorage.setItem("sgURLSucursal", urlSucursal);
        sURL=urlSucursal;
        sTelSucursal="625-106-0169";
      }
    },
    {
      text: 'Delicias',
      onClick: function() {
        urlSucursal="http://pedidosdelicias.dyndns.org/Controlador/pedidosAppController.php";
        window.localStorage.setItem("sgTelSucursal", "639-472-1700");
        window.localStorage.setItem("sgURLSucursal", urlSucursal);
        sURL=urlSucursal;
        sTelSucursal="639-472-1700";
      }
    },
    {
      text: 'Camargo',
      onClick: function() {
        urlSucursal="http://pedidoscamargo.dyndns.org/Controlador/pedidosAppController.php";
        window.localStorage.setItem("sgTelSucursal", "648-462-0139");
        window.localStorage.setItem("sgURLSucursal", urlSucursal);
        sURL=urlSucursal;
        sTelSucursal="648-462-0139";
   
                   627-522-8550      
      }
    },
    {
      text: 'Jimenez',
      onClick: function() {
        urlSucursal="http://pedidosjimenez.dyndns.org/Controlador/pedidosAppController.php";
        window.localStorage.setItem("sgTelSucursal", "629-542-2223");
        window.localStorage.setItem("sgURLSucursal", urlSucursal);
        sURL=urlSucursal;
        sTelSucursal="629-542-2223";
      }
    },
    {
      text: 'Parral',
      onClick: function() {
        urlSucursal="http://pedidosparral.dyndns.org/Controlador/pedidosAppController.php";
        window.localStorage.setItem("sgTelSucursal", "627-522-8500");
        window.localStorage.setItem("sgURLSucursal", urlSucursal);
        sURL=urlSucursal;
        sTelSucursal="627-522-8500";
      }
    },
    {
      text: 'Casas Grandes',
      onClick: function() {
        urlSucursal="http://pedidoscgrandesdyns.org/Controlador/pedidosAppController.php";
        window.localStorage.setItem("sgTelSucursal", "636-661-4151");
        window.localStorage.setItem("sgURLSucursal", urlSucursal);
        sURL=urlSucursal;
        sTelSucursal="636-661-4151";
      }
    },
    {
      text: 'CD. Juarez',
      onClick: function() {
        urlSucursal="http://mcomplejo.dyndns.org/Controlador/pedidosAppController.php";
        window.localStorage.setItem("sgTelSucursal", "656-629-1000");
        window.localStorage.setItem("sgURLSucursal", urlSucursal);
        sURL=urlSucursal;
        sTelSucursal="656-629-1000";
      }
    },
    ]
  });  
}
