const request = require('request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2dvbGRmYXJiMzM5MCIsImEiOiJjanlnODBvdjQwMGVoM2Jtc21nbGs3eWoxIn0.lLT4kAF2fiiv2Ey-h-5T-A&limit=1`


  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('unable to connect to location services', undefined)
    } else if (response.body.features.length === 0) {
      callback('location not found', undefined)
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      })
    }
  })
}
//encodeURIComponent is needed if someone searches for a location with special characters, otherwise we could just use address


module.exports = geocode
