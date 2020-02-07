import setBackground from './weather';

const getData = async e => {
  e.preventDefault();
  const city = document.getElementById('city-input').value;
  const tempUnit = document.getElementById('temp-dropdown').checked
    ? 'imperial'
    : 'metric';
  const unitChoice = document.getElementById('unit-choice');
  unitChoice.textContent = `Change to ${
    tempUnit === 'imperial' ? 'Celsius' : 'Farhenheit'
  }`;
  const API_KEY = '2b973a9ddd64acbb314bdaa3d2f4ec6b';
  const url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=${tempUnit}`;
  if (city === '') {
    return false;
  }

  try {
    const data = await fetch(url);
    const { weather, main } = await data.json();
    const result = document.getElementById('result');
    result.classList.remove('result-hidden');
    result.classList.add('result-visible');
    const cityResult = document.getElementById('city-name');
    cityResult.textContent = '';
    const cityHeader = document.createElement('H3');
    cityHeader.textContent = city;
    cityResult.appendChild(cityHeader);

    const weatherType = document.getElementById('weather-type');
    weatherType.textContent = '';
    const weatherDescription = document.createElement('H3');
    weatherDescription.textContent = `${weather[0].main}`;
    weatherType.appendChild(weatherDescription);
    setBackground(weather[0].main);

    const weatherTemperature = document.getElementById('weather-temp');
    weatherTemperature.textContent = '';
    const temperatureResult = document.createElement('H3');
    if (tempUnit === 'metric') {
      temperatureResult.textContent = `${main.temp}°C`;
    } else {
      temperatureResult.textContent = `${main.temp}°F`;
    }
    weatherTemperature.appendChild(temperatureResult);
  } catch (error) {
    const cityResult = document.getElementById('city-name');
    const weatherType = document.getElementById('weather-type');
    const weatherTemp = document.getElementById('weather-temp');
    cityResult.textContent = '';
    weatherType.textContent = '';
    weatherTemp.textContent = '';
    const cityError = document.createElement('P');
    cityError.textContent = 'Please input a valid city.';
    cityResult.appendChild(cityError);
  }

  return true;
};

export default getData;
