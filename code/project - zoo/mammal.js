import Animal from "./animal";

export default class Mammal extends Animal {
    constructor(species, weight, height, diet, animalClass, furColor) {
        super(species, weight, height, diet, animalClass);
        this.furColor = furColor;
    }
    
    getFurColor() {
        return this.furColor;
    }
}