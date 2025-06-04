const cityNameInput = document.getElementById('cityNameInput');
const cityNameResetBtn = document.getElementById('cityNameReset');
const headerCityName = document.getElementById('headerCityName');
const tempValue = document.getElementById('tempValue');
const gardenEmoji = document.getElementById('gardenContent');
const currentTempButton = document.getElementById('currentTempButton');
const applyCityArrow = document.getElementById('applyCity');
const skySelection = document.getElementById('skySelect');
const skyDisplay = document.getElementById('skyDisplay');
let currentTemp = 70;

function updateCityName() {
  const city = cityNameInput.value.trim();
  if (city) {
    headerCityName.textContent = city;
  } else {
    headerCityName.textContent = '';
  }
}

applyCityArrow.addEventListener('click', () => {
  updateCityName();
});

cityNameInput.addEventListener('change', updateCityName);
const skyValue = skySelection.value;

cityNameResetBtn.addEventListener('click', () => {
  cityNameInput.value = 'Seattle';
  headerCityName.textContent = 'Seattle';
});

const updateTempEmoji = () => {
  tempValue.textContent = currentTemp;
  tempValue.classList.remove('red', 'orange', 'yellow', 'green', 'teal');

  if (currentTemp >= 80) {
    tempValue.classList.add('red');
    gardenEmoji.textContent = '🌞🌵🦎';
  } else if (currentTemp >= 70) {
    tempValue.classList.add('orange');
    gardenEmoji.textContent = '🌸🦋🌼';
  } else if (currentTemp >= 60) {
    tempValue.classList.add('yellow');
    gardenEmoji.textContent = '🌲🦌🍄';
  } else {
    tempValue.classList.add('green');
    gardenEmoji.textContent = '🌨️⛄️🏔️';
  }
};

document.getElementById('increaseTempControl').addEventListener('click', () => {
  currentTemp++;
  updateTempEmoji();
});

document.getElementById('decreaseTempControl').addEventListener('click', () => {
  currentTemp--;
  updateTempEmoji();
});

currentTempButton.addEventListener('click', () => {
  const city = headerCityName.textContent;

  if (city) {
    getLatandLon(city);
  } else {
    alert('Please enter a city name!');
  }
});

const getLatandLon = (city) => {
  axios
    .get('http://localhost:5000/location', {
      params: { q: city },
    })
    .then((response) => {
      const lat = response.data[0]['lat'];
      const lon = response.data[0]['lon'];
      getRealWeather(lat, lon);
    })
    .catch((error) => {
      console.log('Error:', error);
      alert('Enter right city name!');
    });
};

const getRealWeather = (lat, lon) => {
  axios
    .get('http://localhost:5000/weather', {
      params: { lat, lon },
    })
    .then((response) => {
      const tempKelvin = response.data.main.temp;
      currentTemp = Math.round(((tempKelvin - 273.15) * 9) / 5 + 32);
      updateTempEmoji();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Could not get weather data.');
    });
};

updateTempEmoji();

skySelection.addEventListener('change', () => {
  const selected = skySelection.value;

  switch (selected) {
    case 'Sunny':
      skyDisplay.textContent = '☀️';
      break;
    case 'Cloudy':
      skyDisplay.textContent = '☁️';
      break;
    case 'Rainy':
      skyDisplay.textContent = '🌧️';
      break;
    case 'Snowy':
      skyDisplay.textContent = '❄️';
      break;
    default:
      skyDisplay.textContent = '';
  }
});
