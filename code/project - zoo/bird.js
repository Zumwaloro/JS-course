import Animal from "./animal";

export default class Bird extends Animal {
    constructor(species, weight, height, diet, animalClass, wingspan, nrEggs) {
        super(species, weight, height, diet, animalClass);
        this.wingspan = wingspan;
        this.nrEggs = nrEggs;
    }

    getWingspan() {
        return this.wingspan;
    }
    getNrEggs() {
        return this.nrEggs;
    }
}