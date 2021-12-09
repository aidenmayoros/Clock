function getCurrentTime() {
  //Getting the current time
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let dayOrNight = "AM";

  document.getElementById("clockTime").innerHTML =
    hour + ":" + minutes + ":" + seconds + " " + dayOrNight;
}

setInterval(getCurrentTime, 1000);
