import React, { Component } from 'react'
import Layout from '../components/Layout'
import moment from 'moment'
class ShowTicket extends Component {

    render() {
        const { movie, seatSelect, timeMovie } = this.props.location.state
        return (
            <div className="show-ticket" >
                <Layout ShowTicket={true}>
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
                                        <span className="box-button white" >{movie.rate}</span>
                                    </div>
                                    <div className="theater-order size-large" >
                                        {`theater ${movie.theater}`}
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
                                        <img src="/images/bar-code.jpg" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}

export default ShowTicket