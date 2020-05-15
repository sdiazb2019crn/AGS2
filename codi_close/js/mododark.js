$(document).ready(main);

var contador = 1;

function main () {
	$('#dark').click(function(){
		if (contador == 1) {
			document.body.style.backgroundColor="white";
			$(".peu").css("backgroundColor", "white");
			$(".cap").css("backgroundColor", "white");
			$("nav").css("backgroundColor", "white");
			contador = 0;
		} else {
			contador = 1;
			document.body.style.backgroundColor="#988181";
			$(".peu").css("backgroundColor", "#988181");
			$(".cap").css("backgroundColor", "#988181");
			$("nav").css("backgroundColor", "#c6b9b9");
		}
	});
};
