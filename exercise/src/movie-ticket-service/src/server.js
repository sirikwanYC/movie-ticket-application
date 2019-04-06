import '@babel/polyfill'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import express from 'express'
import { nodePort, database } from './config'
import route from './app/routes'


const urlDB = `mongodb+srv://${database.user}:${database.password}@${database.host}`

mongoose.connect(urlDB, {useNewUrlParser: true})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected!')
})

const server = express()

server.use(
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({
    extended: true,
  }),
)

route(server)


server.listen(nodePort, () => console.log(`running server now! ${nodePort}`))

export default server
