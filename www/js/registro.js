function initRegistro(){
	$$("#btnRegresarLogin").click(function(e){
		window.localStorage.setItem("key", "rolitas");
		e.preventDefault();
		app.loginScreen();
		setTimeout(function () {
			mainView.router.back();		
		}, 380);

		
	});
}