import './style.css';
// import getWeather from './api.js';
const getData = (e) => {
  e.preventDefault();
  console.log('test');
  const city = document.getElementById('city-input').value;
  const API_KEY = '2b973a9ddd64acbb314bdaa3d2f4ec6b';
  const url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;
  fetch(url)
    .then( response => response.json())
    .then( ({ weather, main}) => {
      console.log(weather, main)
    })
}
const inputForm = document.getElementById('input-form');
inputForm.addEventListener('submit', getData, false);



// getWeather();
