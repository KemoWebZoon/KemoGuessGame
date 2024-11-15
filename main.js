const minNum = 1;
const maxNum = 10;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = 3;

while (running > 0) {
  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a valid number");
  } else {
    attempts++;
    if (guess < answer) {
      running--;
      window.alert(`Too Low And You Now Have ${running} tries `);
    } else if (guess > answer) {
      running--;
      window.alert(`Too High And You Now Have ${running} tries `);
    } else {
      window.alert(`I wasnot think that some one can win me, you are a hero`);
      running = 0;
    }
  }
}

window.alert(`You Lost And The Number Was ${answer}`);
