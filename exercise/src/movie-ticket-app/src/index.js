// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter , Route } from 'react-router-dom'
import Home from './pages/Home'
import ChooseASeat from './pages/ChooseASeat'
import './style/index.scss'

const Index = () => (
    <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/choose-a-seat" component={ChooseASeat} />
    </BrowserRouter>
)

ReactDOM.render(<Index />, document.getElementById('app'))
