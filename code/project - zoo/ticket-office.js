import Building from "./building.js";
import Ticket from "./ticket.js";

export default class TicketOffice extends Building {
    constructor(name, area, maxNrPeople) {
        super(name, area, maxNrPeople);
        this.fullTickets = [];
        this.birdTickets = [];
    }

    produceFullTickets(max) {
        for(let i = 0; i < max; i++) {
            let full = new Ticket(50, "full");
            this.fullTickets.push(full);
        }
    }
    produceBirdTickets(max) {
        for(let i = 0; i < max; i++) {
            let bird = new Ticket(50, "bird-house");
            this.birdTickets.push(bird);
        }
    }
    produceTickets(max) {
        let volume = max/2;
        if (!Number.isInteger(volume)) {
            volume = Math.floor(volume);
            this.produceFullTickets(volume+1);
        } else {
            this.produceFullTickets(volume);
        }
        this.produceBirdTickets(volume);
    }
    sellFullPriceTicket() {
        if(this.fullTickets.length > 0) {
            return this.fullTickets.pop();
        }
        return null;
    }
    sellBirdHouseTicket() {
        if(this.birdTickets.length > 0) {
            return this.birdTickets.pop();
        }
        return null;    }
    displayAvailableNumberOfTickets() {
        console.log("Remaning full price tickets: " + this.fullTickets.length);
        console.log("Remaning bird house tickets: " + this.birdTickets.length);
    }
}