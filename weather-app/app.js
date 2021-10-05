require('dotenv').config()
const input = require('./input')
const geomap = require('./geomap')
const weather = require('./weather')

// Get users location input
input.getInput((location) => {

    // Submit location to geoRequest() to get geodata for weatherRequest.
    geomap.geoRequest(location, (geodata) => {

        console.log(geodata.place)

        // Submit geodata coordinates to weatherRequest and report the weather
        weather.weatherRequest(geodata.longitude, geodata.latitude, (weatherData) => {

            // Log a simple weather summary report.
            console.log('It is currently ' + weatherData.weather + ' with a temperature of ' + weatherData.temperature + ' degrees.')
            console.log('It feels like ' + weatherData.feelsLike + ' degrees with a humidity of ' + weatherData.humidity + '%.')

        })
    })    
})
