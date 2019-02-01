$(document).ready(function(){
	'use stricts';
	var img = document.getElementsByTagName('img'),
		lenImg = img.length;
	for (var index = 0; index < lenImg; index++) {
		if(img[index].getAttribute('alt') == "www.000webhost.com"){
			img[index].style.display = 'none';
			return 0;
		}
	}

	new WOW().init();
	$('.js-tilt').tilt({ scale: 1.2 })
	anime({
		targets: 'img#table',
		top: [-300, -30],
		duration: 4500
	});

	anime({
		targets: 'img#table',
		rotate: [5, -5],
		duration: 1000,
		direction: 'alternate',
		easing: 'linear',
		loop: true
	})

	anime({
		targets: 'img#co',
		top: [-300,0],
		rotate: [180,-30],
		duration: 2000,
		complete: function(e){
			$('.contain-button-question .button-effect:nth-of-type(1)').css('display','block');
			$('.contain-button-question .button-effect:nth-of-type(1)').addClass('fadeInDown');
		}
	})

	anime({
 		targets: '#getdown1',
 		opacity: [0, 1],
 		translateY: [-50, 0],
 		duration: 2000,
 		loop: true
 	})

 	function playAudio(id){
 		document.getElementById(id).play();
 	}
 	function pauseAudio(id){
 		document.getElementById(id).pause();
 	}

	$('.contain-button-question .button-effect:nth-of-type(1)').click(function(){
		$(this).css('display', 'none');
		let ballon_border = document.getElementById('ballon_border');
		ballon_border.src = ballon_border.dataset.src;
		$('#ballon_border').animate({bottom:'5000px'},30000);
		setTimeout(()=>{
			let ballon = document.querySelectorAll('.contain-first .ballon');
			ballon[0].src = ballon[0].dataset.src;
			ballon[1].src = ballon[1].dataset.src;
			$('.contain-first .ballon:nth-child(1)').addClass('fadeInLeft');
			$('.contain-first .ballon:nth-child(3)').addClass('fadeInRight');
			setTimeout(()=>{
				$('.contain-first .ballon:nth-child(1)').removeClass('fadeInLeft').css('opacity','1');
				$('.contain-first .ballon:nth-child(3)').removeClass('fadeInRight').css('opacity','1');
				anime({
					targets:'.contain-first .ballon',
					rotate: [-10, 10],
					duration: 1000,
					direction: 'alternate',
					easing: 'linear',
					loop: true
				})
			}, 4000);
			setTimeout(()=>{
				$('.contain-button-question .button-effect:nth-of-type(2)').css('display','block');
				$('.contain-button-question .button-effect:nth-of-type(2)').addClass('fadeInDown');
			}, 3000)
		}, 7000)
	});
	$('.contain-button-question .button-effect:nth-of-type(2)').click(function(){
		$(this).css('display', 'none');
		let cake = document.querySelector('.contain-important img.cake');
		cake.src = cake.dataset.src;
		$('.cake').addClass('fadeInUp');
		setTimeout(()=>{
			$('.contain-button-question .button-effect:nth-of-type(3)').css('display','block');
			$('.contain-button-question .button-effect:nth-of-type(3)').addClass('fadeInDown');
		}, 2000)
	});
	$('.contain-button-question .button-effect:nth-of-type(3)').click(function(){
		$(this).css('display', 'none');
		let my = document.querySelector('.contain-important img.my');
		my.src = my.dataset.src;
		anime({
			targets:'img.my',
			rotate: '2turn',
			delay: 500,
			duration: 3000
		})
		$('.my').animate({opacity: '1'}, 2000);
		$('#getdown1 i').css('opacity','1');
		setTimeout(()=>{
			Swal.fire({
				type: 'info',
				title: 'Happy Birthday To My',
				showCancelButton: true,
				confirmButtonText: 'Yeah! :)',
				cancelButtonText: 'Sad! :('
			}).then((res) => {
				if(res.value){
					Swal.fire({
						type: 'success',
						title: 'Audio is playing',
						showConfirmButton: false,
						timer: 1500
					})
					playAudio('audio');
				}
			});
			$('.toggle').animate({left:'-10px'},500)
		}, 3000)
	});
	
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
							}, 750)
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
				setTimeout(()=>{
					$('.volume').css('opacity','1')
				}, 2500)
			}
		}
	})

	$('.toggle').on({
		mouseleave: function(){
			$(this).animate({left:'-170px'},500)
		},
		mouseover: function(){
			$(this).animate({left:'-10px'},500)
		},
		click: function(){
			$('#toggle').toggleClass('on');
			if(!$('#toggle').is(':checked')){
				$('.fireworks').css('z-index','-1');
			}else{
				$('.fireworks').css('z-index','5');
				Swal.fire({
					type: 'success',
					title: 'Click To Shot!!',
					showConfirmButton: false,
					timer: 2000,
					animation: false,
					customClass: 'animated zoomInUp'
				})
			}
		}
	})

	$('.icon-volume').click(function(){
		let icon = document.getElementsByClassName('icon-volume')[0];
        if(icon.classList.item(2) == 'fa-volume-up'){
            icon.classList.remove('fa-volume-up');
            icon.classList.add('fa-volume-mute');
            pauseAudio('audio');
        }else{
            icon.classList.remove('fa-volume-mute');
            icon.classList.add('fa-volume-up');
            playAudio('audio');
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
