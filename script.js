import * as THREE from 'three';

console.log(window.outerWidth);
console.log(window.outerHeight);
if (window.outerWidth >= 1024) {
    const canvas = document.getElementById('canvas')
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xc0342f }))

    scene.background = new THREE.Color(0xf4f2ec)
    scene.add(cube)

    camera.position.z = 5;  

    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize( 500, 500 );
    renderer.render(scene, camera)

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera)
    }
    animate()

    TweenMax.from('.navbar', 1, {
        delay: 1,
        x: -40,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.to(".stripe", 2.4, {
        delay: 0,
        width: "100%",
        ease: Expo.easeInOut
    })

    TweenMax.from(".header", 2, {
        delay: 1.8,
        x: -600,
        ease: Circ.easeInOut
    })

    TweenMax.from(".text h2", 1, {
        delay: 3.3,
        opacity: 0,
        y: 40,
        ease: Circ.easeInOut
    })

    TweenMax.from(".text .para", 1.2, {
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