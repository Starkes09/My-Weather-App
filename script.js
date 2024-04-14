const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f0ae13b5e9mshde139a2fe6e5fdbp1de4c2jsn048641c4941f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const cityName = document.getElementById('cityName');
const cloud_pct = document.getElementById('cloud_pct');
const temperature = document.getElementById('temp');
const feels_like = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const min_temp = document.getElementById('min_temp');
const max_temp = document.getElementById('max_temp');
const wind_speed = document.getElementById('wind_speed');
const wind_degrees = document.getElementById('wind_degrees');
const sunrise = document.getElementById('sunrise'); // Ensure you have an element with ID 'sunrise' in your HTML
const sunset = document.getElementById('sunset'); // Ensure you have an element with ID 'sunset' in your HTML

const getWeather = (city) => {
    cityName.innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            cloud_pct.innerHTML = response.cloud_pct;
            temperature.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = response.sunrise; // Ensure you have an element with ID 'sunrise' in your HTML
            sunset.innerHTML = response.sunset; // Ensure you have an element with ID 'sunset' in your HTML
        })
        .catch(err => console.error(err));
};

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    getWeather(city);
});

// Initial weather display for Delhi
getWeather("Delhi");


