let car = {
    make: "Chevy",
    model: "Tracker",
    year: 1989,
    price: 2000
}

let subby = {
    make: "Subaru",
    model: "Forester",
    year: 2017,
}



class Car {
    constructor(make, model, year, price, sound) {
        this.make = make
        this.model = model
        this.year = year
        this.price = price || 2000
        this.sound = sound
        // NOTE you can also define methods this way.
        // this.method = function () { }
    }

    //NOTE METHODS
    startCar() {
        console.log(this.sound);
    }

    static announce() {
        console.log("Its a car!")
    }
}


class Chevrolet {
    constructor(model, year, price) {
        this.make = "Chevrolet"
        this.model = model
        this.year = year
        this.price = price

    }
}


class Dealership {
    constructor(cars) {
        this.cars = cars
        this.money = 0
    }

    purchaseCar() {
        let inventoryDisplay = ""
        this.cars.forEach((car, index) => {
            inventoryDisplay += `${index + 1} - ${car.make} : ${car.model} : ${car.year} $${car.price}, `
        });
        // @ts-ignore
        let selectedCarIndex = window.prompt("What car do you want? " + inventoryDisplay) - 1
        this.money += this.cars[selectedCarIndex].price
        this.cars.splice(selectedCarIndex, 1)
    }
}


let tracker = new Car("Chevy", "Tracker", 1989, 2000, "Clunk Screech Bang putt putt")
let tracker2 = new Car("Chevy", "Tracker", 1989, 2000, "Clunk Screech Bang putt putt")
let jimMobile = new Car("Subaru", "Forester", 2017, 23000, "vrOOM")

let dealer = new Dealership([tracker, jimMobile, tracker2])
let dealer2 = new Dealership([tracker, tracker2])

