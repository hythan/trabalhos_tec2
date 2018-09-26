class Pet {
    constructor(name, age){
        this.name = name;
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    walk(){
        console.log('Um passo por vez '+ this.name);
    }

    get country(){
        return 'Brasil';
    }

    static printFeedBrand(feedBrand){
        console.log('Marca ração: '+ feedBrand);
    }

    stop(){
        console.log('Parado '+this.name);
    }

    talk(){
        console.log('Não digo nada!!!');
    }

}


class Dog extends Pet{

    constructor(name, age, breed){
        super(name,age );
        this.breed = breed
    }
    talk(){
        console.log('Fala: auau');
    }

    layDown(){
        super.stop();
        console.log('Deitado '+this.name);
    }

    bark(times){
        var that = this;
        var count = 0;

        var key = setInterval((function () {
            count ++ ;
            that.talk();
            if(count === times){
                clearInterval(key);
            }
        }), 1000);
    }


    toString(){
        return `Meu nome é ${this.name} e tenho ${this.age} anos.`;
    }
}


let surdo = new Dog("Surdo", 12, "Dalmata");
let billy = new Dog("Billy",1,"Vira-lata");
let  thor = new Dog("Thor",5,"Vira-lata");

var dogs = [surdo, billy, thor];
//
// dogs.forEach(function (i) {
//     console.log(i.name);
//
// });

let ageFiltro = dogs.filter(pet => pet.age >= 2);
console.log(ageFiltro);

let ageSoma = dogs.reduce((total, atual) => total + atual.age,0);
console.log(ageSoma);

let namesMaisculo = dogs.map(pet => pet.name.toUpperCase());
console.log(namesMaisculo);