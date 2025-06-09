let username = prompt("Enter your name:"); 
let person = parseInt(prompt("Enter total number of persons:")); 
let budget = parseInt(prompt("Enter your total budget:"));

const packages = {
    rishikesh: { days: 4, services: ["Camping", "Rafting"] },
    goa: { days: 6, services: ["Beach Resort", "Boat Ride", "Food"] },
    shimla: { days: 6, services: ["Hill Resort", "Snow Activities", "Food"] },
    manali: { days: 4, services: ["Hotel", "Skiing", "Transport"] },
    ladakh: { days: 4, services: ["Tent Stay", "Bike Rental", "Guide"] },
};

console.log("************* Welcome ****************");
console.log("Hi", username);
console.log("Total persons =", person);
console.log("Your total budget = ₹" + budget);

console.log("\nYou can go to the following places:");

if (budget >= 20000) {
    console.log("1. Shimla");
    console.log("2. Goa");
}
if (budget >= 25000) {
    console.log("3. Rishikesh");
    console.log("4. Manali");
}
if (budget >= 50000) {
    console.log("5. Ladakh");
}

// Destination functions
function rishikesh() {
    console.log("Location: Rishikesh");
    console.log("Days: 4");
    console.log("Services: Camping, Rafting");
}

function goa() {
    console.log("Location: Goa");
    console.log("Days: 6");
    console.log("Services: Beach Resort, Boat Ride, Food");
}

function shimla() {
    console.log("Location: Shimla");
    console.log("Days: 6");
    console.log("Services: Hill Resort, Snow Activities, Food");
}

function manali() {
    console.log("Location: Manali");
    console.log("Days: 4");
    console.log("Services: Hotel, Skiing, Transport");
}

function ladakh() {
    console.log("Location: Ladakh");
    console.log("Days: 4");
    console.log("Services: Tent Stay, Bike Rental, Guide");
}

// Travel decision
function budget_info() {
    let ch = prompt("Where do you want to go? (e.g., goa, shimla, rishikesh, manali, ladakh):").toLowerCase();
    switch (ch) {
        case "shimla":
            shimla();
            break;
        case "goa":
            goa();
            break;
        case "rishikesh":
            rishikesh();
            break;
        case "manali":
            manali();
            break;
        case "ladakh":
            ladakh();
            break;
        default:
            console.log("Invalid choice");
            return;
    }
    let per_person = budget / person;
    console.log("Per person cost = ₹" + per_person.toFixed(2));
}

budget_info();
