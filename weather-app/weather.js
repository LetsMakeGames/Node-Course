const weatherToken = process.env.WEATHER_API_ACCESS_TOKEN
const request = require('postman-request')

const weatherRequest = (longitude, latitude) => {

    const weatherURL = `http://api.weatherstack.com/current?access_key=${weatherToken}&query=${latitude},${longitude}&units=f`

    request({ url: weatherURL, json: true }, (error, response) => {

        if (error) {
            console.log('Issue connecting to weatherstack API')
            console.log('Error Code: ' + error.code)
            console.log('Error: ' + error.error)
            
        } else if (response.body.error) {
            console.log('Status Code: ' + response.body.error.code)
            console.log('Error: ' + response.body.error.info)
        } else {
            const data = response.body
            const weather = data.current.weather_descriptions[0]
            const temperature = data.current.temperature
            const humidity = data.current.humidity
            const feelsLike = data.current.feelslike
        
            console.log('It is currently ' + weather.toLowerCase() + ' with a temperature of ' + temperature + ' degrees.')
            console.log('It feels like ' + feelsLike + ' degrees with a humidity of ' + humidity + '%.')
        }


    })
}

module.exports = {
    weatherRequest: weatherRequest
}
