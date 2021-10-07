const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>The Weather App</h1>')
})

app.get('/help', (req, res) => {
    res.send('How can I help?')
})

app.get('/about', (req, res) => {
    res.send('<h1>The Weather App</h1> <p>This is a simple express server for serving up a weather app!</p>')
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'East Lansing, MI',
        forecast: 'It is currently mist with a temperature of 66 degrees. It feels like undefined degrees with a humidity of 90%.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})