//Repeated Statements

//Write a program that launches a carousal for 10 turns, showing the turn number each time.
//Improve it so that the number of turns is given by the user
document.querySelector("#score").addEventListener("click", run);

function run() {
  const userInput = document.querySelector("#temp").value;
  const outputElement = document.querySelector("#thing");
  const turns = Number(userInput);

  // Validate user input
  if (isNaN(turns) || turns <= 0) {
    outputElement.innerText = "Enter a valid positive number";
    console.log("Invalid input");
    return;
  }

  // Run the carousel
  outputElement.innerText = ""; // Clear previous output
  for (let i = 1; i <= turns; i++) {
    const message = `Turn number ${i}`;
    outputElement.innerText = message; // Display current turn
    console.log(message);
  }
}
