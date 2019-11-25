function initLogin(){
    $$("#btnIniciarSesion").click(function(e){
        e.preventDefault();
        app.alert("iniciar sesion");
    });
    $$("#btnRegistroUsuario").click(function(e){
        e.preventDefault();
        mainView.router.loadPage('registro.html');
    });
     $$("#btnRecuperarContraseña").click(function(e){
        e.preventDefault();
        app.alert("Recuperar Contraseña se");
        
    });
}