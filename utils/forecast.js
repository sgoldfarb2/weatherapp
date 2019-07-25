const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/57a5f1f01a79babaa3d2d4ff05bc6540/${latitude},${longitude}`

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('unable to connect to weather service')
    } else if (response.body.error) {
      callback('unable to find location')
    } else {
      callback(undefined, `${response.body.daily.data[0].summary} it is currently ${response.body.currently.temperature} degrees out. there is a ${response.body.currently.precipProbability}% chance of rain.`)
    }
  })
}

// request takes an object that requires a url, and then it also takes a function when either we have the weather data or when something goes wrong
// by using json: true, we are automatically parsing our json so we don't need to have another line that parses the json data and turn it into an object

module.exports = forecast
