// function switchToMain() {
// 	setTimeout(1000);
// 	var main = document.getElementById("mainsection");
// 	var loading = document.getElementById("loadingsection");
// 	// main.addClass("fadeIn");
// 	main.removeClass("hidden");
// 	// loading.addClass("fadeOut");
// 	loading.addClass("hidden");
// 	document.getElementById('bgvid').addClass("fadeIn");
// }


$("#mainsection").load(function() {
	$("#loadingsection").addClass("hidden");
	$(this).addClass("visible");
	$(this).removeClass("hidden");
});