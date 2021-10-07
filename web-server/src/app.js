const path = require('path')
const express = require('express')

const app = express()
const publicDirPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'The Weather App',
        name: 'William Barnes'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'The Weather App'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'The Weather App'
    })
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