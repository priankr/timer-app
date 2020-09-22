//We are creating a reusable class of timer which we can utilize every time we are creating a timer app
class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
	//If a callback is passed then look for three functions which the Timer class will be able to utilize: onStart, onTick & onComplete 
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => {
	  //Passing in the current time remaining into the display box via onStart
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
	  //Decrease 20 milliseconds from the time displayed 
    this.interval = setInterval(this.tick, 20);
  };

//Pausing the timer by usings clearInterval
  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
	  //If the time remaining less than or equal to zero we pause the timer
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
		//If the time remaining is not zero we decrease 0.02 seconds or 20 milliseconds from the existing values of time reamining. Note: Must match the decrease in this.interval in start()
      this.timeRemaining = this.timeRemaining - 0.02;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  get timeRemaining() {
	  //Setting the time the user inputs to a float value
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
	  //Setting the number of decimals places displayed to 2
    this.durationInput.value = time.toFixed(2);
  }
}
