var submit = $("#submit");
var form = $("#form");

submit.on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    console.log($("#form").val())
    var city = $("#form").val()
    var iconCode = data.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9d07836b976ea19eafb9744bed638758")
    .then(response => response.json()) 
    .then(data => {

        $('#cityResult').text(data['name'] + " (" + moment().format('L') + ")"); 
        $('#currentIcon.src').html("<img src='" + iconUrl + "'>")
        $('#temp').text("Temperature: " + data['main']['temp'] + " °F");
        $('#humidity').text("Humidity: " + data['main']['humidity'] + "%");
        $('#wind').text("Wind Speed: " + data['wind']['speed'] + "MPH");
        // $('#uv').text(data['weather'][0]['icon']);
    })        

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=9d07836b976ea19eafb9744bed638758")
    .then(response => response.json()) 
    .then(data => {

        console.log(data.list)

        $('#day-one').text(moment().add(1, 'days').format('L'));
        $('#temp-one').text("Temperature: " + data['list'][0]["main"]["temp"] + " °F");
        $('#humidity-one').text("Humidity: " + data['list'][0]['main']['humidity'] + "%");

        $('#day-two').text(moment().add(2, 'days').format('L'));
        $('#temp-two').text("Temperature: " + data['list'][8]["main"]["temp"] + " °F");
        $('#humidity-two').text("Humidity: " + data['list'][8]['main']['humidity'] + "%");

        $('#day-three').text(moment().add(3, 'days').format('L'));
        $('#temp-three').text("Temperature: " + data['list'][16]["main"]["temp"] + " °F");
        $('#humidity-three').text("Humidity: " + data['list'][16]['main']['humidity'] + "%");

        $('#day-four').text(moment().add(4, 'days').format('L'));
        $('#temp-four').text("Temperature: " + data['list'][24]["main"]["temp"] + " °F");
        $('#humidity-four').text("Humidity: " + data['list'][24]['main']['humidity'] + "%");

        $('#day-five').text(moment().add(5, 'days').format('L'));
        $('#temp-five').text("Temperature: " + data['list'][32]["main"]["temp"] + " °F");
        $('#humidity-five').text("Humidity: " + data['list'][32]['main']['humidity'] + "%");


    })  

.catch(function (err) {
    console.log(err)
})
});
