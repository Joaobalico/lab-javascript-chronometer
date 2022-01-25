class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId= null;
  }

  start(callback) {
      this.intervalId = setInterval(() => {
      callback;
      this.currentTime += 1;
    }, 1000)
  }

  getMinutes() {
    if (this.currentTime > 60) {
      return Math.floor (this.currentTime / 60);
     } else {
      return 0;
    }
  }

  getSeconds() {
    if (this.currentTime <= 60) {
      return this.currentTime;
    }
    if (this.currentTime > 60) {
      return this.currentTime % 60;
     } else {
      return 0;
    }
  }

  computeTwoDigitNumber(value) {
    let num = value.toString()
    if (num.length === 1) {
      return '0' + num;
    }
    return num;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
