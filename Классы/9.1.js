// Во-первых, функция, созданная с помощью class, помечена специальным внутренним свойством [[IsClassConstructor]]: true. Поэтому это не совсем то же самое, что создавать её вручную.
// Методы класса являются неперечислимыми. Определение класса устанавливает флаг enumerable в false для всех методов в "prototype".
// Классы всегда используют use strict. Весь код внутри класса автоматически находится в строгом режиме.


class ElectricKettle {
  constructor(name, power = 1000) {
    this.name = name;
    this.power = power;
    this.doneTime = 0;
    this.waterVolume = 0;
    this.intervalTimer = null;
    this.startTime = 0;
    this.remainingTime = 0;
    this.elapsedTime = 0;
    this.finalTemperature = 0;
    this.working = false;
  }

  fill(volume, temp) {
    
    if (this.working) return console.log("Сначала выключите")

    if (!this.waterVolume) {
      this.finalTemperature = temp;
      this.waterVolume = volume;
      console.log(
        `В чайнике ${this.waterVolume}мл воды.Температура воды ${this.finalTemperature}°C`
      );
    } else {
      this.finalTemperature = (this.finalTemperature * this.waterVolume + temp * volume) / (this.waterVolume + volume);
      this.waterVolume += volume;
      console.log(
        `Вы долили в чайник ${volume}. В чайнике ${this.waterVolume}мл воды. Температура воды ${this.finalTemperature}°C`
      );
    }
  }

  start() {
    if (this.waterVolume < 100 || this.waterVolume == undefined) return console.log("Чайник сгорел");

    this.doneTime = Math.round([this.waterVolume * 4.18 * [100 - this.finalTemperature]] / this.power);
    console.log(`Чайник запущен. Температура воды:${this.finalTemperature.toFixed()}°C. Время закипания: ${this.doneTime} сек`);

    this.startTime = Date.now();

    this.intervalTimer = setInterval(() => {
      this.elapsedTime = (Date.now() - this.startTime) / 1000;
      this.remainingTime = this.doneTime - this.elapsedTime;

      if (this.remainingTime <= 0) {
        this.stop();
      } else {
        console.log(`Осталось ${Math.ceil(this.remainingTime)} секунд`);
      }
    }, 1000);
    this.working = true;
  }

  stop() {
    clearInterval(this.intervalTimer);

    this.finalTemperature +=  [this.power * this.elapsedTime] / (this.waterVolume * 4.18);
    console.log(`Чайник остановлен. Температура воды: ${this.finalTemperature.toFixed()}°C`);
    this.working = false;
  }
}

const pot = new ElectricKettle("samsung", 1000);



