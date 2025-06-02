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

