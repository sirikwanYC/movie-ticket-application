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
        this.setState({
            search
        })
        this.props.callback(search, this.state.sortSearch)
    }

    changeValueSort = (e) => {
        let { search, sortSearch } = this.state
        sortSearch = e.currentTarget.textContent
        this.setState({
            sortSearch,
        })
        this.props.callback(search, sortSearch)
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
                                <DropdownToggle caret>
                                    { sortSearch }
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={this.changeValueSort}> เรียงราคาจากน้อยไปมาก </DropdownItem>
                                    <DropdownItem onClick={this.changeValueSort}> เรียงราคาจากมากไปน้อย </DropdownItem>
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