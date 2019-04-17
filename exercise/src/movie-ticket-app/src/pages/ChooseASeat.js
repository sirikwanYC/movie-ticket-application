import React, { Component } from 'react'
import Layout from '../components/Layout'
import { Row, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const charSeat = ['k', 'j', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a', 'aa']

const seat = [
    ['k1', 'k2', 'k3', 'k4', 'k5', 'k6', 'k7', 'k8', 'k9', 'k10', 'k11', 'k12', 'k13', 'k14', 'k15', 'k16'],
    ['j1', 'j2', 'j3', 'j4', 'j5', 'j6', 'j7', 'j8', 'j9', 'j10', 'j11', 'j12', 'j13', 'j14', 'j15', 'j16'],
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'h11', 'h12', 'h13', 'h14', 'h15', 'h16'],
    ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'g10', 'g11', 'g12', 'g13', 'g14', 'g15', 'g16'],
    ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', 'f13', 'f14', 'f15', 'f16'],
    ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'e10', 'e11', 'e12', 'e13', 'e14', 'e15', 'e16'],
    ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13', 'd14', 'd15', 'd16'],
    ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13', 'c14', 'c15', 'c16'],
    ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'b11', 'b12', 'b13', 'b14', 'b15', 'b16'],
    ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12', 'a13', 'a14', 'a15', 'a16'],
    ['aa1', 'aa2', 'aa3', 'aa4', 'aa5']
]

class ChooseASeat extends Component {
    state = {
        seatSelect: [],
        priceTicket: 0,
        movie: this.props.location.state.movie,
        timeMovie: this.props.location.state.timeMovie,
        seatFromDb: ['']
    }

    componentWillMount = () => {
        const { movie, timeMovie } = this.state
        const nameMovie = `${movie.name_movie_en} ${movie.name_movie_th}`
        const url = `http://localhost:5000/get-seat-movie/name-movie/${nameMovie}/round-movie/${timeMovie}`
        axios.get(url)
        .then(res => {
            this.setState({
                seatFromDb: res.data !== null ? res.data.seat : ['']
            })
        })
    }

    selectSeat = (seat, price) => {
        let { seatSelect, priceTicket } = this.state
        priceTicket += price
        seatSelect.push(seat)
        this.setState({
            seatSelect,
            priceTicket
        })

    }

    unSelectSeat = (seat, price) => {
        let { seatSelect, priceTicket } = this.state
        priceTicket -= price
        seatSelect = seatSelect.filter(result => result !== seat)
        this.setState({
            seatSelect,
            priceTicket
        })
    }

    render() {

        const { seatSelect, priceTicket, movie, seatFromDb } = this.state

        return (
            <div className="choose-a-seat" >
                <Layout selectSeat={true} >
                    <div className="card-seat-box" >
                        <div className="seat-price" >
                            <div className="deluxe" >
                                <img src="images/sofa.png" />
                                <div> deluxe </div>
                                <div> {movie.price.deluxe}  บาท </div>
                            </div>
                            <div className="premium" >
                                <img src="images/single-sofa.png" />
                                <div> premium </div>
                                <div> {movie.price.premium} บาท </div>
                            </div>
                            <div className="sofa-sweet" >
                                <img src="images/two-seat-sofa.png" />
                                <div> sofa sweet </div>
                                <div> {movie.price.sofa_sweet} บาท</div>

                            </div>
                        </div>
                        <div className="seat" >
                            <div className="text-seat" >
                                {
                                    charSeat.map((value, index) => <div key={+index} className="margin-bottom"> {value} </div>)
                                }
                            </div>
                            <div className="box-seat" >
                                <div className="theater" >
                                    <div className="text dark-blue" > จอภาพยนตร์ </div>
                                </div>
                                {
                                    seat.map((value, index) => {
                                        return (
                                            <div key={+index} className="row-seat" style={
                                                index == 10 ? { justifyContent: 'center' } :
                                                    index == 9 || index == 6 ? { marginBottom: 7 } : {}
                                            }>
                                                {
                                                    value.map((v, i) => {
                                                        return <div key={+i} className="col-seat" >
                                                            <div>
                                                                {
                                                                    seatFromDb.some(result => result == v) ?
                                                                        <Button disabled>
                                                                            <img src="images/user-image-with-black-background.png" />
                                                                        </Button>
                                                                        : seatSelect.some(result => result == v) ?
                                                                            <Button
                                                                                onClick={() => this.unSelectSeat(v, index >= 0 && index <= 6 ? 170 : index > 6 && index <= 9 ? 190 : 500)}
                                                                                disabled={seatFromDb.some(result => result == v)} >
                                                                                <img src="images/checked.png" />
                                                                            </Button>
                                                                            :
                                                                            <Button onClick={() => this.selectSeat(v, index >= 0 && index <= 6 ? 170 : index > 6 && index <= 9 ? 190 : 500)} >
                                                                                <img src={
                                                                                    index >= 0 && index <= 6 ?
                                                                                        'images/sofa.png' :
                                                                                        index > 6 && index <= 9 ?
                                                                                            'images/single-sofa.png' :
                                                                                            index == 10 ?
                                                                                                'images/two-seat-sofa.png' : ''
                                                                                } />
                                                                            </Button>
                                                                }
                                                            </div>
                                                        </div>
                                                    })
                                                }
                                            </div>

                                        )
                                    })
                                }
                            </div>
                            <div className="text-seat" >
                                {
                                    charSeat.map((value, index) => <div key={+index} className="margin-bottom" > {value} </div>)
                                }
                            </div>
                            <div className="show-price-seat" >
                                <div> โรงภาพยนตร์ {movie.theater} </div>
                                <hr />
                                <div className="all-seat" >
                                    <div> ที่นั่งที่เลือก </div>
                                    {
                                        seatSelect.length !== 0 ?
                                            seatSelect.map((value, index) => <span key={+index} className="blue" > {`${value}, `} </span>)
                                            :
                                            <span className="blue" > - </span>
                                    }
                                </div>
                                <div className="all-price" >
                                    <div> ราคารวม </div>
                                    <span className="blue" > {priceTicket} บาท</span>
                                </div>
                                <div className="next-step" >
                                    <Button className="white" disabled={seatSelect.length == 0} >
                                        <Link
                                            className={seatSelect.length == 0 ? 'disabled-link' : ''}
                                            to={{ pathname: '/payment', state: { movie, priceTicket, seatSelect } }}
                                        > ดำเนินการต่อ
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}

export default ChooseASeat