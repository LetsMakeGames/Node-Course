const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send('How can I help?')
})

app.get('/about', (req, res) => {
    res.send('This is a simple express server for serving up web apps!')
})

app.get('/weather', (req, res) => {
    res.send('Weather info to be added in a future update.')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})