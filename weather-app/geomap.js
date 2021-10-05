const geoToken = process.env.GEO_API_ACCESS_TOKEN
const request = require('postman-request')
const chalk = require('chalk')

// Handle geomapping request to fetch geodata based on a location
const geoRequest = (location, callback) => {

    const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${geoToken}&limit=1`

    request({ url: geoURL, json: true }, (error, response) => {

        if (error) {
            console.log('Issue connecting to mapbox API')
            console.log('Error Code: ' + error.code)
            console.log(error)
        } else if (response.body.error) {
            console.log('Status Code: ' + response.body.code)
            console.log('Error: ' + response.body.error)
        } else {
            const data = response.body.features[0]
            const longitude = data.center[0]
            const latitude = data.center[1]
            const place = data.place_name
            const geodata = {
                longitude: longitude,
                latitude: latitude,
                place: place
            }
    
            callback(geodata)            
        }
    })
}

module.exports = {
    geoRequest: geoRequest
}