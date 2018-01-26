import React, { Component } from 'react';

function Day(props) {
    var date = props.day.dt;
    var icon = props.day.weather[0].icon;
    return (
        <div onClick={props.onClick} className='dayContainer'>
            <img className='weather' src={'/app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
            <h2 className='subheader'>{date}</h2>
        </div>
    );
}

export default Day;