const iconesRedes = document.querySelectorAll('.footer_redes img');
const iconesRedesContato = document.querySelectorAll('.contato_dados li img');

function mudarIcone(item){
	if (item == 1){
		iconesRedes[0].src = 'img/sociais/facebook-branco.svg';
	}else 	if (item == 2){
		iconesRedes[1].src = 'img/sociais/instagram-branco.svg';
	}else 	if (item == 3){
		iconesRedes[2].src = 'img/sociais/twitter-branco.svg';
	}else if(item == 4){
		iconesRedes[0].src = 'img/sociais/facebook.svg';
	}else if(item == 5){
		iconesRedes[1].src = 'img/sociais/instagram.svg';
	}else if(item == 6){
		iconesRedes[2].src = 'img/sociais/twitter.svg'
	}else if(item == 7){
		iconesRedesContato[0].src = 'img/sociais/facebook-preto.svg'
	}else if(item == 8){
		iconesRedesContato[1].src = 'img/sociais/instagram-preto.svg'
	}else if(item == 9){
		iconesRedesContato[2].src = 'img/sociais/twitter-preto.svg'
	}else if(item == 10){
		iconesRedesContato[0].src = 'img/sociais/facebook.svg';
	}else if(item == 11){
		iconesRedesContato[1].src = 'img/sociais/instagram.svg';
	}else if(item == 12){
		iconesRedesContato[2].src = 'img/sociais/twitter.svg'
	};
};