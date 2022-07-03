import {
    BoxBufferGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from 'three';

const container = document.querySelector('#scene-container');

//create a Scene
const scene = new Scene();
scene.background = new Color('purple'); //bcgColor duh
console.log(scene.background);

//create a Camera
const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; //the near clipping plane
const far = 100; //the far clipping plane
const camera = new PerspectiveCamera(fov, aspect, near, far);
// every object is initially created at ( 0, 0, 0 )
// move  camera back so we can view the scene
camera.position.set(0, 0, 10);

const geometry = new BoxBufferGeometry(2, 2, 2);
const material = new MeshBasicMaterial();
const cube = new Mesh(geometry, material);
scene.add(cube);

//create renderer
const renderer = new WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

//create the canvas
container.append(renderer.domElement);
//finally render the canvas
renderer.render(scene, camera);
