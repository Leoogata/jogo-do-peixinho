var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixe;
    
    function preload() {
        this.load.image('oceano', 'assets/Background1.jpg') //carregando plano de fundo

        this.load.image('logo', 'assets/Logo_inteli.png') //carregando logo

        this.load.image('peixe', 'assets/peixes/peixe_amarelo.png' ) //carregando peixe que irá seguir o mouse

        this.load.image('peixe_palhaco', 'assets/peixes/peixe_palhaco.png') //carregando peixe palhaço

        this.load.image('peixe_azul', 'assets/peixes/peixe_azul.png')

        this.load.image('peixe_fig', 'assets/peixes/peixe_laranja.png') //carregando novo peixe 

        this.load.image('areia', 'assets/areia.png')//carregando areia

        this.load.image('alga', 'assets/alga.png')
    }

    function create() {
        this.add.image(400, 300, 'oceano')

        this.add.image(450, 300, 'areia').setScale(1.8)

        this.add.image(400, 525, 'logo')

        this.add.image(250, 550, 'alga').setScale(0.2)

        this.add.image(550, 550, 'alga').setScale(0.2)

        this.add.image(650, 500, 'alga').setScale(0.15)

        this.add.image(150, 500, 'alga').setScale(0.15)

        this.add.image(300, 350, 'peixe_palhaco').setScale(0.3)

        this.add.image(600, 200, 'peixe_azul').setScale(0.3)

        this.add.image(475, 540, 'peixe_fig').setScale(0.2).setFlip(true, false);

        peixe = this.add.image(400, 300, 'peixe').setScale(0.5)
        peixe.setFlip(true, false);
    }

    function update() {
        peixe.x = this.input.x; //seguindo mouse na horizontal
        peixe.y = this.input.y; //seguindo mouse na vertical

    }
