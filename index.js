// const myApi = "https://api.openweathermap.org/data/2.5/weather?lat=-25.7478676&lon=28.2292712&appid=27d67740c13712be69d1960c02c030eb";
// let mydata =[];
// const details = document.getElementById("details");

// fetch(myApi)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//     //   console.log(data);
//       mydata.push(data);
//     //   console.log(mydata[0].main.humidity)
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
//     console.log(mydata)




// // const humanity = document.getElementById("humanity");

// // humanity.innerHTML = `humidity : ${mydata[0]}`


// // ================geting time=============
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


// localTime.innerHTML = `local time is `


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
    console.log(day)
}
console.log(getDay(use));



function getMonth(month) {
    if (month == 11) {
        return newMonth = "December"
    } else if (month == 12) {
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
    console.log(newMonth)
}
function pmAm(hours) {
    if (hours <= 12) {
        return last = 'am'
    } else {
        return last = 'pm'
    }
}

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
        console.log(name, icon, temp, humidity, speed, description);
        document.querySelector('#city').innerHTML = "weather in " + name;
        document.querySelector("#icon").src = 'https://openweathermap.org/img/w/' + icon + ".png"
        document.querySelector("#description").innerHTML = description;
        document.querySelector("#temp").innerHTML = temp + `<span>&deg</span>`;
        details.innerHTML = `<h3 class="text-center" >${s.getDay()} ${getMonth(month)} ${s.getFullYear()}</h3>
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
// const search = document.getElementById("search");
// search.addEventListener("click", function(){
//     weather.searchWeather();

// })
document.getElementById("search-input").addEventListener('keyup',function(event) {
    if(event.key == "Enter"){
        weather.searchWeather();
    }
})







