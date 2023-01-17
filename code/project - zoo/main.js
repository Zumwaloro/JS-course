import TicketOffice from "./ticket-office.js";
import Zoo from "./zoo.js";
import Mammal from "./mammal.js";
import Bird from "./bird.js";
import Reptile from "./reptile.js";
import Visitor from "./visitor.js";

let ticketOffice = new TicketOffice("Ticket office", 10, 5);
let zoo = new Zoo("Zoo", 2500, 50);
let tiger = new Mammal("Tiger", 150, 150, "carnivore", "mammal", "red, black stripes");
let iguana = new Reptile("Iguana", 3, 20, "insects", "reptile", "green with brown spots");
let parrot = new Bird("Parrot", 1, 30, "harbivore", "bird", 40, 5);
zoo.addMammal(tiger);
zoo.addReptile(iguana);
zoo.addBird(parrot);
let ola = new Visitor();
let kari = new Visitor();

ticketOffice.produceTickets(11);
ticketOffice.displayAvailableNumberOfTickets();

ola.buyTicket(ticketOffice.sellBirdHouseTicket());
kari.buyTicket(ticketOffice.sellFullPriceTicket());
console.log("Ola has ticket type: " + ola.showTicket().getTicketType());
console.log("Kari has ticket type: " + kari.showTicket().getTicketType());

zoo.admitVisitorToZoo(ola);
zoo.admitVisitorToZoo(kari);
zoo.admitVisitorToBirdHouse(ola);
zoo.admitVisitorToBirdHouse(kari);
zoo.admitVisitorToReptilePark(ola);
zoo.admitVisitorToBirdHouse(kari);
zoo.admitVisitorToMammalSection(ola);
zoo.admitVisitorToMammalSection(kari);

