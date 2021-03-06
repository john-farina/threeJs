import {
    BoxBufferGeometry,
    Mesh,
    MeshBasicMaterial,
    MeshStandardMaterial,
} from 'three';

function createCube() {
    const geometry = new BoxBufferGeometry(2, 2, 2, 2);
    const material = new MeshStandardMaterial({ color: 'blue' });

    const cube = new Mesh(geometry, material);
    cube.rotation.set(-0.5, -0.1, 0.5);
    return cube;
}

export { createCube };
