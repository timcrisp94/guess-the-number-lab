console.log("hello");

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    do {
      this.prevGuesses.push(this.getGuess());
      this.render();
    } while (this.prevGuesses[this.prevGuesses.length-1] !== this.secretNum);
  },
  getGuess: function() {
    let guess;
    do {
      guess = parseInt(prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum}`));
    } while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum)
    return guess;

  },
  render: function() {
    let message;
    if(this.prevGuesses[this.prevGuesses.length-1] === this.secretNum){
      message = `Congrats! You guessed the number in ${this.prevGuesses.length}!`
  } else if(this.prevGuesses[this.prevGuesses.length-1] < this.secretNum){
    message = `Your guess is too low! Previous guesses: ${this.prevGuesses.join(', ')}`
  } else {
    message = `Your guess is too high! Previous guesses: ${this.prevGuesses.join(', ')}`
  }
  alert(message);
  },
}


game.play();


