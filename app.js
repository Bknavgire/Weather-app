const apiKey = "d6de77c774634f8e9d1139d35fae73c7";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const responce = await fetch(apiUrl + city +`&appid=${apiKey}`)
    var data= await responce.json();
    

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";

    if(data.weather[0].main == 'clouds'){
        weatherIcon.src = "/images/clouds.png"
    }
    else if (data.weather[0].main == 'mist'){
        weatherIcon.src = "/images/mist.png"
    }
    else if (data.weather[0].main == 'snow'){
        weatherIcon.src = "/images/snow.png"
    }
    else if (data.weather[0].main == 'rain'){
        weatherIcon.src = "/images/rain.png"
    }
}

searchBtn.addEventListener("click",function(){
    checkWeather(searchBox.value);

})

