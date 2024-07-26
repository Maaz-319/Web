$(function () {
    $("#container").hide().slideDown(1000);
    $("#user-input").focus();
    $("#heading").hide().fadeIn(1000);

    $("#btn").on("click", function () {
        fetchData();
    });

    $("#user-input").on("keydown", function (event) {
        if (event.keyCode === 13) {
            fetchData();
        }
    });

    function fetchData() {
        $(".square").show().css({
            "animation-name": "square_",
            "animation-duration": "2s",
            "animation-iteration-count": "infinite",
            "border": "5px solid limegreen",
            "animation-direction": "alternate-reverse"
        });

        var city = $("#user-input").val();
        var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d4be8e123adba5a49a451c7bd54e558b`;
        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                $(".square").hide();
                if (data.cod === 200) {
                    var Temperature = (data.main.temp - 273.15).toFixed(0);
                    var feels_like = (data.main.feels_like - 273.15).toFixed(0);
                    var weatherInfo = `
                            <img id='weather-icon' src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">
                            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                            <p>Temperature: ${Temperature}°C , Feels like ${feels_like}°C</p>
                            <p>Weather: ${data.weather[0].main}</p>
                            <p>Humidity: ${data.main.humidity}%</p>
                            <p>Wind Speed: ${data.wind.speed} m/s</p>
                        `;
                    $('#field').html(weatherInfo);
                    $("#weather-icon").css("margin-left", "30px");
                } else {
                    $('#field').html(`<p>${data.message}</p>`);
                }
            },
            error: function (error) {
                $(".square").hide();
                console.error('Error fetching weather data:', error);
                $('#field').html('<p>Error fetching weather data</p>');
            }
        });
    }
});