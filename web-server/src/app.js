const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express config
const publicDirPath = path.join(__dirname, '../public')
const templateDirPath = path.join(__dirname, '../templates/views')
const partialsDirPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views directory
app.set('view engine', 'hbs')
app.set('views', templateDirPath)
hbs.registerPartials(partialsDirPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'The Weather App',
        page: 'Index',
        name: 'William Barnes'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'The Weather App',
        page: 'About',
        name: 'William Barnes'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'The Weather App',
        page: 'Help',
        message: `This is a simple app for fetching the current weather in a given location.
        You can provide a location descriptor such as zip, state, city, or address and the app will fetch the current weather for that location.`,
        name: 'William Barnes'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'East Lansing, MI',
        forecast: 'It is currently mist with a temperature of 66 degrees. It feels like undefined degrees with a humidity of 90%.',
        name: 'William Barnes'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})