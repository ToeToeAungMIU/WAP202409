"use strict";
class Meditator {
    constructor(name4) { this.name4 = name4; }
    meditate(duration = 20) {
        console.log(this.name4 + " is meditating for " + duration + " mins!");
    }
}
class Sidha extends Meditator {
    constructor(name4) { super(name4); }
    meditate(duration = 40) {
        console.log(this.name4);
        console.log('Meditation started');
        super.meditate(duration);
    }
}
let john = new Sidha("John");
john.meditate();
