import React, { Component } from 'react'
import { Row, } from 'reactstrap'
import Navbar from './Navbar'

class Layout extends Component {
    render() {
        return (
            <div className="layout font" >
                <Navbar />
                <Row className="text-header" >
                    <div className="bar-text" >
                        <div className="select-movie" >
                            <div className={
                                this.props.selectMovie && 
                                this.props.selectMovie  || 
                                this.props.selectSeat  ||
                                this.props.payment  
                                ?
                                    "border-number-focus white size-large"
                                    :
                                    "border-number dark-blue size-large"
                            } >1</div>
                            <div className={
                                this.props.selectSeat && 
                                this.props.selectSeat || 
                                this.props.payment?
                                    "line-focus"
                                    :
                                    "line"
                            }></div>
                        </div>
                        <div className="select-movie" >
                            <div className={
                                this.props.selectSeat && 
                                this.props.selectSeat ||
                                this.props.payment ?
                                    "border-number-focus white size-large"
                                    :
                                    "border-number dark-blue size-large"
                            }
                             >2</div>
                            <div className={
                                this.props.payment && this.props.payment ?
                                    "line-focus"
                                    :
                                    "line"
                            } ></div>
                        </div>
                        <div className="select-movie" >
                            <div className={
                                this.props.payment && 
                                this.props.payment ?
                                    "border-number-focus white size-large"
                                    :
                                    "border-number dark-blue size-large"
                            } >3</div>
                            <div className={
                                this.props.ticket && this.props.ticket ?
                                    "line-focus"
                                    :
                                    "line"
                            } ></div>
                        </div>
                        <div className="select-movie-last" >
                            <div className="border-number dark-blue size-large" >4</div>
                        </div>
                    </div>
                    <div className="bar-text" style={{ marginTop: '5px' }}>
                        <div className={ 
                            `size-medium ${
                                this.props.selectMovie && 
                                this.props.selectMovie || 
                                this.props.selectSeat || 
                                this.props.payment ? 
                                'text-opacity blue': 'text white'
                            }`
                        } >เลือกภาพยนตร์</div>
                        <div className={ 
                            `size-medium ${
                                this.props.selectSeat && 
                                this.props.selectSeat || 
                                this.props.payment ? 
                                'text-opacity blue': 'text white'
                            }`} 
                            style={{ paddingLeft: '5.7%' }} >เลือกที่นั่ง</div>
                        <div className={ 
                            `size-medium ${
                                this.props.payment && 
                                this.props.payment ? 
                                'text-opacity blue': 'text white'
                            }`} style={{ paddingLeft: '10%' }} >ชำระเงิน</div>
                        <div className="text white size-medium" style={{ paddingLeft: '14.9%' }} >สิ้นสุด</div>
                    </div>
                </Row>
                <Row className="card-content" >
                    {this.props.children}
                </Row>
            </div>
        )
    }
}

export default Layout