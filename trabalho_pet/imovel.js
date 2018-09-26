class Imovel {
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco.toFixed(2);
    }

    imprime(){
        return "O imovel localizado na "+ this.nome + " está custando R$"+this.preco+".";
    }
}

class ImovelVelho extends Imovel{
    // constructor(nome, preco){
    //     super(nome, preco);
    //     this.preco =(preco * 0.8).toFixed(2);
    // }

    imprime(){
        this.preco *= 0.8;
        return "O imovel localizado na "+ this.nome + " está custando R$"+this.preco.toFixed(2)+".";
    }
}

class ImovelNovo extends Imovel{
    imprime(){
        this.preco *= 1.2;
        return "O imovel localizado na "+ this.nome + " está custando R$"+this.preco.toFixed(2)+".";
    }
}



//
// let casa = new Imovel("Rua Riachuelo, 1232", 450000.00);
//
// console.log(casa.imprime())

let casaNova = new ImovelNovo("Rua Xavier, 123", 100000.00);
let casaVelha = new ImovelVelho("Rua Xavier, 233", 100000.00);
console.log(casaNova.imprime())
console.log(casaVelha.imprime());
