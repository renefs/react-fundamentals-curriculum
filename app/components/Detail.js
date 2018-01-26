import React, { Component } from 'react';
import Day from './Day'
var convertTemp = require('../utils/helpers').convertTemp

class Detail extends Component {
    render() {
        var props = this.props.location.state;
        return (
            <div>
                <Day day={props} />
                <div className='description-container'>
                    <p>{props.city}</p>
                    <p>{props.weather[0].description}</p>
                    <p>min temp: {convertTemp(props.temp.min)} degrees</p>
                    <p>max temp: {convertTemp(props.temp.max)} degrees</p>
                    <p>humidity: {props.humidity}</p>
                </div>
            </div>
        );
    }
}

export default Detail;