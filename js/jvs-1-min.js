$(document).ready(function() {
    'use stricts';
    var l = document.getElementsByClassName('letter')[0],
        icon = document.getElementsByClassName('material-icons')[0],
        welcome = document.getElementsByClassName('welcome')[0],
        img = document.getElementsByTagName('img'),
        lenImg = img.length;
    for (var index = 0; index < lenImg; index++) {
        if (img[index].getAttribute('alt') == "www.000webhost.com") {
            img[index].style.display = 'none';
            break;
        }
    }
    function playAudio(id){
        document.getElementById(id).play();
    }
    function pauseAudio(id){
        document.getElementById(id).pause();
    }
    setTimeout(function() {
        welcome.style.opacity = '0';
        $('.img').addClass('bounceInDown');
        setTimeout(() => {
            welcome.style.display = 'none';
            playAudio('audio-typing');
            var typed = new Typed('.typing', {
                strings: ["Chào cậu! cô gái 18..."],
                typeSpeed: 50,
                backSpeed: 100,
                smartBackspace: !0,
                onComplete: (self) => {
                    pauseAudio('audio-typing');
                }
            });
            setTimeout(() => {
                document.querySelector('.text span:nth-child(2)').style.display = 'none';
                playAudio('audio-typing');
                var typed = new Typed('.typing2', {
                    strings: ["Tớ có món quà muốn tặng cậu..."],
                    typeSpeed: 50,
                    backSpeed: 100,
                    smartBackspace: !0,
                    startDelay: 50,
                    onComplete: (self) => {
                        pauseAudio('audio-typing');
                    }
                });
                setTimeout(() => {
                    document.querySelector('.text span:nth-child(4)').nextElementSibling.style.display = 'none';
                    playAudio('audio-typing');
                    var typed = new Typed('.typing3', {
                        strings: ["Nhấn vào lá thư để xem nhé..."],
                        typeSpeed: 50,
                        backSpeed: 100,
                        smartBackspace: !0,
                        startDelay: 50,
                        onComplete: (self) => {
                            pauseAudio('audio-typing');
                        }
                    });
                    setTimeout(() => {
                        l.style.opacity = '1';
                        l.classList.add('bounce')
                    }, 2500)
                }, 5000)
            }, 3000)
        }, 1000)
    }, 1500);
    icon.addEventListener('mouseover', function() {
        l.classList.add('tada')
    });
    icon.addEventListener('mouseleave', function() {
        l.classList.remove('tada')
    });
    l.addEventListener('click', function() {
        welcome.style.display = 'block';
        welcome.style.opacity = '1';
        setTimeout(() => {
            location.assign('../Happy-Birthday-To-My')
        }, 2000)
    })
})