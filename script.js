const newYear = "1 January, 2024";

let dateDay = document.getElementById("day");
let dateHours = document.getElementById("hours");
let dateMinute = document.getElementById("minute");
let dateSecond = document.getElementById("second");


function formatCountdown(value) {
   if (value < 10) {
      return `0${value}`;
   }
   return value;
}

function timeCountDown() {
   let currentDate = new Date();
   let newYearDate = new Date(newYear);

   const dateDiff = (newYearDate - currentDate) / 1000;

   // Dias
   // const day = (1000 * 60  * 60 * 24);
   const daysLeft = Math.floor(dateDiff / 3600/ 24);
   dateDay.textContent = formatCountdown(daysLeft);

   // HorasdaysLeft
   // const hours = (1000 * 60 * 60);
   const hoursLeft = Math.floor(dateDiff / 3600) % 24;
   dateHours.textContent = formatCountdown(hoursLeft);

   // Minutos
   // const minutes = (1000 * 60);
   const minuteLeft = Math.floor(dateDiff / 60) % 60;
   dateMinute.textContent = formatCountdown(minuteLeft);

   // Segundos
   // const second= (1000);
   const secondLeft = Math.floor(dateDiff) % 60;
   dateSecond.textContent = formatCountdown(secondLeft);

   const dateObject = {
      daysLeft,
      hoursLeft,
      minuteLeft,
      secondLeft
   }

   const areAllDateEnded = Object.values(dateObject).every(value => value <=0);
   console.log(areAllDateEnded)

   if (areAllDateEnded) {
   
      dateDay.textContent = 0;
      dateHours.textContent = 0;
      dateMinute.textContent = 0;
      dateSecond.textContent = 0;
   }

}
timeCountDown();
setInterval(timeCountDown, 1000);


// 1000 milisegundos = 1 segundo
// 10000 milisegundos = 10 segundos
// 1000 * 60 = 60000 = 1 minuto
// 1000 * 60 * 15 = 15 minutos

