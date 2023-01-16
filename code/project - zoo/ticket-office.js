import Building from "./building";
import Ticket from "./ticket";

export default class TicketOffice extends Building {
    constructor(name, area, maxNrPeople) {
        super(name, area, maxNrPeople);
        this.fullTickets = [];
        this.birdTickets = [];
    }

    produceFullTickets(max) {
        if(this.fullTickets.length != max/2) {
            for(let i = 0; i < max/2; i++) {
                let full = new Ticket(50, "full");
                this.fullTickets.push(full);
            }
        } else {
            console.log("Cannot produce more tickets.");
        }
    }
    produceBirdTickets(max) {
        if(this.birdTickets.length != max/2) {
            for(let i = 0; i < max/2; i++) {
                let bird = new Ticket(50, "bird-house");
                this.birdTickets.push(bird);
            }
        } else {
            console.log("Cannot produce more tickets.");
        }
    }
    produceTickets(max) {
        this.produceFullTickets(max);
        this.produceBirdTickets(max);
    }
}