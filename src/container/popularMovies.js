
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesTemp from '../components/moviesTemp'

class popularMovies extends Component {
    componentDidMount() {
        this.props.fetchPopularData();
    }
    render() {
        console.log('mapStateToProps - - render ', this.props.PMData);
        return (
            <div>
              
                <MoviesTemp pmvData={this.props.PMData} />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    
    return {
        fetchPopularData: function() {
            return dispatch({type: 'REQUEST_POPULAR_DATA'});
        },
    };
}

function mapStateToProps(state) {
    
    
    return {
        PMData: state.popularMoviesRed.popMovies,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(popularMovies);
