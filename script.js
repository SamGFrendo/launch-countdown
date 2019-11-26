
/*
1. Show date
  //https://tecadmin.net/get-current-date-time-javascript/
2. Show difference between two dates
  //https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript 
3. Add time - I would like to do days, hours, minutes, seconds 
4. Put in refresh button 
5. Do something when it gets to zero! 
*/

function timeRemaining(){

  // set release date
  const release = new Date('September 30, 2020 17:00:00')
  
  // get total seconds between the times
  var delta = Math.abs(release - new Date()) / 1000;

  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  var seconds = Math.floor(delta);

  document.getElementById('days-display').innerHTML = days;
  document.getElementById('hours-display').innerHTML = hours;
  document.getElementById('minutes-display').innerHTML = minutes;
  document.getElementById('seconds-display').innerHTML = seconds;

}

timeRemaining();

setInterval(timeRemaining,1000);


console.log('script has run')

 








