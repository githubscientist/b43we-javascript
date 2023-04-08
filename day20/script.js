const apiKey = '9b3abd72af5e8ee4c215adb53b59b0e5';

let form = document.getElementById('weather-form');
let weatherInfo = document.getElementById('weather-info');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let city = document.getElementById('city').value;
    getWeather(city);
});

async function getWeather(city) {
    // make a request to the api
    // get the details
    // parse the details to the html

    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        let data = await response.json();
        
        let cityName = data.name;
        let temperature = data.main.temp;
        let description = data.weather[0].description;
        let iconId = data.weather[0].icon;
        let weatherID = data.weather[0].id;
        
        let iconResponse = await fetch(`https://openweathermap.org/img/wn/${iconId}.png`);
        let iconBlob = await iconResponse.blob();
        let iconUrl = URL.createObjectURL(iconBlob);
        
        let card = `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h3 class="card-title">${cityName}</h3>
                        </div>
                        <div class="card-body">
                            <div class="text-center">
                                <img src="${iconUrl}" alt="Weather icon">
                                <p class="temperature mb-0">${temperature}&deg;C</p>
                                <p class="description">${description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        weatherInfo.innerHTML = card;
        
        // set the background image for the app based on the temperature
        // check if the weather id is in the range of 800
        if (weatherID == 800) {
            document.body.style.backgroundImage = "url('images/sunny.jpg')";
        } else if (weatherID >= 801 && weatherID <= 804) {
            document.body.style.backgroundImage = "url('images/cloudy.jpg')";
            document.body.style.backgroundSize = 'cover';
        } else if (weatherID >= 600 && weatherID <= 622) {
            document.body.style.backgroundImage = "url('images/snowy.jpg')";
        } else if (weatherID >= 200 && weatherID <= 232) {
            document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
        } else if (weatherID >= 500 && weatherID <= 531) {
            // document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
            // document.body.style.backgroundSize = 'cover';
            document.body.classList.add('thunderstorm');
        }
        
        console.log(weatherID);
        
    } catch (error) {
        console.error('error fetching weather data');
    }
}