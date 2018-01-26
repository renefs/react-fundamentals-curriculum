import React, { Component } from 'react';
import Home from './Home'
import Forecast from './Forecast'
var ReactRouter = require('react-router-dom');
var BrowserRouter = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="navbar">
                        <h1>
                            Weather App
                        </h1>
                    </div>
                    <Route exact path='/' component={Home} />
                    <Route path='/forecast' component={Forecast} />
                </div>
            </BrowserRouter>
        );
    }
}

module.exports = App;