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

// const ninja1 = new Ninja("Ryan");
// ninja1.sayName().showStats().drinkSake().showStats();

class Sensei extends Ninja {
    constructor(name, health=200) {
        super(name, health)
        this.name = name;
        this.health = health;
        this.speed = 10;
        this.strength = 10;
        this.widsom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        return this
    }
}

const superSensei = new Sensei('Master Splinter');
superSensei.speakWisdom();
superSensei.showStats();