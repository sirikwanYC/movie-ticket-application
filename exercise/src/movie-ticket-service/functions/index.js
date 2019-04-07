const functions = require('firebase-functions')
// const cors = require('cors')({origin: true})
const mongoose = require('mongoose')
const express = require('express')
// const { nodePort, database } = require('./config')


// const urlDB = `mongodb+srv://${database.user}:${database.password}@${database.host}`

const urlDB = "mongodb+srv://movie-ticket:aZA2pTp0PHHz1PZ2@movie-ticker-lq4km.gcp.mongodb.net/test"

mongoose.connect(urlDB, {useNewUrlParser: true})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('db connected!')
})

const app = express()

// app.use(
//   cors(),
// )


app.get('/', (req, res) => {
  res.send('home')
})

app.get('/app', (req, res) => {
    res.send('hello')
  })


app.listen(5000, () => console.log(`running server now! 5000`))

exports.app = functions.https.onRequest(app)