// import * as THREE from 'https://unpkg.com';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
import * as THREE from 'three';

// Criar Cena
const scene = new THREE.Scene();

//Cria a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Criar o renderizador
const render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(render.domElement);

// Criar o Objeto
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Posicionamento da camera 
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x = 0.01;
    cube.rotation.y = 0.01;

    render.render(scene, camera);
}

//Processar animação
animate();

// Processar na tela
window.addEventListener('resize', () => {
    camera.aspect = window.innerHeight / window.innerHeight;
    camera.updateProjectionMatrix();
    render.setSize(window.innerHeight, window.innerHeight);
});