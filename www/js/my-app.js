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

});
//Eventos Login
$$("#btnIniciarSesion").click(function(e){
    e.preventDefault();
    app.closeModal('.login-screen');

});
$$("#btnRegistroUsuario").click(function(e){
    e.preventDefault();
    app.closeModal('.login-screen');
    mainView.router.loadPage('registro.html');
});
$$("#btnRecuperarContraseña").click(function(e){
    e.preventDefault();
    app.alert("Recuperar Contraseña se");

});

//Eventos Main

$$("#btnCerrarPanel").click(function(e){
  e.preventDefault();
  app.closePanel();
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
   }
});


   function prueba(){
    var data = {accion: "1"};
    $$.ajax({url: 'http://82.223.50.46/GBBdev/public_html/controlador/test.php', dataType: "json", type: 'POST', data,
        beforeSend: function () {

        },
        success: function (data) {
            app.alert(data);
        },
        error: function (e) {
            app.alert(e);
        }
    });
}
