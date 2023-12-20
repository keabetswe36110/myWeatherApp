const myApi = "https://api.openweathermap.org/data/2.5/weather?lat=-25.7478676&lon=28.2292712&appid=27d67740c13712be69d1960c02c030eb";
let mydata =[];
fetch(myApi)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
    //   console.log(data);
      mydata.push(data);
      console.log(mydata[0].main.humidity)
    })
    .catch(error => {
      console.error('Error:', error);
    });
    console.log(mydata)


const humanity = document.getElementById("humanity");

// humanity.innerHTML = `humidity : ${mydata[0]}`

// ================geting time=============
const localTime = document.getElementById("local-time");
const lastD = document.getElementById("last")
let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let last ;




let s = new Date();
let use = s.getDay();
let day ;
let month =s.getMonth();
let newMonth;

localTime.innerHTML = `local time is ${hours} : ${minutes} ${pmAm(hours)}`


function getDay(use){
    if (use==0) {
        day = "sunday"
    } else if(use == 1){
        day = "monday"
    }else if(use == 2){
        day = "Tuesday"
    }else if(use == 3){
        day = "wednesday"
    }else if(use == 4){
        day = "thursday"
    }else if(use == 5){
        day = "Friday"
    }else{
        day = "saturday"
    }
    console.log(day)
}

function getMonth(month){
    if (month == 11) {
        newMonth = "December"
    } else if(month==12){
        newMonth = "January"
    }
    else if(month == 1){
        newMonth = "February"
    }else if(month == 2){
        newMonth = "March"
    }else if(month == 3){
        newMonth = "April"
    }else if(month == 4){
        newMonth = "May"
    }else if(month == 5){
        newMonth = "June"
    }else if(month == 6){
        newMonth = "July"
    }else if(month == 7){
        newMonth = "August"
    }else if(month == 8){
        newMonth = "September"
    }else if(month==9){
        newMonth = "October"
    }else if(month == 10){
        newMonth = "November"
    }
    console.log(newMonth)
}
function pmAm(hours){
    if (hours<=12) {
        return last = 'am'
    } else {
        return last = 'pm'
    }
}


