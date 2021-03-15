var submit = $("#submit");
var form = $("#form");

submit.on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    console.log($("#form").val())
    var city = $("#form").val()

    localStorage.setItem("city", city)

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9d07836b976ea19eafb9744bed638758")
        .then(response => response.json())
        .then(data => {

            $('#cityResult').text(data['name'] + " (" + moment().format('L') + ")");
            $('#currentIcon').html("<img src='http://openweathermap.org/img/wn/" + data['weather'][0]['icon'] + ".png'>");
            $('#temp').text("Temperature: " + data['main']['temp'] + " °F");
            $('#feelsLike').text("Feels Like: " + data['main']['feels_like'] + " °F");
            $('#humidity').text("Humidity: " + data['main']['humidity'] + "%");
            $('#wind').text("Wind Speed: " + data['wind']['speed'] + "MPH");

            // uv index - also used 'dot' formating rather than bracket to reach data fetched
            var lat = data.coord.lat;
            var lon = data.coord.lon;

            fetch("https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=9d07836b976ea19eafb9744bed638758")
                .then(response => response.json())
                .then(data => {

                    $('#UV').text(data.value);
                    if (data.value <= 2) {
                        $('#UV').addClass("low")
                    }
                    if (data.value > 2 && data.value <= 5) {
                        $('#UV').addClass("moderate")
                    }
                    if (data.value > 5) {
                        $('#UV').addClass("severe")
                    }
                })
        })

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=9d07836b976ea19eafb9744bed638758")
        .then(response => response.json())
        .then(data => {

            console.log(data.list)

            $('#day-one').text(moment().add(1, 'days').format('L'));
            $('#icon-one').html("<img src='http://openweathermap.org/img/wn/" + data['list'][1]['weather'][0]["icon"] + ".png'>");
            $('#temp-one').text("Temperature: " + data['list'][0]["main"]["temp"] + " °F");
            $('#humidity-one').text("Humidity: " + data['list'][0]['main']['humidity'] + "%");

            $('#day-two').text(moment().add(2, 'days').format('L'));
            $('#icon-two').html("<img src='http://openweathermap.org/img/wn/" + data['list'][8]['weather'][0]["icon"] + ".png'>");
            $('#temp-two').text("Temperature: " + data['list'][8]["main"]["temp"] + " °F");
            $('#humidity-two').text("Humidity: " + data['list'][8]['main']['humidity'] + "%");

            $('#day-three').text(moment().add(3, 'days').format('L'));
            $('#icon-three').html("<img src='http://openweathermap.org/img/wn/" + data['list'][16]['weather'][0]["icon"] + ".png'>");
            $('#temp-three').text("Temperature: " + data['list'][16]["main"]["temp"] + " °F");
            $('#humidity-three').text("Humidity: " + data['list'][16]['main']['humidity'] + "%");

            $('#day-four').text(moment().add(4, 'days').format('L'));
            $('#icon-four').html("<img src='http://openweathermap.org/img/wn/" + data['list'][24]['weather'][0]["icon"] + ".png'>");
            $('#temp-four').text("Temperature: " + data['list'][24]["main"]["temp"] + " °F");
            $('#humidity-four').text("Humidity: " + data['list'][24]['main']['humidity'] + "%");

            $('#day-five').text(moment().add(5, 'days').format('L'));
            $('#icon-five').html("<img src='http://openweathermap.org/img/wn/" + data['list'][32]['weather'][0]["icon"] + ".png'>");
            $('#temp-five').text("Temperature: " + data['list'][32]["main"]["temp"] + " °F");
            $('#humidity-five').text("Humidity: " + data['list'][32]['main']['humidity'] + "%");

            $('.history').prepend("<li class='list-group-item'>" + localStorage.getItem("city", city) + "</ul>");

            $('.results').css("visibility", "visible");
            $('.history').css("visibility", "visible");

        })

        .catch(function (err) {
            console.log(err)
        })
});

