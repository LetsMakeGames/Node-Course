require('dotenv').config()
const input = require('./input')
const geomap = require('./geomap')
const weather = require('./weather')

// Get users location input
input.getInput((location) => {

    // Submit location to geoRequest() to get geodata for weatherRequest.
    geomap.geoRequest(location, ({ longitude, latitude, place }) => {

        console.log(place)

        // Submit geodata coordinates to weatherRequest and report the weather
        weather.weatherRequest(longitude, latitude, ({ weather, temperature, feelsLike, humidity }) => {

            // Log a simple weather summary report.
            console.log('It is currently ' + weather + ' with a temperature of ' + temperature + ' degrees.')
            console.log('It feels like ' + feelsLike + ' degrees with a humidity of ' + humidity + '%.')

        })
    })    
})
