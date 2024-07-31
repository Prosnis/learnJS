
class ElectricKettle {

  #name = ''
  #capacity = 0
  #power = 0
  #working = false

  constructor(name, power,capacity) {


    this.#name = name
    this.#power = power
    this.#capacity = capacity

    this.doneTime = 0;
    this.waterVolume = 0;
    this.intervalTimer = null;
    this.startTime = 0;
    this.remainingTime = 0;
    this.elapsedTime = 0;
    this.finalTemperature = 0;
  }

  getSettings(){
    console.log(`Создан новый чайник: ${this.#name}, можность: ${this.#power}Вт, Объем: ${this.#capacity}мл `)
  }

  
  #checkWater(waterLimit){
    if (waterLimit > this.#capacity) {
      console.log(`Уровень воды выше допустимого значения ${this.#capacity}мл`)
      return false
    } else if (waterLimit < 100) {
      console.log(`Уровень воды ниже допустимого значения min 100мл`)
      return true
    }

    return true
  }


  fill(volume, temp) {

    if (this.#working) return console.log("Сначала выключите");

    if (!this.#checkWater(this.waterVolume + volume)) {
      return; 
    }

    if (!this.waterVolume) {
      this.finalTemperature = temp;
      this.waterVolume = volume
      console.log(
        `В чайнике ${this.waterVolume}мл воды.Температура воды ${this.finalTemperature}°C`
      );
     } else {
       this.finalTemperature =
         (this.finalTemperature * this.waterVolume + temp * volume) /
         (this.waterVolume + volume);
       this.waterVolume += volume;
       console.log(
         `Вы долили в чайник ${volume}мл. В чайнике ${this.waterVolume}мл воды. Температура воды ${this.finalTemperature.toFixed(0)}°C`
       );
     }
    }
  

  start() {

    if(this.waterVolume < 100) return console.log(`чайник сгорел`)
    
    this.doneTime = Math.round(
      [this.waterVolume * 4.18 * [100 - this.finalTemperature]] / this.#power
    );
    console.log(
      `Чайник запущен. Температура воды:${this.finalTemperature.toFixed()}°C. Время закипания: ${
        this.doneTime
      } сек`
    );

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
    this.#working = true;
  }

  stop() {
    clearInterval(this.intervalTimer);

    this.finalTemperature +=
      [this.#power * this.elapsedTime] / (this.waterVolume * 4.18);
    console.log(
      `Чайник остановлен. Температура воды: ${this.finalTemperature.toFixed()}°C`
    );
    this.#working = false;
  }
}



const electricKettle = new ElectricKettle('samsung', 500, 1700)

electricKettle.getSettings()
