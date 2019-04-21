import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

class Navbar extends Component {
    state = {
        dropdownOpen: false,
        search: '',
        sortSearch: 'เรียงราคาจากน้อยไปมาก'
    }

    toggle = () => {
        this.setState({
           dropdownOpen: !this.state.dropdownOpen,
        })
    }

    inputSearch = (e) => {
        const search = e.target.value
        const {sortSearch} = this.state
        const sort = sortSearch == 'เรียงราคาจากน้อยไปมาก' ? 1 : -1
        this.setState({
            search
        })

        this.props.callback(search, sort)
    }

    changeValueSort = (e) => {
        let { search } = this.state
        const sortSearch = e.currentTarget.textContent
        const sort = sortSearch == 'เรียงราคาจากน้อยไปมาก' ? 1 : -1
        console.log(sort)
        this.setState({
            sortSearch,
        })

        this.props.callback(search, sort)
    }

    render() {
        const { sortSearch } = this.state
        return (
            <div className="head-nav">
                <div className="logo" >
                    <Link to="/">
                        <Row>
                            <Col xs="auto" className="text size-large" > movie </Col>
                            <Col xs={5} className="margin" > <img src="/images/cinema-ticket.png" /> </Col>
                        </Row>
                    </Link>
                </div>
                {
                    this.props.search &&
                    <div className="search">
                        <div className="text-search" > ค้นหาหนัง </div>
                        <div className="input-search" > <Input onChange={this.inputSearch} /> </div>
                        <div className="dropdown-sort" >
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret>{sortSearch}</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={this.changeValueSort}>เรียงราคาจากน้อยไปมาก</DropdownItem>
                                    <DropdownItem onClick={this.changeValueSort}>เรียงราคาจากมากไปน้อย</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>

                    </div>
                }
            </div>
        )
    }
}

export default Navbar