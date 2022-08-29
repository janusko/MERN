class Ninja {
    constructor(name, health=10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name)
        return this
    }
    showStats() {
        console.log(`Your name is: ${this.name}, your strength is: ${this.strength}, your speed is: ${this.speed}, and your health is: ${this.health}.`)
        return this
    }
    drinkSake() {
        this.health += 10;
        return this
    }
}

const ninja1 = new Ninja("ryan")
ninja1.sayName().showStats().drinkSake().showStats()