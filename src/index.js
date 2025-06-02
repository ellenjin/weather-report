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