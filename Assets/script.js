var searchArea = $('.searchArea')
var searchHistory = $('#searchHistory')
var cityDate = $('#cityDate')
var searchButton = $('.searchButton')
var inputSearch = $('.inputSearch')
var cityName = $(inputSearch).val()

// step 1 fetch geo location and save data to varibale
// step 2 plug in variable name into template literal string
// var myName = "Allan"
// var templateLiteralExample = `Hi my name is ${myName}`
function getWeatherAPI(requestWeatherUrl) {
  fetch(requestWeatherUrl)
    .then(function (response) {
      console.log(response.status);
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      // current day
      var forecastDate = data.list[0].dt_txt
      var firstDayDate = dayjs(forecastDate).format("(MM/DD/YYYY)")
      var currentCity = data.city.cityName
      var currentDayForecastIcon = data.list[0].weather[0].icon
      var currentDayForecastTemp = data.list[0].main.temp
      var currentDayForecastWind = data.list[0].wind.speed
      var currentDayForecastHumidity = data.list[0].main.humidity
      var weatherIconUrl = `https://openweathermap.org/img/wn/${currentDayForecastIcon}@2x.png`
      cityDate.text(currentCity + " " + firstDayDate + weatherIconUrl)
      $('#icon1').attr('src', weatherIconUrl)
      $('#temp1').text(`Temp:${currentDayForecastTemp}°F`)
      $('#wind1').text(`Wind:${currentDayForecastWind}MPH`)
      $('#humidity1').text(`Humidity:${currentDayForecastHumidity}%`)
      // first
      forecastDate = data.list[].dt_txt
      firstDayDate = dayjs(forecastDate).format("(MM/DD/YYYY)")
      var firstDayForecastIcon = data.list[1].weather[9].icon
      var firstDayForecastTemp = data.list[17].main.temp
      var firstDayForecastWind = data.list[25].wind.speed
      var firstDayForecastHumidity = data.list[33].main.humidity
      $('#firstDay').text(firstDayDate)
      $('#icon2').attr('src', weatherIconUrl)
      $('#temp2').text(`Temp:${firstDayForecastTemp}°F`)
      $('#wind2').text(`Wind:${firstDayForecastWind}MPH`)
      $('#humidity2').text(`Humidity:${firstDayForecastHumidity}%`)
      // second 
      forecastDate = data.list[].dt_txt
      secondDayDate = dayjs(forecastDate).format("(MM/DD/YYYY)")
      var secondDayForecastIcon = data.list[].weather[].icon
      var secondDayForecastTemp = data.list[].main.temp
      var secondDayForecastWind = data.list[].wind.speed
      var secondDayForecastHumidity = data.list[].main.humidity
      $('#secondDay').text(secondDayDate)
      $('#icon3').attr('src', weatherIconUrl)
      $('#temp3').text(`Temp:${secondDayForecastTemp}°F`)
      $('#wind3').text(`Wind:${secondDayForecastWind}MPH`)
      $('#humidity3').text(`Humidity:${secondDayForecastHumidity}%`)
      // third
      forecastDate = data.list[].dt_txt
      thirdDayDate = dayjs(forecastDate).format("(MM/DD/YYYY)")
      var thirdDayForecastIcon = data.list[].weather[].icon
      var thirdDayForecastTemp = data.list[].main.temp
      var thirdDayForecastWind = data.list[].wind.speed
      var thirdDayForecastHumidity = data.list[].main.humidity
      $('#thirdDay').text(thirdDayDate)
      $('#icon4').attr('src', weatherIconUrl)
      $('#temp4').text(`Temp:${thirdDayForecastTemp}°F`)
      $('#wind4').text(`Wind:${thirdDayForecastWind}MPH`)
      $('#humidity4').text(`Humidity:${thirdDayForecastHumidity}%`)
      // fourth
      forecastDate = data.list[].dt_txt
      fourthDayDate = dayjs(forecastDate).format("(MM/DD/YYYY)")
      var fourthDayForecastIcon = data.list[].weather[].icon
      var fourthDayForecastTemp = data.list[].main.temp
      var fourthDayForecastWind = data.list[].wind.speed
      var fourthDayForecastHumidity = data.list[].main.humidity
      $('#fourthDay').text(fourthDayDate)
      $('#icon5').attr('src', weatherIconUrl)
      $('#temp5').text(`Temp:${fourthDayForecastTemp}°F`)
      $('#wind5').text(`Wind:${fourthDayForecastWind}MPH`)
      $('#humidity5').text(`Humidity:${fourthDayForecastHumidity}%`)
      // fith
      forecastDate = data.list[].dt_txt
      fithDayDate = dayjs(forecastDate).format("(MM/DD/YYYY)")
      var fithDayForecastIcon = data.list[].weather[].icon
      var fithDayForecastTemp = data.list[].main.temp
      var fithDayForecastWind = data.list[].wind.speed
      var fithDayForecastHumidity = data.list[].main.humidity
      $('#fithDay').text(fithDayDate)
      $('#icon6').attr('src', weatherIconUrl)
      $('#temp6').text(`Temp:${fithDayForecastTemp}°F`)
      $('#wind6').text(`Wind:${fithDayForecastWind}MPH`)
      $('#humidity6').text(`Humidity:${fithDayForecastHumidity}%`)
    })
}
function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response.status);
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      var forecastDate = data.list[0].dt_txt
      var firstDayDate = dayjs(forecastDate).format("(MM/DD/YYYY)")
      console.log(firstDayDate)
      var lon = data.city.coord.lon
      var lat = data.city.coord.lat
      console.log(lat)
      console.log(lon)
      var requestWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=3484e08d51e803d19133758ad6e77ac5&units=imperial`;
      getWeatherApi(requestWeatherUrl)

    })

};
function userSearch() {
  cityName = $(inputSearch).val()
  localStorage.setItem('city', cityName);
}
searchButton.on('click', function () {
  userSearch();
  var requestGeocodeUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=3484e08d51e803d19133758ad6e77ac5`;

  getApi(requestGeocodeUrl)
})

