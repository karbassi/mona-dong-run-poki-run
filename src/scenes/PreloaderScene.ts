

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader');
  }

  preload() {
    this.load.image('start-background', 'assets/img/start-page.png');
    this.load.image('deadline-select', 'assets/img/deadline-select.png');
    this.load.image('background', 'assets/img/background.png');
    this.load.image('start-btn', 'assets/img/start-btn.png');
    this.load.image('platform', 'assets/img/ground.png');
    this.load.image('spike-behind', 'assets/img/spike-behind.png');
    this.load.image('layer-meme', 'assets/img/layer-meme.png');
    this.load.image('life', 'assets/img/life-indicator.png');
    this.load.spritesheet('poki', 'assets/img/poki.png', {
      frameWidth: 86,
      frameHeight: 64,
    });
    this.load.spritesheet('spike-single', 'assets/img/spike-single.png', {
      frameWidth: 30,
      frameHeight: 40,
    });
    this.load.spritesheet('spike-double', 'assets/img/spike-double.png', {
      frameWidth: 60,
      frameHeight: 40,
    });
  }

  create() {
    this.scene.start('gamestart');
  }
}
