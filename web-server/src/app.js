require('dotenv').config()
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geomap = require('./utils/geomap')
const weather = require('./utils/weather')

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
        page: 'Home',
        message: 'This is the home page for The Weather App.',
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

    if (!req.query.location) {
        return res.send({
            error: 'You must provide a location for weather.'
        })
    }

    geomap.geoRequest(req.query.location, (data) => {

        const {longitude, latitude, place, errorMessage = undefined} = data

        if (errorMessage != undefined) {

            return res.send({
                error: errorMessage
            })
        }

        weather.weatherRequest(longitude, latitude, (data) => {

            const {weather, temperature, feelsLike, humidity, errorMessage = undefined, code = undefined} = data

            if (errorMessage) {
                return res.send({
                    statusCode: code,
                    error: errorMessage
                })
            }
            
            res.send({
                location: place,
                forecast: `It is currently ${weather} with a temperature of ${temperature} degrees. It feels like ${feelsLike} degrees with a humidity of ${humidity}%.`,
                name: 'William Barnes'
            })
        })        
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'The Weather App', 
        page: '404: Help Article Not Found',
        name: 'William Barnes'
    }) 
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'The Weather App',
        page: '404: Page Not Found',
        name: 'William Barnes'
    })    
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})