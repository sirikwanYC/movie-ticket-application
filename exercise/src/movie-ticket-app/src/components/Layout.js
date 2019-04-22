import React, { Component } from 'react'
import { Row, } from 'reactstrap'
import Navbar from './Navbar'

class Layout extends Component {
    render() {
        return (
            <div className="layout font" >
                <Navbar search={this.props.pageHome} callback={this.props.callback} />
                {
                    this.props.hidden !== null && 
                    this.props.hidden ?
                        ''
                        :
                        <Row className="text-header" >
                            <div className="bar-text" >
                                <div className="select-movie" >
                                    <div className={
                                        this.props.selectMovie ||
                                            this.props.selectSeat ||
                                            this.props.payment ||
                                            this.props.ShowTicket ?
                                            "border-number-focus white size-large"
                                            :
                                            "border-number dark-blue size-large"
                                    } >1</div>
                                    <div className={
                                        this.props.selectSeat ||
                                            this.props.payment ||
                                            this.props.ShowTicket ?
                                            "line-focus"
                                            :
                                            "line"
                                    }></div>
                                </div>
                                <div className="select-movie" >
                                    <div className={
                                        this.props.selectSeat ||
                                            this.props.payment ||
                                            this.props.ShowTicket ?
                                            "border-number-focus white size-large"
                                            :
                                            "border-number dark-blue size-large"
                                    }
                                    >2</div>
                                    <div className={
                                        this.props.payment ||
                                            this.props.ShowTicket ?
                                            "line-focus"
                                            :
                                            "line"
                                    } ></div>
                                </div>
                                <div className="select-movie" >
                                    <div className={
                                        this.props.payment ||
                                            this.props.ShowTicket ?
                                            "border-number-focus white size-large"
                                            :
                                            "border-number dark-blue size-large"
                                    } >3</div>
                                    <div className={
                                        this.props.ShowTicket ?
                                            "line-focus"
                                            :
                                            "line"
                                    } ></div>
                                </div>
                                <div className="select-movie-last" >
                                    <div className={

                                        this.props.ShowTicket ?
                                            "border-number-focus white size-large"
                                            :
                                            "border-number dark-blue size-large"
                                    } >4</div>
                                </div>
                            </div>
                            <div className="bar-text" style={{ marginTop: '5px' }}>
                                <div className={
                                    `size-medium ${
                                    this.props.selectMovie &&
                                        this.props.selectMovie ||
                                        this.props.selectSeat ||
                                        this.props.payment ||
                                        this.props.ShowTicket ?
                                        'text-opacity blue' : 'text white'
                                    }`
                                } >เลือกภาพยนตร์</div>
                                <div className={
                                    `size-medium ${
                                    this.props.selectSeat &&
                                        this.props.selectSeat ||
                                        this.props.payment ||
                                        this.props.ShowTicket ?
                                        'text-opacity blue' : 'text white'
                                    }`}
                                    style={{ paddingLeft: '5.7%' }} >เลือกที่นั่ง</div>
                                <div className={
                                    `size-medium ${
                                    this.props.payment &&
                                        this.props.payment ||
                                        this.props.ShowTicket ?
                                        'text-opacity blue' : 'text white'
                                    }`} style={{ paddingLeft: '10%' }} >ชำระเงิน</div>
                                <div className={
                                    `size-medium ${
                                    this.props.ShowTicket ?
                                        'text-opacity blue' : 'text white'
                                    }`} style={{ paddingLeft: '14.9%' }} >สิ้นสุด</div>
                            </div>
                        </Row>
                }
                <Row className="card-content" >
                    {this.props.children}
                </Row>
            </div>

        )
    }
}

export default Layout