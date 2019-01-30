$(document).ready(function(){
	'use stricts';
	var img = document.getElementsByTagName('img'),
		lenImg = img.length;
	for (var index = 0; index < lenImg; index++) {
		if(img[index].getAttribute('alt') == "www.000webhost.com")
			img[index].style.display = 'none';
	}

	new WOW().init();
	$('#ballon_border').animate({bottom:'10000px'},50000)

	setTimeout(() => {
		// Drop Table
		anime({
			targets: 'img#table',
			top: [-300, -30],
			duration: 4500
		});

		anime({
			targets: 'img#co',
			top: [-300,0],
			rotate: [180,-30],
			duration: 2000,
			complete: (e) => {
				anime({
					targets:'img.my',
					rotate: '1turn',
					duration: 3000
				})
				$('.my').animate({opacity: '1'}, 2000);
				$('.contain-first .ballon:nth-child(1)').addClass('fadeInLeft');
				$('.contain-first .ballon:nth-child(3)').addClass('fadeInRight');
				setTimeout(()=>{
					$('.contain-first .ballon:nth-child(1)').removeClass('fadeInLeft').css('opacity','1');
					$('.contain-first .ballon:nth-child(3)').removeClass('fadeInRight').css('opacity','1');
					$('.cake').addClass('fadeInUp');
					anime({
						targets:'.contain-first .ballon',
						rotate: [-10, 10],
						duration: 1000,
						direction: 'alternate',
						easing: 'linear',
						loop: true
					})
				}, 500)
			}
		})

		// Drop Button Down
	 	anime({
	 		targets: '#getdown1',
	 		opacity: [0, 1],
	 		translateY: [-50, 0],
	 		duration: 2000,
	 		loop: true
	 	})

	 	// Rotate Image HBPD
	 	setTimeout(()=>{
			anime({
				targets: 'img#table',
				rotate: [5, -5],
				duration: 1000,
				direction: 'alternate',
				easing: 'linear',
				loop: true
			})
		}, 2000)
	 }, 8000)

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

	$('.toggle').on({
		mouseleave: function(){
			$(this).animate({left:'-70px'},500)
		},
		mouseover: function(){
			$(this).animate({left:'-10px'},500)
		},
		click: function(){
			$('#toggle').toggleClass('on');
			if(!$('#toggle').hasClass('on')){
				$('.fireworks').css('z-index','-1');
			}else{
				$('.fireworks').css('z-index','1');
				Swal.fire({
					type: 'info',
					title: 'Click To Shot!!',
					showConfirmButton: false,
					timer: 2000,
					animation: false,
					customClass: 'animated zoomIn'
				})
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
