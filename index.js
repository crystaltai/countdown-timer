class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => {
    this.tick();
    // in order to share information between different methods
    // we assign that variable to an instance variable (using this)
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    // const timeRemaining = this.timeRemaining; // can be treated as an instance variable due to using a getter ('get' keyword)
    // this.timeRemaining = timeRemaining - 1; // everything to the right of the equal sign will be automatically provided as the argument of 'time'

    // Refactored the above to the below
    if (this.timeRemaining <= 0) {
      this.pause();
    } else {
      this.timeRemaining = this.timeRemaining - 1;
    }
  };

  // Getter
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  // Setter
  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

// Grab DOM elements
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

// Create a new instance of class Timer, which we pass the DOM elements into
const timer = new Timer(durationInput, startButton, pauseButton);
