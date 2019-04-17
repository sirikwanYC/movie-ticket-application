import '@babel/polyfill'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import route from './route'

const urlDB = 'mongodb+srv://movie-ticket:aZA2pTp0PHHz1PZ2@movie-ticker-lq4km.gcp.mongodb.net/movie_ticket?retryWrites=true'

mongoose.connect(urlDB, {useNewUrlParser: true}).then(
    () => { console.log('connected') },
    err => { console.log(err) }
  )

const server = express()

server.use(
    cors(),
    bodyParser.json(),
    bodyParser.urlencoded({
      extended: true,
    }),
  )

route(server)



server.listen(5000, () => console.log(`running server now! 5000`))
