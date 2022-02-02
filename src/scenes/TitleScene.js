// with this title screen i want to load a menu so the user can click and adjust setting  and game saves etc
class TitleScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'TitleScene'
        });
    }
    preload() {
        
        this.load.spritesheet(200,200, 'player', './assets/characterSheet.png')
    }
    create() {
       
    }

    update(time, delta) {
        
    }

    startGame() {
        
    }
       
}

export default TitleScene;
