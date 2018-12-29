import {LoadScene} from "./scenes.js";

var config = {
    width: 600,
    height: 400,
    type: Phaser.AUTO,
    title: "Rock Paper Scissors but it sucks",
    version: "0.0.1",
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    },
    scene: [
        LoadScene
    ],
    backgroundColor: "rgba(0, 187, 255, 1)"
};

var game = new Phaser.Game(config);