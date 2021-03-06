import React, { Component } from 'react'
import Layout from '../components/Layout'
import moment from 'moment'
import axios from 'axios'
import GenQRCode from 'qrcode.react'

class ShowTicket extends Component {
    state = {
        movie: null,
        seatSelect: null,
        timeMovie: null,
        loading: true,
        idTicket: null,
    }

    getTicket = () => {
        const { id } = this.props.match.params
        const urlTicket = `http://localhost:5000/get-ticket/${id}`

        axios(urlTicket)
            .then(res => {
                console.log(res)
                this.setState({
                    seatSelect: res.data.seat,
                    timeMovie: res.data.round_movie,
                    movie: res.data,
                    idTicket: res.data.movie_id,
                })
                const urlMovie = `http://localhost:5000/get-movie/${res.data.movie_id}`
                axios(urlMovie)
                    .then(res => {
                        this.setState({
                            movie: res.data,
                            loading: false,
                        })
                    })
            })


    }

    componentWillMount = () => {
        this.getTicket()
    }

    render() {
        const { movie, seatSelect, loading, timeMovie, idTicket } = this.state
        const fromPayment = this.props.location.state && this.props.location.state.fromPayment
        return (
            <div className="show-ticket" >
                <Layout ShowTicket={true} hidden={!fromPayment}>
                    {
                        loading ?
                            <div className="loading white size-large" > loading... </div>
                            :
                            movie &&
                            <div className="card-ticket" >
                                <div className="name-movie white size-large" >
                                    {`${movie.name_movie_en} ${movie.name_movie_th}`}
                                </div>
                                <div className="card-body-ticket" >
                                    <div className="ticket-theater" >
                                        <div className="img-theater" >
                                            <img src="/images/theater-ic.png" />
                                        </div>
                                        <div className="theater-order " >
                                            {`theater ${movie.theater}`}
                                        </div>
                                        <div className="seat-select" >
                                            {
                                                seatSelect.map((seat, index) => {
                                                    const lastIndex = seatSelect.length - 1
                                                    if (index !== lastIndex) {
                                                        return `${seat}, `
                                                    } else {
                                                        return seat
                                                    }
                                                })
                                            }
                                        </div>
                                        <div className="date" >
                                            {moment(new Date()).format('DD/MM/YYYY')}
                                        </div>
                                    </div>
                                    <div className="ticket-detail" >
                                        <div className="img-movie">
                                            <img src={movie.src_img} />
                                        </div>
                                        <div className="detail-movie" >
                                            <div className="sound size-small" >
                                                {movie.type_movie} : <span className="margin-type-theater" > {movie.time_movie} นาที </span>
                                                <span className="box-button white margin-type-theater" >{movie.type_theater}</span>
                                                <span className="box-button white margin-type-theater" >{movie.sound}</span>
                                            </div>
                                            <div className="theater-order size-large" >
                                                {`theater ${movie.theater}`} / {`round ${timeMovie}`}
                                            </div>
                                            <div className="seat size-large" >
                                                seat: {
                                                    seatSelect.map((seat, index) => {
                                                        const lastIndex = seatSelect.length - 1
                                                        if (index !== lastIndex) {
                                                            return `${seat}, `
                                                        } else {
                                                            return seat
                                                        }
                                                    })
                                                }
                                            </div>
                                            <div className="bar-code" >
                                                <GenQRCode value={idTicket} size={60} level="H" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                    }
                </Layout>
            </div>
        )
    }
}

export default ShowTicket