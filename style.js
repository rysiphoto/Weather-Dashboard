//ajax call to openweather API

//search function

//div that prepends search results

//div that populates with Location / Date / temp / humidity / wind speed and UV index
//div that shows five single day forecast boxes













//ajax call to openweather API

$("#submit-btn").on("click", function (searchCity) {
    event.preventDefault();
    var apiKey = "acb34669f78688e5766e6da35dca440a";
    var searchCity = $("#searchCity").val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + apiKey;

    // var searchResults

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        var results = response.data;
        var kFL = (response.main.feels_like - 273.15) * 1.80 + 32;
        var k = (response.main.temp - 273.15) * 1.80 + 32;
        var dateNow = moment().format('l');
        var cityName = $('<h2>').text(response.name);
        var todayDate = $('<h2>').text("(" + dateNow + ")");
        var cityTemp = $('<h6>').text("Temperature: " + k.toFixed(1) + " F");
        var cityFL = $('<h6>').text("Feels Like: " + kFL.toFixed(1) + " F");
        var cityHum = $('<h6>').text("Humidity: " + response.main.humidity + "%");
        var cityWind = $('<h6>').text("Wind Speed: " + response.wind.speed + " mph");

        $("#cityNameBanner").prepend(cityName, todayDate);
        $("#cityWeather").append(cityTemp, cityFL, cityHum, cityWind);

    });



});
$("#submit-btn").on("click", function (searchCity) {
    event.preventDefault();
    var apiKey = "acb34669f78688e5766e6da35dca440a";
    var searchCity = $("#searchCity").val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=" + apiKey;

    // var searchResults

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        var results = data.data;
        console.log(data);
        // var kFL = (data.list[0].main.feels_like - 273.15) * 1.80 + 32;
        // var k = (data.list[0].main.temp - 273.15) * 1.80 + 32;
        var k1 = (data.list[7].main.temp_max - 273.15) * 1.80 + 32;
        var k2 = (data.list[15].main.temp_max - 273.15) * 1.80 + 32;
        var k3 = (data.list[23].main.temp_max - 273.15) * 1.80 + 32;
        var k4 = (data.list[31].main.temp_max - 273.15) * 1.80 + 32;
        var k5 = (data.list[39].main.temp_max - 273.15) * 1.80 + 32;


        var cityTemp1 = $('<h6>').text("Temp: " + k1.toFixed(2) + " F");
        var cityTemp2 = $('<h6>').text("Temp: " + k2.toFixed(2) + " F");
        var cityTemp3 = $('<h6>').text("Temp: " + k3.toFixed(2) + " F");
        var cityTemp4 = $('<h6>').text("Temp: " + k4.toFixed(2) + " F");
        var cityTemp5 = $('<h6>').text("Temp: " + k5.toFixed(2) + " F");

        $("#fiveDay1Date").append(moment().add(1, 'days').format('l'), cityTemp1);
        $("#fiveDay2Date").append(moment().add(2, 'days').format('l'), cityTemp2);
        $("#fiveDay3Date").append(moment().add(3, 'days').format('l'), cityTemp3);
        $("#fiveDay4Date").append(moment().add(4, 'days').format('l'), cityTemp4);
        $("#fiveDay5Date").append(moment().add(5, 'days').format('l'), cityTemp5);

    });
});
