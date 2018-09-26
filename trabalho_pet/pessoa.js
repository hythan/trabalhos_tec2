class Pessoa {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rica extends Pessoa{
    constructor(name, age, money){
        super(name,age );
        this.money = money;
    }

    fazCompras(){
        return this.name + ' faz compras!';
    }
}

class Pobre extends Pessoa{

    trabalha(){
        return this.name + ' trabalha!';
    }
}

class Miseravel extends Pessoa{

    mendiga(){
        return this.name + ' mendiga!';
    }
}

let rico = new Rica('João', 25, 1000000000);
let pobre = new Pobre('Francisleidy', 30);
let miseravel = new Miseravel('Maikitaiçon', 20);

console.log(rico.fazCompras());
console.log(pobre.trabalha());
console.log(miseravel.mendiga());





