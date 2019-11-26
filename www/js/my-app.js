userLoggedIn=false;
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
  var value = window.localStorage.getItem("key");
  app.alert("pff: "+value);
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
     }
   });


//Eventos Login
$$("#btnIniciarSesion").click(function(e){
  e.preventDefault();
  app.showPreloader('Iniciando Sesión...')
  setTimeout(function () {
    app.hidePreloader();
  }, 200);
  app.closeModal('.login-screen');

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
$$("#btnCerrarSesion").click(function(e){
  e.preventDefault();
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
  pedido(3);
});
$$("#btnPedidoLlamar").click(function(e){
  e.preventDefault();
  pedido(4);
});

function pedido(pedido){
  $$.get('detallePedido.html',function(data){
   app.popup(data);
 });

}


function prueba(){
  var data = {accion: "1"};
  
  //http://82.223.50.46/GBBdev/public_html/controlador/test.php
  $$.ajax({url: 'http://mcomplejo.dyndns.org/wServiceApp.php/obtenerCalles', dataType: "html", type: 'POST', data,
    beforeSend: function () {

    },
    success: function (data) {
      app.alert(data);
    },
    error: function (e) {
      //var err = eval("(" + e.responseText + ")");
      alert(e.responseText );
    }
  });
}
