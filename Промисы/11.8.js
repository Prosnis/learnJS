async function start() {
  if (model.userKettle.working) return;

  viewStatus.updateStatus(boiling); // 

  try {
      const result = await model.userKettle.start((remainingTime) => {
      viewStatus.updateTimer(remainingTime); // Коллбек. + жду результат конечной температуры
    });


    viewStatus.updateTemp(result) // Результат из промиса, получаем по окончанию таймера в методе start
    viewStatus.updateStatus(done); // Обновляю статус по окончанию таймера
  } catch (error) { // Обработка ошибки при малом объеме воды
    if (error === 'burn') {
      viewStatus.burned();
      viewStatus.updateStatus(burn);
      viewStatus.newOne();
    } else {
      console.error('unexpected error:', error); 
    }
  }
}


async function start() {
  if (model.userKettle.working) return;

  viewStatus.updateStatus(boiling); // 

  try {
      const result = await model.userKettle.start((remainingTime) => {
      viewStatus.updateTimer(remainingTime); // Коллбек. + жду результат конечной температуры
    });


    viewStatus.updateTemp(result) // Результат из промиса, получаем по окончанию таймера в методе start
    viewStatus.updateStatus(done); // Обновляю статус по окончанию таймера
  } catch (error) { // Обработка ошибки при малом объеме воды
    if (error === 'burn') {
      viewStatus.burned();
      viewStatus.updateStatus(burn);
      viewStatus.newOne();
    } else {
      console.error('unexpected error:', error); 
    }
  }
}
