import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div className="head-nav">
                <Link to="/">
                    <Row  >
                        <Col xs="auto" className="text size-large" > movie </Col>
                        <Col xs="auto" className="margin" > <img src="/images/cinema-ticket.png" /> </Col>
                    </Row>
                </Link>
            </div>
        )
    }
}

export default Navbar