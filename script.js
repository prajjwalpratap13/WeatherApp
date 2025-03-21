let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let perc = document.querySelector(".perc");
let speed = document.querySelector(".speed");
let input = document.querySelector(".input");
let btn = document.querySelector("button");
let img = document.querySelector(".weather-img");

let apiKey = "da3c00accb0fcdb4b2f12ee6836848a7";
let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function getData(cityName) {
  let data = await fetch(url + cityName + `&appid=${apiKey}`);
  let result = await data.json();

  if (data.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".none").style.display = "none";
  } else {
    temp.innerHTML = Math.round(result.main.temp) + "°C";
    city.innerHTML = result.name;
    perc.innerHTML = result.main.humidity + "%";
    speed.innerHTML = result.wind.speed + " Km/h";

    if (result.weather[0].main == "Clouds") {
      img.src = "Assets/clouds.png";
    } else if (result.weather[0].main == "Clear") {
      img.src = "Assets/clear.png";
    }
    if (result.weather[0].main == "Rain") {
      img.src = "Assets/rain.png";
    }
    if (result.weather[0].main == "Drizzle") {
      img.src = "Assets/drizzle.png";
    }
    if (result.weather[0].main == "Mist") {
      img.src = "Assets/mist.png";
    }
    document.querySelector(".none").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

btn.addEventListener("click", () => {
  getData(input.value);
});
