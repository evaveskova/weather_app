const getData = (e) => {
  e.preventDefault();
  const city = document.getElementById('city-input').value;
  const API_KEY = '2b973a9ddd64acbb314bdaa3d2f4ec6b';
  const url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;
  fetch(url)
    .then( response => response.json())
    .then( ({ weather, main}) => {
      console.log(weather, main);
      const result = document.getElementById('result');
      result.classList.remove('result-hidden');
      result.classList.add('result-visible');
      const cityResult = document.getElementById('city-name');
      const cityHeader = document.createElement('H3');
      cityHeader.textContent = city;
      cityResult.appendChild(cityHeader);


    })
}

export default getData;
