class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}


// UNITS

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost)
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power
        } else {
        throw new Error("Target must be a unit!");
        }
        // reduce target's res by power
        // Unit to Unit
    return target
    }
}

class redBeltNinja extends Unit {
    constructor(name, cost, power, res) {
        super(name='Red Belt Ninja', cost = 3, power = 3, res = 3)
    }
}

class blackBeltNinja extends Unit {
    constructor(name, cost, power, res) {
        super(name='Black Belt Ninja', cost = 4, power = 5, res = 4)
    }
}


// EFFECTS

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text;
        this.stat = stat;
        // target a unit's stat
        this.magnitude = magnitude;
        // increasing or reducing Unit's stat
    }
    play(target) {
        if (target instanceof Unit) {
            if (this.stat == 'res') {
                target.res += this.magnitude
            }
            if (this.stat == 'power') {
                target.power += this.magnitude
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    return target
    }
}

class hardAlgo extends Effect {
    constructor(name, cost, text, stat, magnitude) {
        super (name = 'Hard Algorithm', cost = 2, text = "increase target's resilience by 3", stat = 'res', magnitude=3)
    }
}

class unhandledPromiseRejection extends Effect {
    constructor(name, cost, text, stat, magnitude) {
        super (name = 'Unhandled Promise Rejection', cost = 1, text = "reduce target's resilience by 2", stat = 'res', magnitude = -2)
    }
}

class pairProgramming extends Effect {
    constructor(name, cost, text, stat, magnitude) {
        super (name = 'Pair Programming', cost = 3, text = "increase target's power by 2", stat = 'power', magnitude = 2)
    }
}



// TURN 1
const newRedBelt = new redBeltNinja()
console.log(newRedBelt)

const newHardAlgo = new hardAlgo()
newHardAlgo.play(newRedBelt)
console.log(newRedBelt)



// TURN 2
const newBlackBelt = new blackBeltNinja()
console.log(newBlackBelt)

const newPromise = new unhandledPromiseRejection()
newPromise.play(newRedBelt)
console.log(newRedBelt)



// TURN 3
const newPair = new pairProgramming()
newPair.play(newRedBelt)
console.log(newRedBelt)

newRedBelt.attack(newBlackBelt)
console.log(newBlackBelt)