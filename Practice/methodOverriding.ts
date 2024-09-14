class Meditator {
    name4: string;
    constructor(name4: string) { this.name4 = name4 }
    meditate(duration: number = 20) {
    console.log(this.name4 + " is meditating for " + duration + " mins!");
    }
    }
    class Sidha extends Meditator {
    constructor(name4: string) { super(name4) }
    meditate(duration: number = 40) {
    console.log(this.name4)
    console.log('Meditation started')
    super.meditate(duration);
    }
    }
    let john = new Sidha("John");
    john.meditate();