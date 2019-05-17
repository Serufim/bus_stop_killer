export  default class MainMenu extends Phaser.Scene {
    constructor(test){
        super({
            key: 'TitleScene'
        })
        this.scoreText = null
        this.playText = null
        this.noPlayText = null
    }
    preload(){
        this.load.image("")
    }
    create(){
        //  The score
        this.scoreText = this.add.text(300, 16, 'Главное меню', { fontSize: '32px', fill: '#fff' })
    }
}