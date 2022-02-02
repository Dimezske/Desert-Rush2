import groundSandBrokenImg from '../assets/ground_sand_broken.png';
import backgroundImg from '../assets/desert-background.png';
import logoImg from '../assets/logo.png';
import characterSheet from '../assets/characterSheet.png'
import makeAnimations from '../helpers/animations';
class BootScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootScene'
        });
    }
    preload() {
        this.load.image('background', backgroundImg);
        this.load.image('logo', logoImg);
        this.load.image('platform', groundSandBrokenImg)
        //this.scene.add('Game');   * getting problem with this
     }
     create(){
         // starting scene for loading
        const background = this.add.image(1450/2, 775/2, 'background');
		background.setScale(Math.max(1450 / background.width, 775 / background.height))
        .setScrollFactor(1, 0);

		const logo = this.add.image(650, 150, 'logo');
		
        this.tweens.add({
            targets: logo,
            y: 600,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });

        const bootKeys = this.input.keyboard.addKeys({
            'start': Phaser.Input.Keyboard.KeyCodes.ENTER,
            'quit': Phaser.Input.Keyboard.KeyCodes.ESC            /// these should work
        });
        // i want to create a method for when the game assets are loaded goto the game scene and i want a title screen to 
        if (bootKeys['start'].isDown) {
            this.scene.start('Game'); // Not sure if this is working, i used console log but nothing outputted
        }
        else {
               stop;
        }
     }
 }
 export default BootScene;	