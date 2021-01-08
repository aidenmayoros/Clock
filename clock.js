function getTime() {
  //Getting the current time
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let dayOrNight = "AM";

  //Changing to the 12 hour format
  if (hour > 12) {
    hour -= 12;
    dayOrNight = "PM";
  } else {
    dayOrNight = "AM";
  }

  document.getElementById("clockTime").innerHTML =
    hour + ":" + minutes + ":" + seconds + " " + dayOrNight;
}

setInterval(getTime, 1000);
