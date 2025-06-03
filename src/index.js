const cityNameInput = document.getElementById("cityNameInput");
const cityNameResetBtn = document.getElementById("cityNameReset");
const headerCityName = document.getElementById("headerCityName");
const tempValue = document.getElementById("tempValue");
const gardenEmoji = document.getElementById("gardenContent");
let currentTemp = 70;
const skySelection = document.getElementById("skySelect");

// Wave 3
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

// Wave 2
const updateTempEmoji = () => {
    tempValue.textContent = currentTemp
    tempValue.classList.remove("red", "orange", "yellow", "green", "teal")

    if (currentTemp >= 80) {
        tempValue.classList.add("red")
        gardenEmoji.textContent = "🌞🏜️🌵🦎🔥"
    } else if (currentTemp >= 70) {
        tempValue.classList.add("orange");
        gardenEmoji.textContent = "🌸🦋🌼🌺🐝";
     } else if (currentTemp >= 60) {
        tempValue.classList.add("yellow");
        gardenEmoji.textContent = "🌲🦌🍄🌳🪵";
    } else {
        tempValue.classList.add("green");
        gardenEmoji.textContent = "❄️🌨️⛄️🌲🏔️";
    }
}

document.getElementById('increaseTempControl').addEventListener('click', () => {
    currentTemp++;
    updateTempEmoji();
})

document.getElementById('decreaseTempControl').addEventListener('click', () => {
    currentTemp--;
    updateTempEmoji();
})

updateTempEmoji();

// Wave 5
const skyValue = skySelection.value;

