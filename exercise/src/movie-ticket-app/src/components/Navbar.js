import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

class Navbar extends Component {
    render() {
        return (
            <Row className="head-nav" >
                <Col xs="auto" className="text size-large" > movie </Col>
                <Col xs="auto" className="margin" > <img src="/images/cinema-ticket.png" /> </Col>
            </Row>
        )
    }
}

export default Navbar