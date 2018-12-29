export class LoadScene extends Phaser.Scene {
    constructor () {
        super({
            key: "LOAD"
        });
    }

    preload () {
        this.load.image("scissors", "../assets/scissors.png");
        this.load.image("rock", "../assets/rock.png");
        this.load.image("paper", "../assets/paper.png");
        this.load.image("heart", "../assets/heart.jpeg");
        this.load.image("black-heart", "../assets/black-heart.jpg");
        this.load.on("complete", () => {
            console.log("done");
        })
    }

    create () {
        this.scene.add("MENU", MenuScene, false);
        this.scene.start("MENU", "yo this is some sample text");
    }

    init () {
        
    }
}


export class MenuScene extends Phaser.Scene {
    constructor () {
        super({
            key: "MENU"
        });
    }

    preload () {

    }

    create () {
        this.add.text(this.game.config.width/3, this.game.config.height/3, "Rock Paper Scissors");

    }

    init (data) {
        console.log("I got some data: " + data);
    }
}