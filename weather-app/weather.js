const weatherToken = process.env.WEATHER_API_ACCESS_TOKEN
const request = require('postman-request')

// Get the current weather in an area based on longitude and latitude.
const weatherRequest = (longitude, latitude, callback) => {

    const weatherURL = `http://api.weatherstack.com/current?access_key=${weatherToken}&query=${latitude},${longitude}&units=f`

    request({ url: weatherURL, json: true }, (error, { body: { current:{ weather_descriptions, temperature, humidity, feelsLike }, error:res_error } }) => {

        if (error) {
            console.log('Issue connecting to weatherstack API')
            console.log('Error Code: ' + error.code)
            console.log('Error: ' + error.error)            
        } else if (res_error) {
            console.log('Status Code: ' + res_error.code)
            console.log('Error: ' + res_error.info)
        } else {
            const weatherData = {
                weather: weather_descriptions[0].toLowerCase(),
                temperature,
                feelsLike,
                humidity
            }
        
            callback(weatherData)
        }
    })
}

module.exports = {
    weatherRequest: weatherRequest
}
