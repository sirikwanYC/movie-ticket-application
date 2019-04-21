import React, { Component } from 'react'
import Layout from '../components/Layout'
import { Link, Redirect } from 'react-router-dom'
import { Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import axios from 'axios'
import Countdown from 'react-countdown-now'
import moment from 'moment'

const allGiveTheChange = ['ธนบัตร 1000', 'ธนบัตร 500', 'ธนบัตร 100', 'ธนบัตร 50', 'ธนบัตร 20', 'เหรียญ 10', 'เหรียญ 5', 'เหรียญ 2', 'เหรียญ 1']
class Payment extends Component {
    state = {
        movie: this.props.location.state.movie,
        priceTicket: this.props.location.state.priceTicket,
        seatSelect: this.props.location.state.seatSelect,
        timeMovie: this.props.location.state.timeMovie,
        getMoney: 0,
        validateInput: false,
        openModal: false,
        giveTheChange: [],
        totalGiveChange: 0,
        startCountdown: false,
        dataUser: {
            name: '',
            mail: '',
            tel: ''
        },
        redirect: false,
        loading: false,
    }

    componentWillMount = () => {
        this.setState({
            startCountdown: !this.state.startCountdown
        })
    }

    checkGetMoney = (getMoney) => {
        const { priceTicket } = this.state
        this.setState({
            validateInput: getMoney < priceTicket
        })
    }

    onChangeGetMoney = (e) => {
        const getMoney = e.target.value
        this.setState({
            getMoney,
        })
        this.checkGetMoney(getMoney)
    }

    toggle = (event) => {
        if (event === 'calculator') {
            const { priceTicket, getMoney, giveTheChange } = this.state
            let giveChange = getMoney - priceTicket
            let bank = 0
            if (giveChange >= 1000) {
                bank = parseInt(giveChange / 1000)
                giveTheChange.push(bank)
                giveChange -= bank * 1000
            } else {
                giveTheChange.push(0)
            }
            if (giveChange >= 500) {
                bank = parseInt(giveChange / 500)
                giveTheChange.push(bank)
                giveChange -= bank * 500
            } else {
                giveTheChange.push(0)
            }
            if (giveChange >= 100) {
                bank = parseInt(giveChange / 100)
                giveTheChange.push(bank)
                giveChange -= bank * 100
            } else {
                giveTheChange.push(0)
            }
            if (giveChange >= 50) {
                bank = parseInt(giveChange / 50)
                giveTheChange.push(bank)
                giveChange -= bank * 50
            } else {
                giveTheChange.push(0)
            }
            if (giveChange >= 20) {
                bank = parseInt(giveChange / 20)
                giveTheChange.push(bank)
                giveChange -= bank * 20
            } else {
                giveTheChange.push(0)
            }
            if (giveChange >= 10) {
                bank = parseInt(giveChange / 10)
                giveTheChange.push(bank)
                giveChange -= bank * 10
            } else {
                giveTheChange.push(0)
            }
            if (giveChange >= 5) {
                bank = parseInt(giveChange / 5)
                giveTheChange.push(bank)
                giveChange -= bank * 5
            } else {
                giveTheChange.push(0)
            }
            if (giveChange >= 2) {
                bank = parseInt(giveChange / 2)
                giveTheChange.push(bank)
                giveChange -= bank * 2
            } else {
                giveTheChange.push(0)
            }
            if (giveChange >= 1) {
                bank = parseInt(giveChange / 1)
                giveTheChange.push(bank)
                giveChange -= bank * 1
            } else {
                giveTheChange.push(0)
            }

            this.setState({
                openModal: !this.state.openModal,
                totalGiveChange: getMoney - priceTicket
            })


        } else {
            this.setState({
                openModal: !this.state.openModal
            })
        }
    }

    submitPayment = () => {
        this.setState({
            loading: !this.state.loading,
        })
        const {
            dataUser,
            movie,
            seatSelect,
            timeMovie,
            openModal,
            loading,
            redirect
        } = this.state

        const body = {
            name: dataUser.name,
            mail: dataUser.mail,
            tel: dataUser.tel,
            date: moment(new Date()).format('DD/MM/YYYY'),
            theater: movie.theater,
            movie_id: movie._id,
            movie_name: `${movie.name_movie_en} ${movie.name_movie_th}`,
            round_movie: timeMovie,
            seat: seatSelect,
        }

        const url = 'https://movie-ticket-a8a41.firebaseapp.com/insert-ticket'

        setTimeout(() => {
            axios.post(url, body)
                .then(() => {
                    this.setState({
                        openModal: !openModal,
                        loading: !loading,
                        redirect: !redirect,
                    })
                })
        }, 2000)

    }

    setValue = (event, field) => {
        this.setState({
            dataUser: {
                ...this.state.dataUser,
                [field]: event.target.value
            }
        })

    }

    render() {
        const {
            movie,
            startCountdown,
            priceTicket,
            seatSelect,
            validateInput,
            openModal,
            getMoney,
            giveTheChange,
            totalGiveChange,
            dataUser,
            redirect,
            loading,
            timeMovie,
        } = this.state

        const rendererClock = ({ minutes, seconds, completed }) => {
            if (completed) {
                return (
                    <div>
                        <Modal isOpen={true} className="font" className="modal-time-out" >
                            <ModalBody >
                                <p className="font" > หมดเวลาในการทำรายการ กรุณาทำรายการใหม่ค่ะ </p>
                                <div className="button-ok" >
                                    <Button color="primary"><Link to='/' >ตกลง</Link></Button>
                                </div>
                            </ModalBody>
                        </Modal>
                    </div>
                )
            } else {
                return <span> เหลือเวลา {minutes}:{seconds}</span>
            }
        }

        return (
            <div className="payment" >
                {redirect ? <Redirect to={{ pathname: `/show-ticket`, state: { movie, seatSelect, timeMovie } }} /> : ''}
                <Layout payment={true} >
                    <div className="card-box" >
                        <div className="box-header" >
                            <div className="body-header" > กรอกข้อมูล </div>
                            <div className="time-clock font">
                                <Countdown
                                    key={startCountdown}
                                    date={Date.now() + 600000}
                                    renderer={rendererClock}
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="input-profile" >
                            <div className="row" >
                                <div className="header" >
                                    ชื่อ-นามสกุล
                                </div>
                                <div className="input" >
                                    <Input onChange={(event) => this.setValue(event, 'name')}
                                        style={{
                                            borderColor: dataUser.name.length == 0 && getMoney !== 0 ? 'red' : ''
                                        }} />
                                    {
                                        dataUser.name.length == 0 && getMoney !== 0 ?
                                            <div className="size-small red" > *กรุณากรอกชื่อ </div>
                                            : ''
                                    }
                                </div>
                            </div>
                            <div className="row" >
                                <div className="header" >
                                    เมลล์
                                </div>
                                <div className="input" >
                                    <Input onChange={(event) => this.setValue(event, 'mail')} type="email" />
                                </div>
                            </div>
                            <div className="row" >
                                <div className="header" >
                                    เบอร์โทร
                                </div>
                                <div className="input" >
                                    <Input onChange={(event) => this.setValue(event, 'tel')} type="number" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-box" >
                        <div className="payment-box" >
                            <div className="total-payment blue size-large" > ยอดชำระ {priceTicket} บาท </div>
                            <div className="get-money blue size-large" >
                                <div className="money" > รับเงิน </div>
                                <div className="input-money" >
                                    <div><Input type="number" max="200000" onChange={this.onChangeGetMoney} style={{ borderColor: validateInput ? 'red' : '' }} /></div>
                                    {
                                        validateInput ?
                                            <div className="size-small red" > *กรุณากรอกจำนวนเงินที่ถูกต้อง </div>
                                            : ''
                                    }
                                </div>
                                <div className="unit" > บาท </div>
                            </div>
                            <div className="submit-payment blue size-large" >
                                <Button disabled={getMoney === 0 || validateInput || dataUser.name.length == 0} onClick={() => this.toggle('calculator')}> ชำระเงิน </Button>
                                <Modal isOpen={openModal} toggle={this.toggle} className="font" className="submit-payment-modal" >
                                    <ModalHeader toggle={this.toggle}className="font"  > {totalGiveChange !== 0 ? `เงินทอน: ${totalGiveChange} บาท` : 'ไม่มีเงินทอน'} </ModalHeader>
                                    {
                                        totalGiveChange !== 0 &&
                                        <ModalBody>
                                            <div className="give-the-change" >
                                                {
                                                    allGiveTheChange.map((value, index) => {
                                                        return (
                                                            <div className="change-box" key={+index}>
                                                                <div className="text font" > {value} </div>
                                                                <div className="text-money font" > {giveTheChange[index]} </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </ModalBody>
                                    }
                                    {
                                        totalGiveChange !== 0 ?
                                            <ModalFooter>
                                                <Button className="font" disabled={loading} color="primary" onClick={this.submitPayment}>
                                                    {loading ? 'Loading…' : 'ตกลง'}
                                                </Button>
                                            </ModalFooter>
                                            :
                                            <div className="button-footer" >
                                                <Button className="font" disabled={loading} color="primary" onClick={this.submitPayment}>
                                                    {loading ? 'Loading…' : 'ตกลง'}
                                                </Button>
                                            </div>
                                    }
                                </Modal>
                            </div>
                        </div>
                    </div>

                </Layout>
            </div>
        )
    }
}

export default Payment