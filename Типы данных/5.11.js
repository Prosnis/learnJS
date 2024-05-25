// Покажите день недели
let date = new Date(2012, 0, 3); 
function getWeekDay(date){
    day = ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ']
    return day[date.getDay()]
}
console.log(getWeekDay(date))
// Какой день месяца был много дней назад?
function getDateAgo(date, ago) {
    let newDate = new Date(date)

    newDate.setDate(date.getDate() - ago) 
    return newDate.getDate()
}
let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); 
console.log( getDateAgo(date, 2) ); 
console.log( getDateAgo(date, 365) );

// Последнее число месяца?
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

