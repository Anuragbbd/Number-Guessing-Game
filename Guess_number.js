function NumberGuessGame() {
  let RandomNumber = Math.round(Math.random() * 100);
  let Attempt = 0;
  let guess;

  while (true) {
    guess = prompt("Enter a number:");

    if(guess === null || guess.trim() === "" || isNaN(guess)) { 
      alert("Enter a valid number");
      continue;
    }
    guess = parseInt(guess);
    Attempt++;
    if (guess === RandomNumber) {
      alert(`You guessed the number ${RandomNumber} correctly in ${Attempt} attempts`);
      break;
    }
    else if (guess < RandomNumber) {
      alert("Too low, Try again");
    }
    else {
      alert("Too high, Try again");
    }
  }
}
NumberGuessGame();

