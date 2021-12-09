async function firstTimeHandler(value) {
  let result = await locationHandler(value);
  let hourAndMinutes = result.split("").reverse().splice(3).reverse().join("");
  let hour = hourAndMinutes.split("").slice(0, 2);

  if (hour[0] == "0") {
    document.getElementById("display-first-time").innerText =
      hourAndMinutes.split("").slice(1).join("") + " AM";
  } else {
    let newHour = changeHourFormat(hour);
    document.getElementById("display-first-time").innerText =
      newHour + ":" + hourAndMinutes.split(":")[1] + " PM";
  }
}

async function secondTimeHandler(value) {
  let result = await locationHandler(value);
  let hourAndMinutes = result.split("").reverse().splice(3).reverse().join("");
  let hour = hourAndMinutes.split("").slice(0, 2);

  if (hour[0] == "0") {
    document.getElementById("display-second-time").innerText =
      hourAndMinutes.split("").slice(1).join("") + " AM";
  } else {
    let newHour = changeHourFormat(hour);
    document.getElementById("display-second-time").innerText =
      newHour + ":" + hourAndMinutes.split(":")[1] + " PM";
  }
}

function changeHourFormat(hour) {
  if (hour[0] + hour[1] < 12) {
    return hour;
  }

  let newHour = hour[0] + hour[1];
  return (newHour - 12).toString();
}

function locationHandler(location) {
  if (location === "") {
    return;
  }

  if (location === "Tokyo") {
    return getCityTime(
      "api.timezonedb.com/v2.1/get-time-zone?key=8HW21ZFUOD7B&format=json&by=zone&zone=Asia/Tokyo"
    );
  }

  if (location === "NewYorkCity") {
    return getCityTime(
      "api.timezonedb.com/v2.1/get-time-zone?key=8HW21ZFUOD7B&format=json&by=zone&zone=America/New_York"
    );
  }

  if (location === "London") {
    return getCityTime(
      "api.timezonedb.com/v2.1/get-time-zone?key=8HW21ZFUOD7B&format=json&by=zone&zone=Europe/London"
    );
  }

  if (location === "Sydney/Australia") {
    return getCityTime(
      "api.timezonedb.com/v2.1/get-time-zone?key=8HW21ZFUOD7B&format=json&by=zone&zone=Australia/Sydney"
    );
  }

  if (location === "Vancouver") {
    return getCityTime(
      "api.timezonedb.com/v2.1/get-time-zone?key=8HW21ZFUOD7B&format=json&by=zone&zone=America/Vancouver"
    );
  }

  if (location === "Shanghai/China") {
    return getCityTime(
      "api.timezonedb.com/v2.1/get-time-zone?key=8HW21ZFUOD7B&format=json&by=zone&zone=Asia/Shanghai"
    );
  }

  if (location === "Monrovia") {
    return getCityTime(
      "api.timezonedb.com/v2.1/get-time-zone?key=8HW21ZFUOD7B&format=json&by=zone&zone=Africa/Monrovia"
    );
  }
}

async function fetchTimeJSON(apiRequest) {
  const response = await fetch(`http://${apiRequest}`);
  const time = await response.json();
  return time;
}

function getCityTime(apiRequest) {
  return fetchTimeJSON(apiRequest).then((data) => {
    let locationTime = data.formatted.split(" ")[1];
    return locationTime;
  });
}

//API key: 8HW21ZFUOD7B
