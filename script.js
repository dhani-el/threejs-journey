import * as THREE from "three";
import gsap from "gsap"

const canvas = document.querySelector("canvas.webgl");
const scene  = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:"red"})
const hubject  = new THREE.Mesh(geometry,material);

scene.add(hubject);
const sizes  = {
    width:800,
    height:600
}
const camera  = new THREE.PerspectiveCamera(75,sizes.width/sizes.height);
camera.position.z = 3;
scene.add(camera);
const renderer = new THREE.WebGLRenderer({
    canvas:canvas,
});
renderer.setSize(sizes.width,sizes.height);
renderer.render(scene,camera);

// let referenceTime = Date.now();

// const clock = new THREE.Clock();
gsap.to(hubject.rotation,{duration:1,delay:1,x:3,y:2});
gsap.to(hubject.rotation,{duration:1,delay:1.95,x:0,y:0});

const tick = ()=>{
    // const elapsedTime = clock.getElapsedTime();

    // const currentTime = Date.now();
    // const deltaTime = currentTime - referenceTime;
    // referenceTime = currentTime;

    
    // hubject.rotation.y = Math.sin(elapsedTime);
    // hubject.rotation.x = Math.cos(elapsedTime);  
    
    renderer.render(scene,camera);
    window.requestAnimationFrame(tick)
}

// tick();