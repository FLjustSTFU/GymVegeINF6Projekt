import * as THREE from 'three';
import { GLTFLoader, ThreeMFLoader } from 'three/examples/jsm/Addons.js';
import { select } from 'three/tsl';

//camera
const camera = new THREE.PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
);

camera.position.z = 13;
camera.position.y = 0;



const scene = new THREE.Scene();

let GBCartridge;

const loader = new GLTFLoader();

loader.load('./assets/GBCartridge.glb',
    function (gltf) {
        GBCartridge = gltf.scene;

        //scale of the model 
        GBCartridge.scale.x = 0.25;
        GBCartridge.scale.y = 0.25;
        GBCartridge.scale.z = 0.25;

        //rotation of model (ich werde fauler)
        //GBCartridge.rotation.y = 45;
        GBCartridge.rotation.x = 0.25;


        
        //add to scene
        scene.add(GBCartridge);

    },
    function (xhr) {},
    function (error) {}
 );

 //center object

const co = new THREE.Object3D(0, 0, 0);
scene.add(co);

//camera.lookAt(new THREE.Vector3(co.x, co.y, co.z));



 //light
 const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
scene.add(ambientLight);

const lightLeft = new THREE.DirectionalLight(0x2F236C, 5);
lightLeft.position.set(camera.position.x-2, camera.position.y+0.6, camera.position.z);
scene.add(lightLeft);
lightLeft.lookAt(new THREE.Vector3(co.x, co.y, co.z));




 //render
 const renderer = new THREE.WebGLRenderer({alpha: true});
 renderer.setSize(window.innerWidth, window.innerHeight);
 document.getElementById('fllogoxd').appendChild(renderer.domElement);

//up and down (hoffentlich)
let time = 0;
const amplitude = 0.1;
const speed = 1;

function onWindowResize() {
    // parent dimensions
    const container = document.getElementById('fllogoxd');
    const width = container.clientWidth;
    const height = container.clientHeight;

    // camera edit with parent proportions
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    
    renderer.setSize(width, height);

    //ratio bidde behalten
    renderer.setPixelRatio(window.devicePixelRatio);
}

//function ausführen
onWindowResize();

window.addEventListener('resize', onWindowResize);



 const reRender3D = () => {
    requestAnimationFrame(reRender3D);

    //up and down
    time += 0.016 * speed;
    const yPos = Math.sin(time) * amplitude;
    GBCartridge.position.y = yPos;


    //rotate
    GBCartridge.rotation.y += 0.005;

    //render
    renderer.render(scene, camera);
 };
 reRender3D();


 // Fürs infprojekt 
 // dieser Code stammt aus einem alten Projekt von mir und hat daher vielleicht ein paar komische Kommentare