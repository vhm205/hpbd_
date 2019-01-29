! function(t) {
    "use strict";
    var img = document.getElementsByTagName('img'),
        icon = document.getElementsByClassName('icon-volume')[0],
        audio = document.getElementById('audio'),
        lenImg = img.length,
        isOpenVd = 1;
    for (var index = 0; index < lenImg; index++) {
        if(img[index].getAttribute('alt') == "www.000webhost.com")
            img[index].style.display = 'none';
    }

    document.getElementsByClassName('btn--volume')[0].addEventListener('click', function(){
        if(icon.classList.item(2) == 'fa-volume-up'){
            icon.classList.remove('fa-volume-up');
            icon.classList.add('fa-volume-mute');
            audio.pause();
        }else{
            icon.classList.remove('fa-volume-mute');
            icon.classList.add('fa-volume-up');
            audio.play();
        }
    })
    document.getElementById('a-video').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementsByClassName('modal')[0].classList.add('open');
        if(icon.classList.item(2) == 'fa-volume-up'){
            icon.classList.remove('fa-volume-up');
            icon.classList.add('fa-volume-mute');
            audio.pause();
        }
        if(isOpenVd){
            isOpenVd = 0;
            var video = document.getElementById('vd-src');
            video.src = video.dataset.src;
            document.querySelector('#video video').load();
        }
    });
    document.getElementsByClassName('btn-save')[0].addEventListener('click', function(){
        window.open('../images/TM/HappyBirthdayToMy.mp4', '_blank');
    });
    var btn_close = document.querySelectorAll('.btn-close'),
        btn_len = btn_close.length;
    for (var i = 0; i < btn_len; i++) {
        btn_close[i].addEventListener('click', function(){
            document.getElementsByClassName('modal')[0].classList.remove('open');
            document.getElementsByClassName('modal')[0].classList.add('fade');
            document.querySelector('#video video').load();
            if(icon.classList.item(2) != 'fa-volume-up'){
                icon.classList.remove('fa-volume-mute');
                icon.classList.add('fa-volume-up');
                audio.play();
            }
        })
    }

    document.getElementById('a-tym').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('contain-bg-heart').innerHTML = '<div class="bg_heart"></div>';
        var love = setInterval(function() {
            var r_num = Math.floor(Math.random() * 40) + 1;
            var r_size = Math.floor(Math.random() * 65) + 10;
            var r_left = Math.floor(Math.random() * 100) + 1;
            var r_bg = Math.floor(Math.random() * 25) + 100;
            var r_time = Math.floor(Math.random() * 5) + 5;

            $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");
            $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

            $('.heart').each(function() {
                var top = $(this).css("top").replace(/[^-\d\.]/g, '');
                var width = $(this).css("width").replace(/[^-\d\.]/g, '');
                if (top <= -100 || width >= 150) {
                    $(this).detach();
                }
            });
            setTimeout(() => {
                clearInterval(love);
            }, 5000)
        }, 500);
    });
   

    var e = {};
    e.loader = document.querySelector(".overlay--loader"), e.scroller = document.querySelector(".container > .scroller"), e.rooms = [].slice.call(e.scroller.querySelectorAll(".room")), e.content = document.querySelector(".content"), e.nav = {
        leftCtrl: e.content.querySelector("nav > .btn--nav-left"),
        rightCtrl: e.content.querySelector("nav > .btn--nav-right")
    }, e.slides = [].slice.call(e.content.querySelectorAll(".slides > .slide")), e.infoCtrl = e.content.querySelector(".btn--info"), e.infoOverlay = e.content.querySelector(".overlay--info"), e.infoText = e.infoOverlay.querySelector(".info");
    var n, r, a = 0,
        o = e.rooms.length,
        i = {
            translateX: 0,
            translateY: 0,
            translateZ: "500px",
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        },
        s = {
            translateX: 0,
            translateY: 0,
            translateZ: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        },
        l = {
            translateX: 0,
            translateY: "150%",
            translateZ: 0,
            rotateX: "15deg",
            rotateY: 0,
            rotateZ: 0
        },
        c = (l = {
            translateX: 0,
            translateY: "50%",
            translateZ: 0,
            rotateX: "-10deg",
            rotateY: 0,
            rotateZ: 0
        }, {
            translateX: 0,
            translateY: 0,
            translateZ: "200px",
            rotateX: "2deg",
            rotateY: 0,
            rotateZ: "4deg"
        }),
        u = {
            speed: "0.9s",
            easing: "ease"
        },
        m = {
            speed: "0.4s",
            easing: "ease"
        },
        d = {
            speed: "1.5s",
            easing: "cubic-bezier(0.2,1,0.3,1)"
        },
        f = {
            speed: "15s",
            easing: "cubic-bezier(0.3,1,0.3,1)"
        },
        v = {
            speed: "0.2s",
            easing: "ease-out"
        },
        y = !1,
        g = {
            rotateX: 1,
            rotateY: -3
        },
        p = function(t, e) {
            var n = function(t) {
                this.removeEventListener("transitionend", n), e && "function" == typeof e && e.call()
            };
            t.addEventListener("transitionend", n)
        },
        Y = {
            width: t.innerWidth,
            height: t.innerHeight
        };

    function X() {
        Z({
                transition: u,
                transform: i
            }).then(function() {
                h()
            }), x(100),
            function() {
                var n = (r = function() {
                    Y = {
                        width: t.innerWidth,
                        height: t.innerHeight
                    }
                }, a = 10, function() {
                    var t = this,
                        e = arguments,
                        n = o && !s;
                    clearTimeout(s), s = setTimeout(function() {
                        s = null, o || r.apply(t, e)
                    }, a), n && r.apply(t, e)
                });
                var r, a, o, s;
                document.addEventListener("mousemove", function(e) {
                    requestAnimationFrame(function() {
                        if (!y) return !1;
                        var n = function(e) {
                                var n = 0,
                                    r = 0;
                                e || (e = t.event);
                                return e.pageX || e.pageY ? (n = e.pageX, r = e.pageY) : (e.clientX || e.clientY) && (n = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, r = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
                                    x: n,
                                    y: r
                                }
                            }(e),
                            r = g.rotateX ? i.rotateX - (2 * g.rotateX / Y.height * n.y - g.rotateX) : 0,
                            a = g.rotateY ? i.rotateY - (2 * g.rotateY / Y.width * n.x - g.rotateY) : 0;
                        b({
                            translateX: i.translateX,
                            translateY: i.translateY,
                            translateZ: i.translateZ,
                            rotateX: r + "deg",
                            rotateY: a + "deg",
                            rotateZ: i.rotateZ
                        })
                    })
                }), t.addEventListener("resize", n);
                e.nav.leftCtrl.addEventListener("click", function() {
                    C("prev")
                }), e.nav.rightCtrl.addEventListener("click", function() {
                    C("next")
                }), e.infoCtrl.addEventListener("click", _)
            }()
    }

    function h() {
        q(v), y = !0
    }

    function L() {
        y = !1
    }

    function Z(t) {
        return new Promise(function(r, a) {
            if (n && !t.stopTransition) return !1;
            if (n = !0, t.transition && q(t.transition), t.transform) {
                b(t.transform);
                p(e.scroller, function() {
                    n = !1, r()
                })
            } else r()
        })
    }

    function b(t) {
        e.scroller.style.transform = "translate3d(" + t.translateX + ", " + t.translateY + ", " + t.translateZ + ") rotate3d(1,0,0," + t.rotateX + ") rotate3d(0,1,0," + t.rotateY + ") rotate3d(0,0,1," + t.rotateZ + ")"
    }

    function q(t) {
        e.scroller.style.transition = "none" === t ? t : "transform " + t.speed + " " + t.easing
    }

    function S(t, n) {
        var r = e.slides[a],
            o = r.querySelector(".slide__name"),
            i = r.querySelector(".slide__title"),
            s = r.querySelector(".slide__date");
        n = void 0 !== n ? n : 0, anime.remove([o, i, s]);
        var l = {
            targets: [o, i, s],
            duration: 400,
            delay: function(t, e, r) {
                return n + 75 + 75 * e
            },
            easing: [.25, .1, .25, 1],
            opacity: {
                value: "in" === t ? [0, 1] : [1, 0],
                duration: "in" === t ? 550 : 250
            },
            translateY: function(e, n) {
                return "in" === t ? [150, 0] : [0, -150]
            }
        };
        "in" === t ? l.begin = function() {
            r.classList.add("slide--current")
        } : l.complete = function() {
            r.classList.remove("slide--current")
        }, anime(l)
    }

    function x(t) {
        S("in", t)
    }

    function O(t) {
        S("out", t)
    }

    function C(t) {
        if (n || r) return !1;
        r = !0;
        var l = e.rooms[a];
        L(), O(), a = "next" === t ? a < o - 1 ? a + 1 : 0 : a > 0 ? a - 1 : o - 1;
        var c = e.rooms[a];
        c.style.transform = "translate3d(" + ("next" === t ? 100 : -100) + "%,0,0) translate3d(" + ("next" === t ? 1 : -1) + "px,0,0)", c.style.opacity = 1, Z({
            transition: m,
            transform: s
        }).then(function() {
            return Z({
                transform: {
                    translateX: ("next" === t ? -100 : 100) + "%",
                    translateY: 0,
                    translateZ: 0,
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0
                }
            })
        }).then(function() {
            return c.classList.add("room--current"), l.classList.remove("room--current"), l.style.opacity = 0, x(), Z({
                transform: {
                    translateX: ("next" === t ? -100 : 100) + "%",
                    translateY: 0,
                    translateZ: "500px",
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0
                }
            })
        }).then(function() {
            q("none"), c.style.transform = "translate3d(0,0,0)", b(i), setTimeout(function() {
                h()
            }, 60), r = !1
        })
    }

    function _() {
        if (r) return !1;
        e.infoCtrl.classList.contains("btn--active") ? function() {
            e.infoCtrl.classList.remove("btn--active"), q(m), x(100), Z({
                transform: i,
                stopTransition: !0
            }).then(function() {
                h()
            });
            var t = e.rooms[a].querySelectorAll(".room__img");
            anime.remove(t), anime({
                targets: t,
                duration: 400,
                easing: [.3, 1, .3, 1],
                translateY: 0,
                rotateX: 0,
                rotateZ: 0,
                translateZ: 10
            }), anime.remove([e.infoOverlay, e.infoText]);
            var n = {
                targets: [e.infoOverlay, e.infoText],
                duration: 400,
                easing: [.25, .1, .25, 1],
                opacity: [1, 0],
                translateY: function(t, e) {
                    return e ? [0, 30] : 0
                },
                complete: function() {
                    e.infoOverlay.classList.remove("overlay--active")
                }
            };
            anime(n)
        }() : function() {
            e.infoCtrl.classList.add("btn--active"), L(), O(), q(f), Z({
                transform: c,
                stopTransition: !0
            });
            var t = e.rooms[a].querySelectorAll(".room__img");
            anime.remove(t), anime({
                targets: t,
                duration: function() {
                    return anime.random(15e3, 3e4)
                },
                easing: [.3, 1, .3, 1],
                translateY: function() {
                    return anime.random(-50, 50)
                },
                rotateX: function() {
                    return anime.random(-2, 2)
                },
                rotateZ: function() {
                    return anime.random(-5, 5)
                },
                translateZ: function() {
                    return [10, anime.random(50, Y.width / 3)]
                }
            }), anime.remove([e.infoOverlay, e.infoText]);
            var n = {
                targets: [e.infoOverlay, e.infoText],
                duration: 1500,
                delay: function(t, e) {
                    return e ? 150 : 0
                },
                easing: [.25, .1, .25, 1],
                opacity: [0, 1],
                translateY: function(t, e) {
                    return e ? [30, 0] : 0
                },
                begin: function() {
                    e.infoOverlay.classList.add("overlay--active")
                }
            };
            anime(n)
        }()
    }
    imagesLoaded(e.scroller, function() {
        anime({
            targets: e.loader,
            duration: 600,
            easing: "easeInOutCubic",
            delay: 1e3,
            translateY: "-100%",
            begin: function() {
                X()
            },
            complete: function() {
                e.loader.classList.remove("overlay--active")
            }
        })
    })
}(window);	