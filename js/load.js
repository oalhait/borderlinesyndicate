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


$("#mainsection").ready(function() {
	setTimeout(function() {
		$("#loadingsection").addClass("hidden");
		$("#mainsection").removeClass("hidden");
		$("#mainsection").addClass("visible");
	}, 1000);
});