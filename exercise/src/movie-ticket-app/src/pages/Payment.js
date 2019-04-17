import React, { Component } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'
import axios from 'axios'

const allGiveTheChange = ['ธนบัตร 1000', 'ธนบัตร 500', 'ธนบัตร 100', 'ธนบัตร 50', 'ธนบัตร 20', 'เหรียญ 10', 'เหรียญ 5', 'เหรียญ 2', 'เหรียญ 1']
class Payment extends Component {
    state = {
        movie: this.props.location.state.movie,
        priceTicket: this.props.location.state.priceTicket,
        seatSelect: this.props.location.state.seatSelect,
        getMoney: 0,
        validateInput: false,
        openModal: false,
        giveTheChange: [],
        totalGiveChange: 0
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
            openModal: !this.state.openModal
        })
    }


    render() {
        const { movie, priceTicket, seatSelect, validateInput, openModal, getMoney, giveTheChange, totalGiveChange } = this.state
        return (
            <div className="payment" >
                <Layout payment={true} >
                    <div className="card-box" >
                        <div className="payment-box" >
                            <div className="total-payment blue size-large" > ยอดชำระ {priceTicket} บาท </div>
                            <div className="get-money blue size-large" >
                                <div className="money" > รับเงิน </div>
                                <div className="input-money" >
                                    <div><Input onChange={this.onChangeGetMoney} style={{ borderColor: validateInput ? 'red' : '' }} /></div>
                                    {/* {
                                        showAlert ?
                                        <Alert color="danger">
                                            กรุณากรอกจำนวนเงินให้ถูกต้อง
                                        </Alert>
                                        : ''
                                    } */}
                                </div>
                                <div className="unit" > บาท </div>
                            </div>
                            <div className="submit-payment blue size-large" >
                                <Button disabled={getMoney === 0 || validateInput} onClick={() => this.toggle('calculator')}> ชำระเงิน </Button>
                                <Modal isOpen={openModal} toggle={this.toggle} className="font" >
                                    <ModalHeader toggle={this.toggle} >เงินทอน: {totalGiveChange} บาท</ModalHeader>
                                    <ModalBody>
                                        <div className="give-the-change" >
                                            {
                                                allGiveTheChange.map((value, index) => {
                                                    return (
                                                        <div className="change-box" key={+index}>
                                                            <div className="text" > {value} </div>
                                                            <div className="text-money" > {giveTheChange[index]} </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.submitPayment}>ตกลง</Button>{' '}
                                    </ModalFooter>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <div className="card-box" >
                        details
                    </div>
                </Layout>
            </div>
        )
    }
}

export default Payment