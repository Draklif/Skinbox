console.log(window.outerWidth);
console.log(window.outerHeight);
if (window.outerWidth >= 1024) {

    TweenMax.from('.navbar', 1, {
        delay: 1,
        x: -40,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.to(".stripe", 2.4, {
        delay: 0,
        width: 4000,
        ease: Expo.easeInOut
    })

    TweenMax.from(".header", 2, {
        delay: 1.8,
        x: -600,
        ease: Circ.easeInOut
    })

    TweenMax.from(".main .skinbox", 1, {
        delay: 3.3,
        opacity: 0,
        y: 40,
        ease: Circ.easeInOut
    })

    TweenMax.from(".main .para", 1.2, {
        delay: 3.9,
        opacity: 0,
        y: 40,
        ease: Circ.easeInOut
    })

    TweenMax.from(".media ul li", 2, {
        delay: 5,
        opacity: 0,
        x: -40,
        ease: Circ.easeInOut
    })

    TweenMax.staggerFrom(".card", 0.5, {
        delay: 5.2,
        opacity: 0,
        y: 100,
        ease: Expo.easeInOut
    }, 0.1);

    TweenMax.from(".canvas", 0.5, {
        delay: 2.5,
        opacity: 0,
        y: 75,
        ease: Expo.easeInOut
    })
} else {
}