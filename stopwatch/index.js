function StopWatch() {
  this.started = false;
  this.time = 0;

  Object.defineProperty(this, "duration", {
    get: function() {
      return this.time / 100;
    }
  });

  Object.defineProperty(this, "started", {
    enumerable: false,
    configurable: false
  });

  Object.defineProperty(this, "time", {
    enumerable: false,
    configurable: false
  });
}

StopWatch.prototype.start = function() {
  if (this.started) throw new Error("Timer has started already");

  this.started = true;

  const timer = setInterval(() => {
    if (!this.started) clearInterval(timer);
    this.time++;
  }, 10);
};

StopWatch.prototype.stop = function() {
  if (!this.started) throw new Error("Timer has not yet started!");

  this.started = false;
};

StopWatch.prototype.reset = function() {
  this.time = 0;
};

const sw = new StopWatch();
