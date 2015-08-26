setInterval(function() {
  displayTime('Local time', 'local');
}, 1000);

setInterval(function() {
  displayTime('Hawaii time', 'hawaii', displayOffsetTime(-3));
}, 1000);

setInterval(function() {
  displayTime('Barcelona time', 'barca', displayOffsetTime(9));
}, 1000);

function displayTime(zone, idName, time) {
  var currentTime = time ? time : new Date();

  var clockDiv = document.getElementById(idName);
  clockDiv.innerText = zone + ":\n" + currentTime.toDateString() + "\n" + currentTime.toLocaleTimeString();
}

function displayOffsetTime(hoursOffset) {
  var time = new Date(Date.now() + (hoursOffset * 60 * 60 * 1000));
  return time;
}




// old stuff
// console.log(currentTime);
// var pm = currentTime.getHours() > 12 ? " PM" : " AM";
// var hours = (pm == " PM") ? (currentTime.getHours() - 12) : currentTime.getHours();
// var min = currentTime.getMinutes() < 10 ? ("0" + currentTime.getMinutes()) : currentTime.getMinutes();
// var sec = currentTime.getSeconds()
// clockDiv.innerText = [ hours, min, sec ].join(":") + pm;
