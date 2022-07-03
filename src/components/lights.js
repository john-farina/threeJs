import { DirectionalLight } from 'three';

function createLights() {
    const light = new DirectionalLight('white', 8);

    light.position.set(5, 5, 5);

    return light;
}

export { createLights };
