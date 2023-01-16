export default class Building {
    constructor(name, area, maxNrPeople) {
        this.name = name;
        this.area = area;
        this.maxNrPeople = maxNrPeople;
    }

    getName() {
        return this.name;
    }
    getArea() {
        return this.area;
    }
    getMaxNrPeople() {
        return this.maxNrPeople;
    }
}