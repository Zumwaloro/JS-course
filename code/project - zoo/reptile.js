import Animal from "./animal.js";

export default class Reptile extends Animal {
    constructor(species, weight, height, diet, animalClass, skinColor) {
        super(species, weight, height, diet, animalClass);
        this.skinColor = skinColor;
    }

    getSkinColor() {
        return this.skinColor;
    }
}