import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };

        this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
        this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
    }

    handleUpdateSearch(e) {
        var search = e.target.value;
        this.setState(function () {
            return {
                search: search
            }
        });
    }

    handleSubmitSearch() {
        this.props.onSubmitSearch(this.state.search)

        this.setState(function () {
            return {
                search: ''
            }
        })
        console.log('Search')
    }

    render() {
        return (
            <div
                className='search-container'
                style={{ flexDirection: this.props.direction }}>
                <input
                    className='form-control'
                    onChange={this.handleUpdateSearch}
                    placeholder='St. George, Utah'
                    type='text'
                    value={this.state.zipcode} />
                <button
                    type='button'
                    style={{ margin: 10 }}
                    className='btn btn-success'
                    onClick={this.handleSubmitSearch}>
                    Get Weather
                </button>
            </div>
        );
    }
}

Search.defaultProps = {
    direction: 'column'
}

Search.propTypes = {
    direction: PropTypes.string,
    onSubmitSearch: PropTypes.func
}

export default Search;