import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter , Route } from 'react-router-dom'
import Home from './pages/Home'
import ChooseASeat from './pages/ChooseASeat'
import Payment from './pages/Payment'
import ShowTicket from './pages/ShowTicket'
import './style/index.scss'

const Index = () => (
    <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/choose-a-seat" component={ChooseASeat} />
        <Route path="/payment" component={Payment} />
        <Route path="/show-ticket/:id" component={ShowTicket} />
    </BrowserRouter>
)

ReactDOM.render(<Index />, document.getElementById('app'))
