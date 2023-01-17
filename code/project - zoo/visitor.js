export default class Visitor {
    constructor() {
        this.ticket = null;
    }

    buyTicket(ticket) {
        this.ticket = ticket;
    }
    showTicket() {
        return this.ticket;
    }
}