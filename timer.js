class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => {
    if (this.onStart) {
      // This will pass in the time duration (since it's pulled in at the start)
      this.onStart(this.timeRemaining);
    }

    this.tick();
    // in order to share information between different methods
    // we assign that variable to an instance variable (using this)
    this.interval = setInterval(this.tick, 10);
    // Disable start button after timer begins running
    this.startButton.setAttribute('disabled', '');
  };

  pause = () => {
    clearInterval(this.interval);
    // Enable start button after clicking stop
    this.startButton.removeAttribute('disabled', '');
  };

  tick = () => {
    // const timeRemaining = this.timeRemaining; // can be treated as an instance variable due to using a getter ('get' keyword)
    // this.timeRemaining = timeRemaining - 1; // everything to the right of the equal sign will be automatically provided as the argument of 'time'

    // Refactored the above to the below
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.01;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  // Getter
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  // Setter
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
