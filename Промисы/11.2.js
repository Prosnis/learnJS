

function test(id) {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`) // возращает промис
      .then(response => { // получаем ответ 
        if (!response.ok) { // статус в диапозоне 200-299 - ок, если нет, то выбразываем ошибку 
          throw new Error(`HTTP error! status: ${response.status}`); 
        }
        return response.json(); // метод .json() декодирует полученный ответ из формата json 
      })
      .then(res => console.log(res)) // при response.ok обрабатываем результат
      .catch(error => { // обрабатываем ошибку 
        console.error('Fetch error:', error); 
      });
  }
  
  test(5000);


// начальное состояние промиса
state: "pending"  
result: undefined

// состояние промиса в случае ошибки 
state: "rejected" 
result: error


// состояние промиса в случае успешного выполнения 
state: "fulfilled"
result: value
