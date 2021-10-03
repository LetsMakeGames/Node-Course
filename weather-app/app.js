const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=ef0d80192f7ecbf5014e28c7694d94a1&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    const data = response.body
    const weather = data.current.weather_descriptions[0]
    const temperature = data.current.temperature
    const humidity = data.current.humidity
    const feelsLike = data.current.feelslike

    console.log('It is currently ' + weather.toLowerCase() + ' with a temperature of ' + temperature + ' degrees.')
    console.log('It feels like ' + feelsLike + ' degrees with a humidity of ' + humidity + '%.')
})