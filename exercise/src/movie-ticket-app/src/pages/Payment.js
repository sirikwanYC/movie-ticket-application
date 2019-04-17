import React, { Component } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import axios from 'axios'

class Payment extends Component {
    state = {
        movie: this.props.location.state.movie,
        priceTicket: this.props.location.state.priceTicket,
        seatSelect: this.props.location.state.seatSelect,
        getMoney: 0,
        validateInput: false,
        openModal: false
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

    toggle = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    }

    submitPayment = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    }


    render() {
        const { movie, priceTicket, seatSelect, validateInput, openModal, getMoney } = this.state
        return (
            <div className="payment" >
                <Layout payment={true} >
                    <div className="card-box" >
                        <div className="payment-box" >
                            <div className="total-payment blue size-large" > ยอดชำระ {priceTicket} บาท </div>
                            <div className="get-money blue size-large" >
                                <div className="money" > รับเงิน </div>
                                <div className="input-money" > <Input onChange={this.onChangeGetMoney} style={{ borderColor: validateInput ? 'red' : '' }} /> </div>
                                <div className="unit" > บาท </div>
                            </div>
                            <div className="submit-payment blue size-large" >
                                <Button disabled={getMoney === 0 || validateInput} onClick={this.toggle}> ชำระเงิน </Button>
                                <Modal isOpen={openModal} toggle={this.toggle}>
                                    <ModalHeader toggle={this.toggle}>เงินทอน</ModalHeader>
                                    <ModalBody>
                                        vbvb
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="secondary" onClick={this.toggle}>ยกเลิก</Button>
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