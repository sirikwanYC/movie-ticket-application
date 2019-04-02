import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

class Navbar extends Component {
    render() {
        return (
            <Row className="head-nav" >
                <Col xs="auto" className="margin" > logo </Col>
                <Col xs="auto" className="margin-text-logo" > text logo </Col>
            </Row>
        )
    }
}

export default Navbar