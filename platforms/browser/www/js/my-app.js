
// Initialize app
var app = new Framework7();
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var mainView = app.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
  });

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
  if(sUsuario.length>0){
    app.closeModal('.login-screen');
  }if(sURL.length===0){
    modalSucursal();
  }
});

$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
       // app.alert('Here comes About page');
     }else if(page.name ==='splash'){

     }else if(page.name ==='main'){
       initMain();
     }else if(page.name ==='registro'){
       initRegistro();
     }else if(page.name === 'recuperar'){
       initRecuperar();
     }else if(page.name==='cambiarpass'){
       initCambiarPass();
     }else if(page.name === 'modificarDatos'){
       initModificarDatos();
     }else if(page.name === 'modificarDomicilio'){    
     app.alert("rolas");  
      var map = new GoogleMap();
      map.initialize();
    }
  });
function onBackKeyDown() {
 app.alert("okidoki");
}

//Eventos Login
$$("#btnIniciarSesion").click(function(e){
  e.preventDefault();
  iniciarSesion();

});
$$("#btnRegistroUsuario").click(function(e){
  e.preventDefault();
  mainView.router.loadPage('registro.html');
  setTimeout(function () {
    app.closeModal('.login-screen');
  }, 380);
  
  
});
$$("#btnRecuperarContrasenia").click(function(e){
  e.preventDefault();
  mainView.router.loadPage('recuperar.html');
  setTimeout(function () {
    app.closeModal('.login-screen');
  }, 380);
});

//Eventos Panel Main

$$("#btnCerrarPanel").click(function(e){
  e.preventDefault();
  app.closePanel();
});
$$("#btnModificarDomicilio").click(function(e){
 mainView.router.loadPage('modificarDomicilio.html');
});
$$("#btnCerrarSesion").click(function(e){
  e.preventDefault();
  cerrarSesion();
  app.closePanel();
  app.loginScreen();
});

//Eventos Main TAB 1
$$("#btnPedidoEstacionario").click(function(e){
  e.preventDefault();
  pedido(1);
});
$$("#btnPedidoCilindro").click(function(e){
  e.preventDefault();
  pedido(2);
});
$$("#btnPedidoWhatsapp").click(function(e){
  e.preventDefault();
  app.alert("jaja");
  pedidoWhatsapp();
});
$$("#btnPedidoLlamar").click(function(e){
  e.preventDefault();
  pedidoLlamar(4);
});

function iniciarSesion(){
  if(validarInicioSesion()){
    var data = {accion: "5",usuario:$$("#txtLoginUsuario").val(),contrasena:$$("#txtLoginPass").val()};
    $$.ajax({url: sURL, dataType: "json", type: 'POST', data,
     beforeSend: function () {
       app.showPreloader('Iniciando Sesión...');
     },
     success: function (data) {
      if(data.length>0){
       setLocalStorage(data[0].razonsocial,data[0].correo,data[0].telefono_celular,
         $$("#txtLoginUsuario").val(),$$("#txtLoginPass").val(),data[0].idSucursal,
         data[0].idCliente);
       setSession();
       $$("#txtPnlUsuario").text($$("#txtLoginUsuario").val());
       $$("#txtPnlNombre").text(data[0].razonSocial);  
       $$("#txtLoginUsuario").val("");
       $$("#txtLoginPass").val("");
       app.closeModal('.login-screen');
     }else{

      app.alert("El usuario/contraseña que ingresaste no pertenecen a ninguna cuenta. Comprueba los datos.","Error!");
    }
    app.hidePreloader();
  },
  error: function (e) {
    app.hidePreloader();
    app.alert("Ocurrió un error al iniciar sesión. Intente nuevamente.","Error!");
  }
});

  }
}

function cerrarSesion(){
  clearStorage();
  modalSucursal();
}

function pedido(pedido){
  $$.get('detallePedido.html',function(data){
   app.popup(data);
   $$("#txtPedNombre").val(sNombre);
   $$("#txtPedDireccion").val(sDireccion);
   $$("#txtPedTelefono").val(sTelefono);
   $$("#txtPedCorreo").val(sCorreo);
   if(pedido===1){
     $$("#contTipoCilindro").hide();
     $$("#sltTipoPedido").val("Estacionario");
   }else if(pedido===2){
     $$("#contLitros").hide();
     $$("#sltTipoPedido").val("Cilindro");
   }
 });

}
function pedidoWhatsapp(){
  app.alert("whats");
}
function pedidoLlamar(){

}


function validarInicioSesion(){
  var bnd=true;
  bnd=bnd && validInputVacio($$("#txtLoginUsuario"),"Usuario");
  bnd=bnd && validInputVacio($$("#txtLoginPass"),"Contraseña");
  bnd=bnd && validInputMaxMin($$("#txtLoginUsuario"),6,"Usuario");
  bnd=bnd && validInputMaxMin($$("#txtLoginPass"),6,"Contraseña");
  return bnd;
}
