a// Sample categories with fixed prices
const buses = {
   luxury: generateBuses("Luxury", 4, 500),
   airCondition: generateBuses("AC", 4, 300),
   minibus: generateBuses("MiniBus", 4, 150),
   wpass: generateBuses("WPass", 4, 100)
};

function generateBuses(type, count, price) {
   let busArray = [];
   for (let i = 1; i <= count; i++) {
      busArray.push({
         name: `${type}-${i}`,
         seats: Array(25).fill(false), // 25 seats, all initially available
         price: price
      });
   }
   return busArray;
}

function showBusCategories() {
   return Object.keys(buses).map((cat, i) => `${i + 1}. ${cat}`).join('\n');
}

function listAvailableSeats(bus) {
   return bus.seats.map((seat, index) => seat ? 'X' : index + 1).join(' ');
}

function reserveSeat() {
   const categoryIndex = prompt("Choose Bus Category:\n" + showBusCategories()) - 1;
   const categoryName = Object.keys(buses)[categoryIndex];
   const selectedBuses = buses[categoryName];

   const busIndex = prompt(`Select Bus (1-${selectedBuses.length}):`);
   const bus = selectedBuses[busIndex - 1];

   alert("Seats:\n" + listAvailableSeats(bus));
   const seatNum = prompt("Choose a seat number to reserve:");

   const seatIndex = seatNum - 1;

   if (!bus.seats[seatIndex]) {
      const userName = prompt("Enter your name for reservation:");
      bus.seats[seatIndex] = userName;
      alert(`Seat ${seatNum} reserved for ${userName} on ${bus.name}. Price: ₱${bus.price}`);
   } else {
      alert(`Seat already reserved by ${bus.seats[seatIndex]}. Please choose another seat.`);
   }
}

function cancelReservation() {
   const categoryIndex = prompt("Choose Bus Category:\n" + showBusCategories()) - 1;
   const categoryName = Object.keys(buses)[categoryIndex];
   const selectedBuses = buses[categoryName];

   const busIndex = prompt(`Select Bus (1-${selectedBuses.length}):`);
   const bus = selectedBuses[busIndex - 1];

   const seatNum = prompt("Enter seat number to cancel reservation:");
   const seatIndex = seatNum - 1;

   if (bus.seats[seatIndex]) {
      const confirmName = prompt(`This seat is reserved by ${bus.seats[seatIndex]}. Enter your name to confirm cancellation:`);
      if (confirmName === bus.seats[seatIndex]) {
         bus.seats[seatIndex] = false;
         alert(`Seat ${seatNum} reservation cancelled.`);
      } else {
         alert("Name does not match. Cannot cancel reservation.");
      }
   } else {
      alert("Seat is not reserved.");
   }
}

function printAllBusData() {
   console.log("=== Bus Data Summary ===");
   for (const category in buses) {
      console.log(`\nCategory: ${category}`);
      buses[category].forEach(bus => {
         const seatStatus = bus.seats.map(seat => (seat ? "X" : "O")).join(" ");
         console.log(`${bus.name} (₱${bus.price}): ${seatStatus}`);
      });
   }
}

function menu() {
   while (true) {
      const choice = prompt(
         "Bus Reservation System\n1. Reserve Seat\n2. Cancel Reservation\n3. Exit"
      );
      
      if (choice == "1") {
         reserveSeat();
      } else if (choice == "2") {
         cancelReservation();
      } else if (choice == "3") {
         printAllBusData();
         break;
      } else {
         alert("Invalid choice. Please try again.");
      }
   }
}



// Start of our system by asking the user
while (true){
const askingTheUser = prompt("Welcome to LEGEND RESERVATION BUS TERMINAL... \nDo you want to BOOK in our BUSES? YES/NO").toUpperCase();

   if (askingTheUser == "YES"){
      menu();
   }else if (askingTheUser == "NO"){
      console.log("Thank you for your response...");
      break;
   } else {
      alert("Invalid Response!")
   }
};
