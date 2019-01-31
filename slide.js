
class Slider {
	constructor() {
		this.bannerStatus = 1; 
		this.bannerTimer = 8000;
		this.startBannerLoop; 
		this.img1 = $('#img1'); 
		this.img2 = $('#img2');
		this.img3 = $('#img3');  
		this.nextBtn = $('#imgbanbtn-next'); 
		this.prevBtn = $('#imgbanbtn-prev'); 
		this.window = $(window);
		this.sliderUI = $('.imgbanbtn'); 
		this.events(); 
	}
	events() {
		var Int = this.startBannerLoop(); 
		this.nextBtn.on('click', this.nextImage.bind(this)); 
		this.prevBtn.on('click', this.prevImage.bind(this));
		this.window.scroll(() => {
			this.scrollEvent(); 
		})

		 $('#banner_holder').hover(function(){
		 	clearInterval(this.startBannerLoop);
		  }); 
	}
	startBannerLoop() {
		setInterval(function() {
			this.bannerLoopNext(); 
		}.bind(this), this.bannerTimer); 
	}
	scrollEvent() {
		this.window.scroll( () => {
			var $nav = $(".navbar-fixed-top");
			this.sliderUI.toggleClass('op', this.window.scrollTop() > 150);
		  });
		
	}
	bannerLoopNext() {
		if(this.bannerStatus === 1) {
			this.img2.css('display', 'block'); 
			setTimeout( () => {
				this.img1.css('opacity', '0'); 
				this.img2.css('opacity', '1'); 
			}, 100);
			
			
			setTimeout( () => {
				this.img1.css('display', 'none'); 
			}, 700); 
			this.bannerStatus = 2; 
		} else if (this.bannerStatus === 2) {
			this.img3.css('display', 'block'); 
			setTimeout( () => {
				this.img2.css('opacity', '0');
				this.img3.css('opacity', '1'); 
			}, 100);
		
			setTimeout( () => {
				this.img2.css('display', 'none'); 
			}, 700); 
			this.bannerStatus = 3; 
		} else if (this.bannerStatus) {
			this.img3.css('opacity', '0'); 
			this.img1.css('opacity', '1'); 
			this.img1.css('display', 'block'); 

			setTimeout( () => {
				this.img3.css('display', 'none'); 
			}, 700); 
		this.bannerStatus = 1; 
		}
		
	}
	bannerLoopPrev() {
		if(this.bannerStatus === 1) {
			
				this.img3.css('display', 'block'); 
				setTimeout( () => {
					this.img1.css('opacity', '0'); 
					this.img3.css('opacity', '1'); 
				}, 100);
				setTimeout( () => {
					this.img1.css('display', 'none'); 
				}, 700); 
				
			this.bannerStatus = 3; 
		} else if (this.bannerStatus === 2) {
			this.img1.css('display', 'block'); 
			setTimeout( () => {
				this.img2.css('opacity', '0');
				this.img1.css('opacity', '1'); 
			}, 100);
			
			setTimeout( () => {
				this.img2.css('display', 'none'); 
			}, 700); 
			this.bannerStatus = 1; 
		} else if (this.bannerStatus === 3) {
			this.img2.css('display','block'); 
			setTimeout( () => {
				this.img3.css('opacity', '0'); 
				this.img2.css('opacity', '1'); 
			}, 100);
			setTimeout( () => {
				this.img3.css('display', 'none'); 
			}, 700); 
		this.bannerStatus = 2; 
		}
		
	}
	nextImage() {	
		this.bannerLoopNext(); 	
	}
	prevImage() {
		this.bannerLoopPrev(); 
	}
}
var slide = new Slider(); 