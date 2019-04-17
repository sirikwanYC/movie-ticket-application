import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    nameMovieEN: String,
    nameMovieTH: String,
    srcImg: String,
    timeMovie: Number,
    typeMovie: String,
    typeTheater: String,
    sound: String,
    rate: String,
    theater: Number,
    roundMovie: [String],
    price: {
        deluxe: Number,
        premium: Number,
        sofaSweet: Number
    }
}, {collection: 'all_movie'})


const movie = mongoose.model('all_movie', movieSchema)

export default movie