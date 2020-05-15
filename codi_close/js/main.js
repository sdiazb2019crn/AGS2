$(document).ready(main);

var contador = 1;

function main () {
	$('.iconhamb').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
	$('#atras2').click(function(){
		$('nav').animate({
			left: '-100%'
		});
	});
};
