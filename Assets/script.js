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
function getApi(requestUrl) {
    fetch(requestUrl)
      .then(function (response) {
        console.log(response.status);
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        // var forecastDate = data.list[0].dt_txt
        // var firstDayForecast=dayjs(forecastDate).format("(MM/DD/YYYY)")
        // console.log(firstDayForecast)
      }
      )};
 function userSearch()
{
  cityName = $(inputSearch).val()
  localStorage.setItem('city',cityName);
}
searchButton.on('click', function (){
  userSearch();
var requestGeocodeUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=3484e08d51e803d19133758ad6e77ac5`;
getApi(requestGeocodeUrl)
// var geolcation= data.city.coord.lat & var geolcation= data.city.coord.lon
//var requestWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=3484e08d51e803d19133758ad6e77ac5`;
})

