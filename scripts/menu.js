class Menu extends Phaser.Scene {
    constructor() {
        super({key: 'Menu'});
    }

    preload() {
        this.load.image('menu', 'assets/images/menu.png');        
    }

    create() {
        this.menuImage = this.add.image(120, 160, 'menu');
        this.startGameText = this.add.text(60, 250, "Press 5 to start", {font: "16px Arial"});

        this.input.keyboard.on('keyup', function (event) {
            // move to next scene
            if (event.key == '5') this.scene.start('Play');
        }, this)
    }
}