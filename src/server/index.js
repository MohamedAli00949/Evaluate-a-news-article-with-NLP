const dotenv = require('dotenv');
dotenv.config();

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const fetch = require('node-fetch')

const app = express()

app.use(cors())

// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// api
const apiKey = process.env.API_KEY 
console.log(`Your API key is ${apiKey}`);
let formInput = []

app.post('/test', async function (req, res) {
    formInput = req.body.url;
    const api = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${formInput}&lang=en`

    const theResponse = await fetch(api)
    const theData = await theResponse.json()
    console.log(theData)
    res.send(theData)
})

// designates what port the app will listen to for incoming requests
const port = 2000
app.listen(port, function () {
    console.log(`Evaluate News NLP app listening on port ${port}!`)
    console.log(`http://localhost:${port}`)
})


