//1 Uzduotis
function Movie(name, year, director, budget, income) {
    this.name = name;
    this.year = year;
    this.director = director;
    this.budget = budget;
    this.income = income;
}

Movie.prototype.getIntroduction = function() {
        console.log(`Filmo pavadinimas: ${this.name}, Metai: ${this.year}, Rezisierius: ${this.director}`)
};

Movie.prototype.getProfit = function(){
    console.log(`Filmas uzdirbo: ${this.income - this.budget} mln.`)
};

const movie = new Movie("Gladiatorius", 2000,"Ridley Scott", 103, 460.5);

movie.getIntroduction()
movie.getProfit()

//2 Uzduotis
class Car {
    constructor(marke, model, year){
        this.marke = marke
        this.model = model
        this.year = year
    }
    getIntroduction1(){
        console.log(`Masinos marke: ${this.marke} Masinos modelis: ${this.model}`)
    }
    getAge(){
        var currentYear = 2023 - this.year
        return currentYear <= 10 ? '10 metu arba naujesnis' : `11 metu arba senesnis`;
    }
}
const car = new Car("BMW", "X5", 2017);
car.getIntroduction1()
console.log(car.getAge());

//2.2 Uzduotis
class Motorcycle {
    constructor(marke, model, year, wheels){
        this.marke = marke
        this.model = model
        this.year = year
        this.wheels = wheels
    }
    getIntroduction1(){
        console.log(`Motociklo gamintojas: ${this.marke} Modelis: ${this.model}`)
    }
    getAge(){
        var currentYear = 2023
        return currentYear - this.year <= 10 ? '10 metu arba naujesnis' : `11 metu arba senesnis`;
    }
    getWheelsNumber(){
        var totalWheels = this.wheels;
        let word;
        switch (totalWheels){
            case 1:
                word = `rata`
                break;
            case 2:
            case 3:
            case 4:
                word = 'ratus'
                break;
            default:
                word = ' ratus. Nesamone kazkokia'
                break;

        }
        return `Motociklas turi ${totalWheels} ${word}`
    }
}
const motorcycle = new Motorcycle("Latveska", "Ryga", 1991, 2);
motorcycle.getIntroduction1()
console.log(motorcycle.getAge())
console.log(motorcycle.getWheelsNumber())