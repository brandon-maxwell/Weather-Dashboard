var submit = $("#submit");
var cityTag = $("#cityResult");
var fourm = $("#fourm");

submit.on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    console.log($("#fourm").val())
    var city = $("#fourm").val()
    $.ajax({
        url: "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=9d07836b976ea19eafb9744bed638758",
        method: "GET"
    }).then(function (response) {
        $("#cityResult").text(response[0].name)
            ;
    })

})