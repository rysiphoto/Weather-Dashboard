//div that prepends search results
//div that shows five single day forecast boxes
var searchCityArr = [];

// save previous searches

//ajax call to openweather API

$("#submit-btn").on("click", function (searchCity) {
    event.preventDefault();

    var apiKey = "acb34669f78688e5766e6da35dca440a";
    var searchCity = $("#searchCity").val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + apiKey;

    // var searchResults
    //div that populates with Location / Date / temp / humidity / wind speed and UV index
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var cityName = response.name;
        var kFL = (response.main.feels_like - 273.15) * 1.80 + 32;
        var k = (response.main.temp - 273.15) * 1.80 + 32;
        var cityTemp = $('<h6>').text("Temperature: " + k.toFixed(1) + " ºF");
        var cityFL = $('<h6>').text("Feels Like: " + kFL.toFixed(1) + " ºF");
        var cityHum = $('<h6>').text("Humidity: " + response.main.humidity + "%");
        var cityWind = $('<h6>').text("Wind Speed: " + response.wind.speed + " mph");
        var wURL = "<img src='http://openweathermap.org/img/wn/";
        var wURL2 = "@2x.png'>";
        var wCI = response.weather[0].icon;
        var wCIcon = (wURL + wCI + wURL2);
        var topWeather = (response.name + '(' + moment().format('l') + ')' + wCIcon);
        $("#cityNameBanner").empty();
        $("#cityWeather").empty();
        $("#cityNameBanner").append(topWeather);
        $("#cityWeather").append(cityTemp, cityFL, cityHum, cityWind);

        function renderCity() {

            $("searchResultsName").empty();

            for (var i = 0; i < searchCityArr.length; i++) {
                var a = $("<div>");
                a.addClass("searchResultsName");
                a.attr("searchCity", searchCityArr[i]);
                a.text(searchCityArr[i]);
                $("#searchResultsName").append(a);
            }
        }

        $("#submit-btn").on("click", function (event) {
            event.preventDefault();

            var searchResults = $("#searchCity").val().trim();

            searchCityArr.push($("#searchResults").html('<p><a href=https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&appid=' + apiKey + '>' + cityName + '</a></p>'));
            console.log(searchCityArr);

            renderCity();
        });
    });




    //search function

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

        var k1 = (data.list[7].main.temp_max - 273.15) * 1.80 + 32;
        var k2 = (data.list[15].main.temp_max - 273.15) * 1.80 + 32;
        var k3 = (data.list[23].main.temp_max - 273.15) * 1.80 + 32;
        var k4 = (data.list[31].main.temp_max - 273.15) * 1.80 + 32;
        var k5 = (data.list[39].main.temp_max - 273.15) * 1.80 + 32;


        var cityTemp1 = $('<h6>').text(" Temp: " + k1.toFixed(2) + " ºF");
        var cityTemp2 = $('<h6>').text(" Temp: " + k2.toFixed(2) + " ºF");
        var cityTemp3 = $('<h6>').text(" Temp: " + k3.toFixed(2) + " ºF");
        var cityTemp4 = $('<h6>').text(" Temp: " + k4.toFixed(2) + " ºF");
        var cityTemp5 = $('<h6>').text(" Temp: " + k5.toFixed(2) + " ºF");

        var cityHum1 = $('<h6>').text(" Humidity: " + data.list[7].main.humidity + "%");
        var cityHum2 = $('<h6>').text(" Humidity: " + data.list[15].main.humidity + "%");
        var cityHum3 = $('<h6>').text(" Humidity: " + data.list[23].main.humidity + "%");
        var cityHum4 = $('<h6>').text(" Humidity: " + data.list[31].main.humidity + "%");
        var cityHum5 = $('<h6>').text(" Humidity: " + data.list[39].main.humidity + "%");

        var wI1 = data.list[7].weather[0].icon;
        var wI2 = data.list[15].weather[0].icon;
        var wI3 = data.list[23].weather[0].icon;
        var wI4 = data.list[31].weather[0].icon;
        var wI5 = data.list[39].weather[0].icon;
        var wURL = "<img src='http://openweathermap.org/img/wn/";
        var wURL2 = "@2x.png'>";

        var wIcon1 = (wURL + wI1 + wURL2);
        var wIcon2 = (wURL + wI2 + wURL2);
        var wIcon3 = (wURL + wI3 + wURL2);
        var wIcon4 = (wURL + wI4 + wURL2);
        var wIcon5 = (wURL + wI5 + wURL2);

        $("#fiveDay1Date").empty();
        $("#fiveDay2Date").empty();
        $("#fiveDay3Date").empty();
        $("#fiveDay4Date").empty();
        $("#fiveDay5Date").empty();
        $("#fiveDay1Date").append(moment().add(1, 'days').format('l'), cityTemp1, wIcon1, cityHum1);
        $("#fiveDay2Date").append(moment().add(2, 'days').format('l'), cityTemp2, wIcon2, cityHum2);
        $("#fiveDay3Date").append(moment().add(3, 'days').format('l'), cityTemp3, wIcon3, cityHum3);
        $("#fiveDay4Date").append(moment().add(4, 'days').format('l'), cityTemp4, wIcon4, cityHum4);
        $("#fiveDay5Date").append(moment().add(5, 'days').format('l'), cityTemp5, wIcon5, cityHum5);



    });

    // $(document).on("click", ".searchResults", searchCity);

    // renderCity();
});
