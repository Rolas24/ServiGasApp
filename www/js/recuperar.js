function initRecuperar(){
	$$("#btnRegresarLogin2").click(function(e){
		e.preventDefault();
		app.loginScreen();
		setTimeout(function () {
			mainView.router.back();		
		}, 380);
		
	});
}