import React, { Component } from 'react';
import Search from './Search';

class Home extends Component {
    render() {
        let props = this.props;
        return (
            <div className="home-container" style={{ backgroundImage: 'url(\'app/images/pattern.svg\')' }}>
                <h1 className='header'>Enter a City and State</h1>
                <Search
                    direction='column'
                    onSubmitSearch={function (city) {
                        props.history.push({
                            pathname: '/forecast',
                            search: '?city=' + city
                        })
                        console.log('onSubmitSearch')
                    }}
                    search={123} />
            </div>
        );
    }
}

export default Home;