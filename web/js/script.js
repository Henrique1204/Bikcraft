const iconesRedes = document.querySelectorAll('.footer_redes img');

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
	}
};