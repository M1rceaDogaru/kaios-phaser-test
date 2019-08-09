var config = {
    type: Phaser.AUTO,
    width: 240,
    height: 320,
    physics: {
        default: 'arcade'
    },
    scene: [ Menu, Play ]
};

var game = new Phaser.Game(config);