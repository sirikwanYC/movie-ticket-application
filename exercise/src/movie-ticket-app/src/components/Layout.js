import React, { Component } from 'react'
import { Row, } from 'reactstrap'
import Navbar from './Navbar'

class Layout extends Component {
    render() {
        return (
            <div className="font" >
                <Navbar />
                <Row className="card-content" >
                    {this.props.children}
                </Row>
            </div>
        )
    }
}

export default Layout