const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')




geocode(process.argv[2], (error, data) => {
  if (process.argv[2] === undefined) {
    return console.log('you forgot to put in a location!');
  }
  if (error) {
    return console.log(error);
  }

  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }

    console.log(data.location);
    console.log(forecastData);
  })
})


