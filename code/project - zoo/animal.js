export default class Animal {
    constructor(species, weight, height, diet, animalClass) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.animalClass = animalClass;
    }

    getSpecies() {
        return this.species;
    }
    getWeight() {
        return this.weight;
    }
    getHeight() {
        return this.height;
    }
    getDiet() {
        return this.diet;
    }
    getAnimalClass() {
        return this.animalClass;
    }
}