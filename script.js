(function() {
    var weather  = {
        "apiKey" : "d150e6172dab7176bc586443a59e9d98",
        fetchWeather: function(city) {
            fetch("https://api.openweathermap.org/data/2.5/weather?q="
             + city 
             + "&units=metric&appid=" 
             + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
        },
        displayWeather: function(data) {
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            document.querySelector(".city").innerHTML = `Weather in ${name}`;
            document.querySelector(".temp").innerHTML = `${temp}°C`;
            document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
            document.querySelector(".description").innerHTML = `${description}`;
            document.querySelector(".humidity").innerHTML = `Humidity: ${humidity}%`;
            document.querySelector(".wind").innerHTML = `Wind speed: ${speed}km/h`;
        },
        search: function(){
            this.fetchWeather(document.querySelector(".search_bar").value)
        }
    };
    
    document.querySelector(".search button").addEventListener("click", function(){
        weather.search();
    })
    
    document.querySelector(".search_bar").addEventListener("keyup", function(){
        if (event.key == "Enter") {
            weather.search();
        }
    })
})();

