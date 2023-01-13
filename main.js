const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8472a9b819msh60f384dd736638fp1b3b4bjsn48de6e823e4b',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
}; 

//start up
const startCity = document.querySelector(".city").innerHTML;
const icon = document.querySelector(".icon");

const searchbox = document.querySelector(".search-box");
// const daybox = document.querySelector(".days");

let city = document.querySelector('.city');
let country = document.querySelector(".country");

// day 1
let temp = document.querySelector(".temp");
let weatherType = document.querySelector(".weather-type");
let weatherIcon = document.querySelector(".weather-icon");
let date = document.querySelector(".date");

// day 2
let temp2 = document.querySelector(".temp2");
let weatherType2 = document.querySelector(".weather-type2");
let weatherIcon2 = document.querySelector(".weather-icon2");
let date2 = document.querySelector(".date2");

// day 3
let temp3 = document.querySelector(".temp3");
let weatherIcon3 = document.querySelector(".weather-icon3");
let weatherType3 = document.querySelector(".weather-type3");
let date3 = document.querySelector(".date3");


icon.addEventListener("click",function(){
    getResults(searchbox.value)
})


function startResults(){
    // fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q='+startCity+'&days=2',options)
    // .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));

    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${startCity}&days=3`,options)
	.then(response => response.json())
	.then(response => displayResults(response))
	.catch(err => console.error(err));
}

startResults();

searchbox.addEventListener("keypress",setQuery);
function setQuery(evt){
     if(evt.keyCode == 13){
         getResults(searchbox.value);
        //  console.log(searchbox.value);
     }
}

function getResults(city){
    // fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchbox.value+'&units=metric&appid=7638c144a312ced0828ccfdeb2684209')
    // .then(weather => {
    //         return weather.json();
    //     })
    // .then(displayResults)
    // .catch(()=>{
    //         alert("Error. Please try another city")
    //     })

    //     fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q='+city+'&days='+day+',options')
    //     .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));

    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, options)
	.then(response => response.json())
	.then(response => displayResults(response))
	.catch(err => console.error(err));
    
}

function displayResults(weather){
    console.log("display ftn")
    console.log(weather);
    city.innerText = `${weather.location.name}`;
    country.innerText = `${weather.location.country}`;

    // day 1
    date.innerText = `${weather.forecast.forecastday[0].date}`;
    temp.innerText =  `${weather.forecast.forecastday[0].day.avgtemp_c}`;

    weatherType.innerText = `${weather.forecast.forecastday[0].day.condition.text}`;
    weatherIcon.setAttribute('src',`${weather.forecast.forecastday[0].day.condition.icon}`);

    // day 2
    date2.innerText = `${weather.forecast.forecastday[1].date}`;
    temp2.innerText = `${weather.forecast.forecastday[1].day.avgtemp_c}`;
    weatherType2.innerText = `${weather.forecast.forecastday[1].day.condition.text}`;
    weatherIcon2.setAttribute('src',`${weather.forecast.forecastday[1].day.condition.icon}`);

    // day 3
    date3.innerText = `${weather.forecast.forecastday[2].date}`;
    temp3.innerText = `${weather.forecast.forecastday[2].day.avgtemp_c}`;
    weatherType3.innerText = `${weather.forecast.forecastday[2].day.condition.text}`;
    weatherIcon3.setAttribute('src',`${weather.forecast.forecastday[2].day.condition.icon}`);
}

