$(document).ready(function() {

	$('#menu_mobile').click(function() {
		var sub_menu = $('#sub_menu');
		var btn_barra_top = $('.btn_barra_top');
		var btn_barra_center = $('.btn_barra_center');
		var btn_barra_bottom = $('.btn_barra_bottom');

		if(sub_menu.css('display') == 'none'){
			sub_menu.css({'display':'flex'});

			btn_barra_top.css({'transform':'translate(0,8px) rotate(45deg)'});
			btn_barra_center.css({'display':'none'});
			btn_barra_bottom.css({'transform':'translate(0,-2px) rotate(-45deg)'});

		}else{
			sub_menu.css({'display':'none'});

			btn_barra_top.css({'transform':'none'});
			btn_barra_center.css({'display':'block'});
			btn_barra_bottom.css({'transform':'none'});
		}
		
	});

	$('#btn_mais_inf_center').click(function() {
		var btn = $(this);
		var mais_inf_body = $('#mais_inf_body');
		var setinha = $('#setinha');

		if(mais_inf_body.css('display') == 'flex'){

			mais_inf_body.css({'display':'none'});
			btn.css({'background-color':'#FFF'});
			setinha.css({'transform':'rotate(45deg)'});

		}else{

			mais_inf_body.css({'display':'flex'});
			btn.css({'background-color':'#EBEBEB'});
			setinha.css({'transform':'rotate(225deg)'});
		}

	});

});