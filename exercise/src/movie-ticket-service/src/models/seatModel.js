import mongoose from 'mongoose'

const seatSchema = new mongoose.Schema({
    movie_id: String,
    movie_name: String,
    round_movie: String,
    seat: [ String ]
}, {collection: 'all_seat_movie'})

const Seat = mongoose.model('all_seat_movie', seatSchema)

export default Seat