import Experience from '../Experience';
import * as THREE from 'three';
import Environment from './Environment';

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial()
    );

    this.scene.add(this.testMesh);

    //Setup
    this.environment = new Environment();
  }
}
