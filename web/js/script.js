const iconesRedes = document.querySelectorAll('.footer_redes img');
const iconesRedesContato = document.querySelectorAll('.contato_dados li img');
const logo = document.getElementById('logo');

function mudarIcone(item){
	
	switch(item){
		case 1:
			iconesRedes[0].src = 'img/sociais/facebook-branco.svg';
			break;
		case 2:
			iconesRedes[1].src = 'img/sociais/instagram-branco.svg';
			break;
		case 3:
			iconesRedes[2].src = 'img/sociais/twitter-branco.svg';
			break;
		case 4:
			iconesRedes[0].src = 'img/sociais/facebook.svg';
			break;
		case 5:
			iconesRedes[1].src = 'img/sociais/instagram.svg';
			break;
		case 6:
			iconesRedes[2].src = 'img/sociais/twitter.svg';
			break;
		case 7:
			iconesRedesContato[0].src = 'img/sociais/facebook-preto.svg';
			break;
		case 8:
			iconesRedesContato[1].src = 'img/sociais/instagram-preto.svg';
			break;
		case 9:
			iconesRedesContato[2].src = 'img/sociais/twitter-preto.svg';
			break;
		case 10:
			iconesRedesContato[0].src = 'img/sociais/facebook.svg';
			break;
		case 11:
			iconesRedesContato[1].src = 'img/sociais/instagram.svg';
			break;
		case 12:
			iconesRedesContato[2].src = 'img/sociais/twitter.svg';
			break;
		case 13:
			logo.src = 'img/bikcraft-branco.svg';
			break;
		case 14:
			logo.src = 'img/bikcraft.svg';
		default:
			break;
	};
};

if(window.SimpleSlide){
	
	new SimpleSlide({
		slide: 'quote',
		time: 5000
	});

	new SimpleSlide({
		slide: 'produtos',
		tine: 3000,
		nav: true,
		auto: false
	});
};