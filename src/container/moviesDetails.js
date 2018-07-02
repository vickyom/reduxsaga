import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesDetailsTemp from '../components/moviesDetailsTemp';

class moviesDetails extends Component {
    componentDidMount() {
        this.props.getMovieDet();
    }
    render() {
        return (
            <div>
                <h1>{this.props.match.params.source}</h1>
                <MoviesDetailsTemp MSData= {this.props.SMMovieData} MDData={this.props.MVDData} />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        getMovieDet: function() {
            return dispatch({
                type: 'REQUEST_MOVDET_DATA',
                param: ownProps.match.params.movID,
            });
        },
    };
}

function mapStateToProps(state) {
    console.log(' -- -- MovDetRed  mapStateToProps = = = ', state);
    return {
        MVDData: state.movDetRed.moviesDetails,
        SMMovieData: state.similarMov.simMovData
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(moviesDetails);
