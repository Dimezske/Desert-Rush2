import Phaser from 'phaser';

class Platforms extends Phaser.Physics.Arcade.Sprite {
   
    constructor(scene, x, y, platformId) {
      super(scene, x, y);
  
      this.platformBody = scene.add.sprite(0, 0, 'platform', './assets/ground_sand_broken.png');
       
      this.setSize(this.platformBody.width, this.platformBody.height); // DO THIS
      this.add(this.platformBody);
 
    }
    /*
    this.platforms = this.physics.add.staticGroup()

    // then create 5 platforms from the group
    for (let i = 0; i < 5; ++i)
    {
        const x = Phaser.Math.Between(80, 300)
        const y = 100 * i
        const platform = this.platforms.create(x, y, 'platform')
        platform.scale = 0.5
        const body = platform.body
        body.updateFromGameObject()
    } 
    //this.horizontalWrap(this.player)

		const bottomPlatform = this.findBottomMostPlatform()
		if (this.player.y > bottomPlatform.y + 200)
		{
			this.scene.start('game-over')
			this.sound.play('dead')
		}

    findBottomMostPlatform()
	{
		const platforms = this.platforms.getChildren()
		let bottomPlatform = platforms[0]

		for (let i = 1; i < platforms.length; ++i)
		{
			const platform = platforms[i]

			// discard any platforms that are above current
			if (platform.y < bottomPlatform.y)
			{
				continue
			}

			bottomPlatform = platform
		}

		return bottomPlatform
	}
    */           
}