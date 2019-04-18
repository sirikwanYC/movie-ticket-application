import Movie from './models/movieModel'
import Seat from './models/seatModel'
import Ticket from './models/buyTicketModal'

const route = (server) => {
    server.get('/get-all-movie', ((req, res) => {
        Movie.find({}, function(err, result) {
            res.json(result)
        }).lean()

    }))

    server.get('/get-seat-movie/name-movie/:nameMovie/round-movie/:roundMovie', ((req, res) => {
        Seat.findOne({movie_name: req.params.nameMovie, round_movie: req.params.roundMovie }, 
            function(err, result) {
                res.json(result)
            }).lean()
    }))

    server.post('/insert-ticket', ((req, res) => {
        const {movie_id, round_movie, movie_name, seat} = req.body
        const newTicket = new Ticket( req.body )
        newTicket.save(function (err) {
            if (err) res.status(401).end()
            else res.status(200).end()
          })

        Seat.findOne({movie_id, round_movie},
            function(err, result) {
                if(result !== null) {
                    Seat.updateOne({ movie_id }, { $push: { seat }},
                        function() {})
                }else{
                    const newSeat = new Seat({ movie_id, movie_name, round_movie, seat })
                    newSeat.save(function () {})
                }
            })
    }))
}

export default route