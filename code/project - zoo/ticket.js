export default class Ticket {
    constructor(price, type) {
        this.price = price;
        this.type = type;
    }

    getTicketType() {
        return this.type;
    }
}