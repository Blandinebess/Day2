function handleButtonClick() {
  const userInput = prompt("Please enter a message:");
  const message = `You entered: ${userInput}`;
  document.getElementById("output").innerHTML = message;
}
