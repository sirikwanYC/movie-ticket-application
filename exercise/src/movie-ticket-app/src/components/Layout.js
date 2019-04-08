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
                                this.props.selectMovie === true || 
                                this.props.selectSeat === true
                                ?
                                    "border-number-focus white size-large"
                                    :
                                    "border-number dark-blue size-large"
                            } >1</div>
                            <div className={
                                this.props.selectSeat && this.props.selectSeat ?
                                    "line-focus"
                                    :
                                    "line"
                            }></div>
                        </div>
                        <div className="select-movie" >
                            <div className={
                                this.props.selectSeat && 
                                this.props.selectSeat ?
                                    "border-number-focus white size-large"
                                    :
                                    "border-number dark-blue size-large"
                            }
                             >2</div>
                            <div className="line" ></div>
                        </div>
                        <div className="select-movie" >
                            <div className="border-number dark-blue size-large" >3</div>
                            <div className="line" ></div>
                        </div>
                        <div className="select-movie-last" >
                            <div className="border-number dark-blue size-large" >4</div>
                        </div>
                    </div>
                    <div className="bar-text" style={{ marginTop: '5px' }}>
                        <div className={ 
                            `size-medium ${
                                this.props.selectMovie && 
                                this.props.selectMovie === true || 
                                this.props.selectSeat === true ? 
                                'text-opacity blue': 'text white'
                            }`
                        } >เลือกภาพยนตร์</div>
                        <div className={ 
                            `size-medium ${
                                this.props.selectSeat && 
                                this.props.selectSeat ? 
                                'text-opacity blue': 'text white'
                            }`} 
                            style={{ paddingLeft: '7.1%' }} >เลือกที่นั่ง</div>
                        <div className="text white size-medium" style={{ paddingLeft: '12.5%' }} >ชำระเงิน</div>
                        <div className="text white size-medium" style={{ paddingLeft: '18%' }} >สิ้นสุด</div>
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