$(document).ready(function(){
	'use stricts';
	var img = document.getElementsByTagName('img'),
		lenImg = img.length;
	for (var index = 0; index < lenImg; index++) {
		if(img[index].getAttribute('alt') == "www.000webhost.com")
			img[index].style.display = 'none';
	}

	new WOW().init();
	$('.js-tilt').tilt({
	    glare: true,
	    maxGlare: .5,
	    perspective: 1000,
		easing: "cubic-bezier(.03,.98,.52,.99)"
	})

	$('.title1 h1').html(
		$('.title1 h1').text().replace(/(\w)/gmi, '<span>$1</span>')
	);

	// Drop Text Title
 	anime({
 		targets: '.title1 h1 span',
 		translateY: [-200, 0],
 		duration: 2000,
 		delay: (el, i) => {
 			return i * 100;
 		}
 	});

 	// Drop Button Down
 	anime({
 		targets: '#getdown1',
 		opacity: [0, 1],
 		translateY: [-50, 0],
 		duration: 2000,
 		loop: true
 	})

 	// After 2s Change Text Color 
 	setTimeout(() => {
 		anime({
	 		targets: '.title1 h1 span',
	 		duration: 2000,
	 		color: ['#E67B7B', '#5174F8' , '#B25EF9', '#fff'],
	 		delay: (el, i) => {
	 			return i * 100;
	 		},
	 		loop: true
	 	});
 	}, 2000);

	var myElement = document.getElementById("scrollMonitor"),
		elementWatcher = scrollMonitor.create( myElement ),
		isIframe = isMessage = 0;

	elementWatcher.enterViewport(function() {
		if(window.outerWidth < 500){
			var drop_love = document.getElementsByClassName('drop_love')[0];
			drop_love.src = drop_love.dataset.src;
		}
		var avatar = document.getElementsByClassName('avatar')[0];
		avatar.src = avatar.dataset.src;
	});
	elementWatcher.exitViewport(function() {
		$('.alert').animate({bottom: "-=70px"},500);
	});

	window.addEventListener('scroll', function(){
		var elScroll = Math.round($('.container-fluid.page3').offset().top),
			elScroll2 = Math.round($('.container-fluid.page4').offset().top),
			windowOffset = Math.round(window.pageYOffset) + 1;

		if(isMessage == 0){
			if(elScroll < (windowOffset + 200)){
				anime({
					targets: 'svg path#path_message',
					strokeDashoffset: [anime.setDashoffset, 0],
					opacity: [0, 1],
					easing: 'easeInOutSine',
					duration: 2000,
					complete: (el, i) => {
						$('svg path#path_message').css('transition', 'fill 1s ease');
						setTimeout(() => {
							$('svg path#path_message').css('fill', '#4f41c1');
							setTimeout(() => {
								$('.message').addClass('fadeInUp');
							}, 1000)
						}, 200)
					}
				})
				isMessage = 1;
			}
		}
		if(elScroll == windowOffset){
			$('.alert').animate({bottom: "0"},500);
		}
		if(isIframe == 0){
			if(elScroll2 < (windowOffset + 400)){
				var room = document.getElementById('room');
				room.src = room.dataset.src;
				isIframe = 1;
			}
		}
	})

 	$('.btn-gift').click(function(){
 		$('html, body').animate({ scrollTop: $('.container-fluid.page3').offset().top }, 1000);
 		$('.alert').css('display','none');
 		$('.alert').animate({bottom:'-70px'}, 500);
 		$('body,html').css('overflow-y', 'hidden');
 		var myscript = document.createElement('script'),
 			ct_cv = document.getElementById('cv');
		myscript.setAttribute('src', './js/heart.js');
		myscript.setAttribute('id', 'scriptHeart');
		document.body.appendChild(myscript);
		ct_cv.innerHTML = '<canvas id="heart"></canvas>';
 		setTimeout(() => {
 			var cv = document.querySelector('canvas#heart');
	 		$('canvas#heart').animate({opacity: '1'}, 1000);
	 		setTimeout(() => {
	 			$('canvas#heart').animate({opacity: '0'}, 1000);
		 		setTimeout(() => {
		 			ct_cv.innerHTML = '';
		 			$('.alert').css('display','block');
		 			$('.alert').animate({bottom:'0'}, 1000);
		 			$('body,html').css('overflow-y', 'auto');
		 			$('#scriptHeart').remove();
		 		}, 1500)
	 		}, 20000)
 		}, 100);
 	})

 	$('.close-mess').click(() => $('.alert').animate({bottom:'-70px'}, 500))

 	// Button Scroll Up
	$('button#getup1').click(() => $('html, body').animate({ scrollTop: 0 }, 2000));
	$('button#getup3').click(() => $('html, body').animate({ scrollTop: $('.container-fluid.page2').offset().top }, 2000));
	$('button#getup4').click(() => $('html, body').animate({ scrollTop: $('.container-fluid.page4').offset().top }, 2000));

 	// Button Scroll Down
 	$('button#getdown1').click(() => $('html, body').animate({ scrollTop: $('.container-fluid.page2').offset().top }, 2000));
	$('button#getdown2').click(() => $('html, body').animate({ scrollTop: $('.container-fluid.page4').offset().top }, 2000));
	$('button#getdown3').click(() => $('html, body').animate({ scrollTop: $('.container-fluid.page3').offset().top }, 2000));
});
