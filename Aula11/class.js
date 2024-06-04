class Celular {
    constructor(Modelo, Marca, Ano) {
        this.Modelo = Modelo;
        this.Marca = Marca;
        this.Ano = Ano;
    }
    desbloquearCelular() {
        return 'Celular Desbloqueado'
    }
    efetuarLigacao() {
        return 'Efetuar Ligação'
    }
}

class CelularGamer extends Celular {
    constructor(Marca, Modelo, Ano, Ram, Cooler) {
        super(Marca, Modelo, Ano);
        this.Ram = Ram;
        this.Cooler = Cooler;

    }
    ligargamerBooster() {
        console.log('Otminizar o Jogo');
    }

}


// let Kimberly = new Celular('Samsung', 'A32', 2022)
// console.log(typeof Kimberly);
// console.log(Kimberly.Modelo);


// let Mari = new Celular('Iphone-11', 'Apple', 2019)
// console.log(typeof Mari);
// console.log(Mari.Ano);

// let Ana = new Celular('Iphone-11', 'Apple', 2019)
// console.log(typeof Ana);
// console.log(Ana.Marca);