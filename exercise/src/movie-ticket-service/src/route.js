import movie from './models/movieModel'
import seat from './models/seatModel'

const route = (server) => {
    server.get('/get-all-movie', ((req, res) => {
        movie.find({}, function(err, result) {
            res.json(result)
        }).lean()

    }))

    server.get('/get-seat-movie/name-movie/:nameMovie/round-movie/:roundMovie', ((req, res) => {
        seat.findOne({movie_name: req.params.nameMovie, round_movie: req.params.roundMovie }, 
            function(err, result) {
                res.json(result)
            }).lean()
        }))
}

export default route