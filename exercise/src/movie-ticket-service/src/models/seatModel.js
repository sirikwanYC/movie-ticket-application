import mongoose from 'mongoose'

const seatSchema = new mongoose.Schema({
    movieName: String,
    roundMovie: String,
    seat: [ String ]
}, {collection: 'all_seat_movie'})

const seat = mongoose.model('all_seat_movie', seatSchema)

export default seat