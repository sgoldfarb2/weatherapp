const request = require('request')

const url = 'https://api.darksky.net/forecast/57a5f1f01a79babaa3d2d4ff05bc6540/37.8267,-122.4233'

// request takes an object that requires a url, and then it also takes a function when either we have the weather data or when something goes wrong
// by using json: true, we are automatically parsing our json so we don't need to have another line that parses the json data and turn it into an object
request({ url: url, json: true }, (error, response) => {
  console.log(`it is currently ${response.body.currently.temperature} degrees out. there is a ${response.body.currently.precipProbability}% chance of rain.`);
})

//geocoding
//address -> lat/long -> weather

const latLngURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2dvbGRmYXJiMzM5MCIsImEiOiJjanlnODBvdjQwMGVoM2Jtc21nbGs3eWoxIn0.lLT4kAF2fiiv2Ey-h-5T-A&limit=1'

request({ url: latLngURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1]
  const longitude = response.body.features[0].center[0]
  console.log('lat: ' + latitude + ' lng: ' + longitude);
})
