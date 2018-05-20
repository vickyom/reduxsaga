
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesTemp from '../components/moviesTemp'
import { call, put, takeLatest } from "redux-saga/effects";
class popularMovies extends Component {
    componentDidMount() {
        this.props.fetchPopularData();
    }
    render() {
        console.log('mapStateToProps - - render ', this.props.PMData);
        return (
            <div>
                    
                    <div className="col-md-4 mt-2 mb-2">
                        <select className="form-control"  onChange={event => this.props.filterData(event)}>
                            <option value="">Rating</option>
                            <option value="RL">Rating Low</option>
                            <option value="RH">Rating Heigh</option>
                        </select>
                    </div>
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
        filterData: function(data) {
           
            //  put({type: 'REQUEST_FILTER_DATA', payload: data.target.value });
            return dispatch({type: 'REQUEST_FILTER_DATA',filter:data.target.value});
        },
    };
}

function mapStateToProps(state) {
    console.log("mapStateToProps = = =  " ,state.filterRed.filterType);
    let sortData = [];
if(state.filterRed.filterType == 'RL'){
     sortData =  state.popularMoviesRed.popMovies.slice().sort((first, second) => {    
        return parseFloat(first.vote_average) - parseFloat(second.vote_average)
    })
   
}else if(state.filterRed.filterType == 'RH'){
     sortData =  state.popularMoviesRed.popMovies.slice().sort((first, second) => {
            return parseFloat(second.vote_average) - parseFloat(first.vote_average)
    })
    
}else{
     sortData =  state.popularMoviesRed.popMovies
}
//     case 'ASC':


// case 'DES':
//     let sortDesData =  Data.list.results.slice().sort((first, second) => {
//             return parseFloat(second.vote_average) - parseFloat(first.vote_average)
//     })
//     return sortDesData

    return {
        PMData: sortData,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(popularMovies);
