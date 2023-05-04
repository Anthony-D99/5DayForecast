var requestWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}id=72f73e36dca374fece0b4cddcc58a65f&appid={API key}}';

    fetch(requestWeatherUrl)
      .then(function (response) {
        console.log(response.status);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  
