import setBackground from './weather';

const getData = (e) => {
  e.preventDefault();
  const city = document.getElementById('city-input').value;
  const API_KEY = '2b973a9ddd64acbb314bdaa3d2f4ec6b';
  const url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`;
  if(city == ""){
    return false
  }
  fetch(url)
    .then( response => response.json())
    .then( ({ weather, main}) => {
      const result = document.getElementById('result');
      result.classList.remove('result-hidden');
      result.classList.add('result-visible');
      const cityResult = document.getElementById('city-name');
      cityResult.textContent = "";
      const cityHeader = document.createElement('H3');
      cityHeader.textContent = city;
      cityResult.appendChild(cityHeader);

      const weatherType = document.getElementById('weather-type');
      weatherType.textContent = "";
      const weatherDescription = document.createElement('H3');
      weatherDescription.textContent = `${weather[0].main}`;
      weatherType.appendChild(weatherDescription);
      setBackground(weather[0].main);

      const weatherTemperature = document.getElementById('weather-temp');
      weatherTemperature.textContent = "";
      const temperatureResult = document.createElement('H3');
      temperatureResult.textContent = `${main.temp}°C`;
      weatherTemperature.appendChild(temperatureResult);

      document.getElementById('city-input').value = "";
    })
}

export default getData;
