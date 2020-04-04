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
        console.log(results);
        var cityName = $("#cityNameBanner").text(response.name);

        $("#cityInfo").append(cityName);

    });

});
