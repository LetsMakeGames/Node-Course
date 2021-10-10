const geoToken = process.env.GEO_API_ACCESS_TOKEN
const request = require('postman-request')
const chalk = require('chalk')

// Handle geomapping request to fetch geodata based on a location
const geoRequest = (location, callback) => {

    const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${geoToken}&limit=1`

    request({ url: geoURL, json: true }, (error, { body: { message:error_message, features } }) => {

        if (error) {
            
            console.log('Issue connecting to mapbox API')
            console.log('Error Code: ' + error.code)
            console.log(error)

        } else if (features === undefined) {

            if (error_message !== undefined) {

                console.log('Error: ' + error_message)

            } else {

                console.log('Error: Location Not Found')
            }
        } else {

            const data = features[0]
            const {center:coords, place_name:place} = data
            const geodata = {
                longitude: coords[0],
                latitude: coords[1],
                place
            }
    
            callback(geodata)    

        }
    })
}

module.exports = {

    geoRequest: geoRequest

}