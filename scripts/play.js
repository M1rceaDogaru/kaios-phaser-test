class Play extends Phaser.Scene {
    constructor() {
        super({key: 'Play'})
    }

    preload() {

    }

    create() {
        this.add.text(20, 160, "This is the game scene", {font: "20px Arial"});
    }
}