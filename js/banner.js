var banners = ["img/destaque-home.png", "img/destaque-home-2.png", "img/destaque-home-01.png", "img/destaque-home-02.png", "img/destaque-home-03.png", 				"img/destaque-home-04.png", "img/destaque-home-05.png", "img/destaque-home-06.png"];
var bannerAtual = 0;

function trocaBanner() {
	if(bannerAtual <= (banners.length)){
		bannerAtual = bannerAtual+1;
		document.querySelector('.banner-destaque img').src = banners[bannerAtual];
		
		if(bannerAtual == (banners.length)){
			
			bannerAtual = 0;
			document.querySelector('.banner-destaque img').src = banners[bannerAtual];
		}
	}

}
setInterval(trocaBanner, 3000);
