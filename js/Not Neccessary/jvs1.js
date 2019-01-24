$(document).ready(function(){
	'use stricts';

	var l = document.getElementsByClassName('letter')[0],
		icon = document.getElementsByClassName('material-icons')[0],
		audio = document.getElementById('audio-typing'),
		welcome = document.getElementsByClassName('welcome')[0],
		img = document.getElementsByTagName('img'),
		lenImg = img.length;

	for (var index = 0; index < lenImg; index++) {
		if(img[index].getAttribute('alt') == "www.000webhost.com")
		{
			img[index].style.display = 'none';
		}
	}

	setTimeout(function(){
		// Ẩn Screen Loading
		welcome.style.opacity = '0';
		$('.img').addClass('bounceInDown');
		setTimeout(() => {
			welcome.style.display = 'none';
			audio.play();
			// Gõ dòng đầu tiền
			var typed = new Typed('.typing', {
			  	strings: ["Chào cậu! cô gái 18..."],
				typeSpeed: 50,
				backSpeed: 100,
				smartBackspace: true,
				onComplete: (self) => {
					audio.pause();
				}
			});

			// Sau 3s Gõ dòng 2
			setTimeout(() => {
				document.querySelector('.text span:nth-child(2)').style.display = 'none';
				audio.play();
				var typed = new Typed('.typing2', {
				  	strings: ["Tớ có một vài lời chúc mừng sinh nhật cậu... 🎁"],
					typeSpeed: 50,
					backSpeed: 100,
					smartBackspace: true,
					startDelay: 50,
					onComplete: (self) => {
						audio.pause();
					}
				});

				// $('span.typing2').append('<img style="width: 30px" src="./images/cake/cake1.gif />"');


				// Sau 5s Gõ dòng 3
				setTimeout(() => {
					document.querySelector('.text span:nth-child(4)').nextElementSibling.style.display = 'none';
					audio.play();
					var typed = new Typed('.typing3', {
					  	strings: ["Nhấn vào lá thư để đọc nhé..."],
						typeSpeed: 50,
						backSpeed: 100,
						smartBackspace: true,
						startDelay: 50,
						onComplete: (self) => {
							audio.pause();
						}
					});

					// Sau 2.5s hiện lá thư
					setTimeout(() => {
						l.style.opacity = '1';
						l.classList.add('bounce');
					}, 2500)
				}, 5000)
			}, 3000)
		}, 1000);
	}, 1500);

	// Thêm hiệu ứng cho lá thư khi hover và leave
	icon.addEventListener('mouseover', function(){
		l.classList.add('tada');
	});
	icon.addEventListener('mouseleave', function(){
		l.classList.remove('tada');
	});


	// Thêm sự kiện click cho lá thư
	l.addEventListener('click', function(){
		welcome.style.display = 'block';
		welcome.style.opacity = '1';
		setTimeout(() => {
			location.assign('../index2.html');
		}, 2000)
	})
});