function initRegistro(){
	$$("#btnRegresarLogin").click(function(e){
		e.preventDefault();
		app.loginScreen();
		mainView.router.back();
		
	});
}