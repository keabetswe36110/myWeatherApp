
// =====================================================working current method===================================

// =========================================================geting time=============================
const localTime = document.getElementById("local-time");
const lastD = document.getElementById("last")
let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let last;

let s = new Date();
let use = s.getDay();
let day;
let month = s.getMonth();
let newMonth;

// =======================================================display days instead of numbers==============
function getDay(use) {
    if (use == 0) {
        return day = "sunday"
    } else if (use == 1) {
        return day = "monday"
    } else if (use == 2) {
        return day = "Tuesday"
    } else if (use == 3) {
        return day = "wednesday"
    } else if (use == 4) {
        return day = "thursday"
    } else if (use == 5) {
        return day = "Friday"
    } else {
        return day = "saturday"
    }
}
// ==========================================================display months instead of numbers================

function getMonth(month) {
    if (month == 11) {
        return newMonth = "December"
    } else if (month == 0) {
        return newMonth = "January"
    }
    else if (month == 1) {
        return newMonth = "February"
    } else if (month == 2) {
        return newMonth = "March"
    } else if (month == 3) {
        return newMonth = "April"
    } else if (month == 4) {
        return newMonth = "May"
    } else if (month == 5) {
        return newMonth = "June"
    } else if (month == 6) {
        return newMonth = "July"
    } else if (month == 7) {
        return newMonth = "August"
    } else if (month == 8) {
        return newMonth = "September"
    } else if (month == 9) {
        newMonth = "October"
    } else if (month == 10) {
        return newMonth = "November"
    }
}

// =============================================tell if is morning or late=====================
function pmAm(hours) {
    if (hours <= 12) {
        return last = 'am'
    } else {
        return last = 'pm'
    }
}
// =============================================fetch current weather API =======================

let weather = {
    apiKey: "27d67740c13712be69d1960c02c030eb",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid="
            + this.apiKey)
            .then(response => response.json())
            .then((data) => this.displayWeather(data))


    }, displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        // console.log(name, icon, temp, humidity, speed, description);
        document.getElementById('city').innerHTML = "weather in " + name;
        document.getElementById("icon").src = 'https://openweathermap.org/img/wn/' + icon + "@2x.png"
        document.getElementById("description").innerHTML = description;
        document.getElementById("temp").innerHTML = temp + `<span> &deg C</span>`;
        details.innerHTML = `<h3 class="text-center" >${s.getDate()} ${getMonth(month)} ${s.getFullYear()}</h3>
                            <div class="time flex align-center gap-icon">
                                <span class="material-symbols-outlined" style="margin-left: 20px;">schedule</span>
                                <h3 id="local-time">local time is ${s.getHours()} : ${s.getMinutes()} ${pmAm(hours)}</h3>
                            </div>
                            <div class="humanity flex align-center gap-icon">
                                <span class="material-symbols-outlined" style="margin-left: 20px;">dew_point</span>
                                <h3 id="humanity">humanity is ${humidity}%</h3>
                            </div> 
                            <div class="wind flex align-center gap-icon">
                                <span class="material-symbols-outlined" style="margin-left: 20px;">air</span>
                                <h3>wind is ${speed} km/h</h3>
                            </div>`

    }, searchWeather : function () {
        this.fetchWeather(document.getElementById("search-input").value);
    }

}
document.getElementById("search-input").addEventListener('keyup',function(event) {
    if(event.key == "Enter"){
        document.getElementById("welcome").style.display = "none";
        weather.searchWeather();
        getCityCoordinates();
        document.getElementById("search-input").value = "";
    }
})

// ======================================five days forecast==============================================


const API_KEY = "27d67740c13712be69d1960c02c030eb";


const getWeatherDetails = (cityName, lat,lon) => {
    const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    
    fetch(WEATHER_API_URL).then(res => res.json()).then(data =>{
         
         const uniqueForecastDays = [];
         const fiveDaysForecast = data.list.filter(forecast => {
            const forecastDate = new Date(forecast.dt_txt).getDate();
            if(!uniqueForecastDays.includes(forecastDate)){
                return uniqueForecastDays.push(forecastDate);
            }
         });

         fiveDaysForecast.forEach((item,i) => {
            if(item.dt_txt.split(" ")[0] == new Date().getDate){
                const todayDate = "current day"
            }
            document.getElementById("day"+i).innerHTML = `<h4>${item.dt_txt.split(" ")[0]}</h4>
            <img id="icon${i}" src="https://openweathermap.org/img/w/${item.weather[0].icon}.png" alt="idk">
            <h5>${(item.main.temp - 273.15).toFixed(2)}&degC</h5>
            <h5>${item.weather[0].description}</h5>`
            
         });
    }).catch(()=>{
        alert("an error has occured while fetching the weather forecast")
    });
}

const getCityCoordinates = () => {
    const cityName = document.getElementById("search-input").value.trim();
    if(!cityName) return;
    const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=27d67740c13712be69d1960c02c030eb`;

    // ===========get entered city coordinates from API response=========================================================
    fetch(GEOCODING_API_URL).then(res => res.json()).then(data =>{
        if(!data.length)return alert(`NO cordinates found for ${cityName}`);
        const{name, lat, lon} = data[0];
        getWeatherDetails(name, lat, lon);
    }).catch(()=>{
        alert("an error has occured while fetching the coordinates")
    });
}








