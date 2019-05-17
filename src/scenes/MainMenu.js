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
        this.load.image("title_bg",'assets/MenuBG.jpg')
    }
    create(){
        //  The score
        this.add.image(0,0,'title_bg').setOrigin(0,0)
        this.scoreText = this.add.text(300, 16, 'Главное меню', { fontSize: '32px', fill: '#fff' })
    }
}