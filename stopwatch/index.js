function StopWatch() {
  let started = false;
  let time = 0;

  this.start = function() {
    if (started) throw new Error("Timer has started already");

    started = true;

    const timer = setInterval(function() {
      if (!started) clearInterval(timer);
      time++;
    }, 10);
  };

  this.stop = function() {
    if (!started) throw new Error("Timer has not yet started!");

    started = false;
  };

  this.reset = function() {
    time = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return time / 100;
    }
  });
}

const sw = new StopWatch();
