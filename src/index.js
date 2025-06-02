const cityNameInput = document.getElementById("cityNameInput");
const cityNameResetBtn = document.getElementById("cityNameReset");
const headerCityName = document.getElementById("headerCityName");

function updateCityName() {
    const city = cityNameInput.value.trim(); // Used trim to get rid of leading.trailing whitespace
    if (city) {
        headerCityName.textContent = city;
    } else {
        headerCityName.textContent = '';
    }
}

cityNameInput.addEventListener('change', updateCityName);

cityNameResetBtn.addEventListener('click', () => { // Could change to just 'set'? Or did we want it to actually "reset" as it is doing right now
    cityNameInput.value = '';
    headerCityName.textContent = '';
});
let currentWeather = 70

const tempValue = document.getElementById('tempValue')
const gardenEmoji = document.getAnimations('gardenContent')

const updateTempEmoji = () => {
    tempValue.textContent = currentWeather

    tempValue.classList.remove("red", "orange", "yellow", "green", "teal")

    if (currentWeather >= 80) {
        tempValue.classList.remove("red")
        gardenEmoji.textContent = "🌞🏜️🌵🦎🔥"
    } else if (currentTemp >= 70) {
        tempValue.classList.add("orange");
        garden.textContent = "🌸🦋🌼🌺🐝";
     } else if (currentTemp >= 60) {
        tempValue.classList.add("yellow");
        garden.textContent = "🌲🦌🍄🌳🪵";
    } else {
        tempValue.classList.add("green");
        garden.textContent = "❄️🌨️⛄️🌲🏔️";
    }
}

document.getElementById('increaseTempControl').addEventListener('click', () => {
    currentWeather++;
    updateTempEmoji()
})

document.getElementById('decreaseTempControl').addEventListener('click', () => {
    currentWeather--;
    updateTempEmoji()
})

updateTempEmoji()

