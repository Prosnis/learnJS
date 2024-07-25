function Timer(display) {
  this.startTime = 0;
  this.elapsedTime = 0;
  this.intervalTimer = null;
  this.display = display;
  this.renderTime(0);
  this.paused = false;
}

Timer.prototype.start = function () {
  if (!this.intervalTimer) {
    this.startTime = Date.now() - this.elapsedTime;
    this.intervalTimer = setInterval(() => {
      this.elapsedTime = Date.now() - this.startTime;
      this.renderTime(this.elapsedTime);
    }, 1000 / 60);
  }
};
Timer.prototype.renderTime = function (time) {
  const toSeconds = Math.floor(time / 1000);
  const hours = String(Math.floor(toSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor(toSeconds / 60)).padStart(2, "0");
  const seconds = String(Math.floor(toSeconds % 60)).padStart(2, "0");
  const milliseconds = String(time % 1000).padStart(3, "0");
  this.display.innerText = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  this.paused = false;
};

Timer.prototype.pause = function () {
  clearInterval(this.intervalTimer);
  this.intervalTimer = null;
  this.paused = true;
};

Timer.prototype.reset = function () {
  if (this.paused) {
    clearInterval(this.intervalTimer);
    this.startTime = 0;
    this.elapsedTime = 0;
    this.intervalTimer = null;
    this.renderTime(0);
    this.paused = false;
  }
};

const container = document.createElement("div");
document.body.appendChild(container);
container.style.fontSize = "48px";


const buttons = {
  startButton: {
    tag: "button",
    name: "START",
    action: 'start'
  },
  pauseButton: {
    tag: "button",
    name: "PAUSE",
    action: 'pause'
  },
  resetButton: {
    tag: "button",
    name: "RESET",
    action: 'reset'
  },
};



function elementCreator(buttons, stopwatch) {
  Object.values(buttons).forEach((value) => {
    const el = document.createElement(value.tag);
    el.innerText = value.name;
    document.body.appendChild(el);
    el.addEventListener('click', () => stopwatch[value.action]())
  });
}


const stopwatch = new Timer(container);


elementCreator(buttons, stopwatch)
