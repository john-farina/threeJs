import { World } from './World';

function main() {
    const container = document.querySelector('#scene-container');

    //create new instance of world
    const world = new World(container);

    // render scene
    world.render();
}

main();
