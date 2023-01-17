import Building from "./building.js";

export default class Zoo extends Building {
    constructor(name, area, maxNrPeople) {
        super(name, area, maxNrPeople);
        this.birdHouse = [];
        this.reptilePark = [];
        this.mammalSection = [];
        this.visitors = [];
    }

    addBird(bird) {
        this.birdHouse.push(bird);
    }
    addReptile(reptile) {
        this.reptilePark.push(reptile);
    }
    addMammal(mammal) {
        this.mammalSection.push(mammal);
    }
    admitVisitorToBirdHouse(visitor) {
        if(visitor.showTicket()) {
            console.log("Visitor admitted to bird house.");
            return;
        }
        console.log("You don't have a valid ticket to enter the bird house.");       
    }
    admitVisitorToReptilePark(visitor) {
        if(visitor.showTicket().getTicketType() == "full") {
            console.log("Visitor admitted to reptile park.");
            return;
        }
        console.log("You don't have a valid ticket to enter the reptile park.");       
    }
    admitVisitorToMammalSection(visitor) {
        if(visitor.showTicket().getTicketType() == "full") {
            console.log("Visitor admitted to mammal section.");
            return;
        }
        console.log("You don't have a valid ticket to enter the mammal section.");       
    }
    admitVisitorToZoo(visitor) {
        if (this.visitors.length != this.maxNrPeople) {
            if(visitor.showTicket()) {
                this.visitors.push(visitor);
                return;
            }
            console.log("You don't have a valid ticket to enter the zoo."); 
        }
        console.log("Zoo is fully admitted.");    
    }

}