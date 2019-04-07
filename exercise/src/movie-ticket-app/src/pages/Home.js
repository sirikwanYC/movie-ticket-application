import React, { Component } from 'react'
import { Button, Row, Col } from 'reactstrap'
import Layout from '../components/Layout'


const movie = [
    {
        nameMovieEN: 'avenger end game',
        nameMovieTH: 'อเวนเจอร์เผด็จศึก',
        srcImg: 'https://f.ptcdn.info/307/061/000/pjeqrm8z2pc2HIJGldj-o.jpg',
        sound: 'th',
        rate: '15+',
        theater: 1,
        roundMovie: ['11:30', '13:00', '15:00', '17:00', '19:00', '21:30']
    },
    {
        nameMovieEN: 'shazam',
        nameMovieTH: 'ซาแซม',
        srcImg: 'https://m.media-amazon.com/images/M/MV5BYTE0Yjc1NzUtMjFjMC00Y2I3LTg3NGYtNGRlMGJhYThjMTJmXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX182_CR0,0,182,268_AL_.jpg',
        sound: 'EN/TH',
        rate: '18+',
        theater: 2,
        roundMovie: ['14:30', '16:00', '18:30', '21:30']
    }
]
class Home extends Component {
    render() {
        return (
            <div className="home" >
                <Layout>
                    {
                        movie && movie.map((value, index) => {
                            return (
                                <div className="card-white" key={+index} >
                                    <Row>
                                        <Col xs="3" className="theater" >
                                            <img src="/images/theater.jpg" />
                                            <div className="text size-large dark-blue" > theater {value.theater} </div>
                                        </Col>
                                        <Col xs="auto" className="img-movie">
                                            <img src={value.srcImg} />
                                        </Col>
                                        <Col xs="auto" className="detail-movie" >
                                            <div className="bar-name-movie white size-large" >
                                                {`${value.nameMovieEN} ${value.nameMovieTH}`}
                                            </div>
                                            <div className="sound size-medium">
                                                {value.sound} <span className="rate white" >{value.rate}</span>
                                            </div>
                                            <div className="round-movie" >
                                                {
                                                    value.roundMovie.map((v, i) => {
                                                        return (
                                                            <div key={+i} className="box-button">
                                                                <Button className="size-medium" > {v} </Button>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        })
                    }
                </Layout>
            </div>
        )
    }
}

export default Home