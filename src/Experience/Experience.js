import * as THREE from 'three';
import Camera from './Camera';
import Time from './Utils/Time';
import Sizes from './Utils/Sizes';
import Renderer from './Renderer';
import World from './World/World';
import Resources from './Utils/Resources';
import sources from './sources';

let instance = null;

export default class Experience {
  constructor(canvas, sizes) {
    if (instance) {
      return instance;
    }
    instance = this;

    //Global access
    window.experience = this;

    // Options
    this.canvas = canvas;

    // Setup
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.resources = new Resources(sources);
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();

    // Resize event listener
    this.sizes.on('resize', () => {
      this.resize();
    });

    // Tick event listener
    this.time.on('tick', () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.renderer.update();
  }
}
