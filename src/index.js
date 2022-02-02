import Phaser from 'phaser';
//import img from './image.png';
//import logoImg from './assets/logo.png';
import backgroundImg from './assets/desert-background.png';
import groundSandBrokenImg from './assets/ground_sand_broken.png';
//import playerImg from './assets/character-1.png';
import playerSpriteSheet from './assets/characterSheet.png';

//import Player from '../game/Player'
import Platforms from '../src/game/Platforms'
import GameOver from './scenes/GameOver'
import BootScene from './scenes/BootScene';
//import GameScene from './scenes/GameScene';
import TitleScene from './scenes/TitleScene';

class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, Texture){
        super(scene, x, y, 'Texture'); // The frame is optional 
            this.scene.add.existing(this);
            this.playerBody = this.scene.add.sprite(240,320,'./assets/characterSheet.png')
    }
  }
class Game extends Phaser.Scene
{
    constructor ()
    {
        super();
    }
	init() {

	}
    preload() {
        //this.load.scenePlugin('animatedTiles', AnimatedTiles, 'animatedTiles', 'animatedTiles');
        this.load.image('background', backgroundImg);
        this.load.image('logo', logoImg);

        this.load.image('platform', groundSandBrokenImg)
		this.load.image('player', playerImg);
        this.load.image('playersheet', playerSpriteSheet)
    }

    create (data) {
		this.scene.add('Game');
    }
	update(time, delta) {
          
	}
	render() {

	}
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1450,
	height: 775,
    scene: [
        BootScene,
        TitleScene,
        Game,
        GameOver
    ],
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {
				y: 200
			},
			debug: false
		}
	}
};

const game = new Phaser.Game(config);