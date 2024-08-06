import {
  setPower,
  labelPower,
  setCapacity,
  labelCapacity,
  setName,
  userNameKettle,
  btnFill,
  btnStart,
  btnStop,
  inputVolume,
  temperature,
  statusInfo,
  volumeStatus,
  volumeStatusLabel,
  boiledStatusLabel,
  temperatureStatusLabel,
  container,
  containerSet,
} from "./elements.js";

class ElectricKettle {
  #name = "";
  #capacity = 0;
  #power = 0;

  constructor(name, power, capacity) {
    this.#name = name;
    this.#power = power;
    this.#capacity = capacity;

    this.doneTime = 0;
    this.waterVolume = 0;
    this.intervalTimer = null;
    this.startTime = 0;
    this.remainingTime = 0;
    this.elapsedTime = 0;
    this.finalTemperature = 0;
    this.working = false;
  }

  getSettings() {
    return ` ${this.#name}, power: ${this.#power}w, capacity: ${
      this.#capacity
    }ml `;
  }

  #checkWater(waterLimit) {
    if (waterLimit > this.#capacity) {
      return false;
    } 
    return true;
  }

  fill(volume, temp) {
    if (this.working) return;

    if (!this.#checkWater(this.waterVolume + volume, temp)) {
      return;
    }

    if (!this.waterVolume) {
      this.finalTemperature = temp;
      this.waterVolume = volume;
    } else {
      this.finalTemperature = Math.floor(
        (this.finalTemperature * this.waterVolume + temp * volume) /
          (this.waterVolume + volume)
      );
      this.waterVolume += volume;
    }

    this.doneTime = Math.round(
      [this.waterVolume * 4.18 * [100 - this.finalTemperature]] / this.#power
    );
  }

  start() {
    if (this.waterVolume < 100) return console.log(`Чайник сгорел`);
    this.startTime = Date.now();

    this.intervalTimer = setInterval(() => {
      this.elapsedTime = (Date.now() - this.startTime) / 1000;
      this.remainingTime = Math.floor(this.doneTime - this.elapsedTime);

      if (this.remainingTime <= 0) {
        this.stop();
      }
    }, 1000);
    this.working = true;
  }

  stop() {
    clearInterval(this.intervalTimer);
    if (this.working) {
      this.working = false;
      this.finalTemperature +=
        [this.#power * this.elapsedTime] / (this.waterVolume * 4.18);
      this.doneTime = Math.round(
        [this.waterVolume * 4.18 * [100 - this.finalTemperature]] / this.#power
      );
    }
  }
}

function newKettle(name, power, capacity) {
  return new ElectricKettle(name, power, capacity);
}

let UserKettle = null;

container.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target == btnStop) {
    if (UserKettle.working) {
      UserKettle.stop();
      updateUI();
    } else return;
  }
  if (e.target == btnStart) {
    if(UserKettle.working) return
    if (UserKettle.waterVolume < 100) {
      statusInfo.textContent = "the kettle burned down🤡"
      return 
    } 
    UserKettle.start();
    statusInfo.textContent = "is boiling...";
    let timer = setInterval(() => {
      if (UserKettle.remainingTime >= 0 && UserKettle.working) {
        boiledStatusLabel.textContent = `time to ready: ${Math.ceil(UserKettle.remainingTime)} s`;
        temperatureStatusLabel.textContent = `temperature: ${UserKettle.finalTemperature.toFixed(2)}°c`;
        updateUI();
      } else {
        boiledStatusLabel.textContent = "Have a nice tea party";
        statusInfo.textContent = "done";
        temperatureStatusLabel.textContent = `temperature: ${UserKettle.finalTemperature.toFixed(2)}°c`;
        clearInterval(timer);
      }
    }, 1000);
  }
  if (e.target == btnFill) {
    if (UserKettle.working) return;

    if (+temperature.value >= 100) {
      temperature.classList.add("wrong");
      statusInfo.textContent = "temperature max : 100 °c";
      return;
    } else {
      temperature.classList.remove("wrong");
      statusInfo.textContent = "preparing...";
    }

    if (+setCapacity.value < +inputVolume.value + +UserKettle.waterVolume) {
      inputVolume.classList.add("wrong");
      statusInfo.textContent = `max capacity : ${setCapacity.value}`;
      return;
    } else {
      inputVolume.classList.remove("wrong");
      statusInfo.textContent = "preparing...";
    }
    UserKettle.fill(+inputVolume.value, +temperature.value);
    updateUI();
    temperatureStatusLabel.textContent = `temperature: ${UserKettle.finalTemperature.toFixed(2)}°c`;
    boiledStatusLabel.textContent = `time to ready: ${Math.ceil(UserKettle.doneTime)} s`;
  }
});

containerSet.addEventListener("submit", (e) => {
  e.preventDefault();
  if (setName.value) {
    UserKettle = newKettle(setName.value, setPower.value, setCapacity.value);

    userNameKettle.textContent = UserKettle.getSettings();
    container.classList.remove("disabled");
    containerSet.classList.add("disabled");
    statusInfo.textContent = "enter volume and temperature";
  }
});

containerSet.addEventListener("input", (e) => {
  if (e.target == setPower) {
    labelPower.textContent = setPower.value + "w";
  }
  if (e.target == setCapacity) {
    labelCapacity.textContent = setCapacity.value + "ml";
  }
});

function updateUI() {
  volumeStatus.max = setCapacity.value;
  volumeStatus.value = UserKettle.waterVolume;
  volumeStatusLabel.textContent = `volume: ${UserKettle.waterVolume}/${setCapacity.value} ml`;
  temperatureStatusLabel.textContent = `temperature: ${UserKettle.finalTemperature.toFixed(2)}°c`;
}

