const geoToken = process.env.GEO_API_ACCESS_TOKEN
const request = require('postman-request')
const weather = require('./weather')
const prompt = require('prompt-sync')()

const input = prompt('Please enter your location: ')
const location = encodeURIComponent(input)
const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${geoToken}&limit=1`

geoRequest = () => {

    request({ url: geoURL, json: true }, (error, response) => {
        const data = response.body.features[0]
        const longitude = data.center[0]
        const latitude = data.center[1]
        const place = data.place_name
        const geodata = {
            longitude: longitude,
            latitude: latitude,
            place: place
        }

        console.log(geodata.place)
        weather.weatherRequest(geodata.longitude, geodata.latitude)

    })
}

module.exports = {
    geoRequest: geoRequest
}