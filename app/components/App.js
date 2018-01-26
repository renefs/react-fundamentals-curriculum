import React, { Component } from 'react';
import Home from './Home'
import Forecast from './Forecast'
import Search from './Search'

var ReactRouter = require('react-router-dom');
var BrowserRouter = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    {/* The Navbar Search Component needs to be in a route in order to have history. */}
                    <Route render={function (props) {
                        return (
                            <div className="navbar">
                                <h1>
                                    Weather App
                                </h1>
                                <Search
                                    direction='row'
                                    onSubmitSearch={function (city) {
                                        props.history.push({
                                            pathname: '/forecast',
                                            search: '?city=' + city
                                        })
                                        console.log('onSubmitSearch')
                                    }}
                                    search={123} />
                            </div>
                        )
                    }} />
                    <Route exact path='/' component={Home} />
                    <Route path='/forecast' component={Forecast} />
                </div>
            </BrowserRouter>
        );
    }
}

module.exports = App;