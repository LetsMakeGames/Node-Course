const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "William"
data.age = 32

const profile = JSON.stringify(data)
fs.writeFileSync('1-json.json', profile)

console.log(fs.readFileSync('1-json.json').toString())