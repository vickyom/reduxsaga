import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesTemp from '../components/moviesTemp'
import { call, put, takeLatest } from "redux-saga/effects";
import SearchBox from '../components/searchBox';
class popularMovies extends Component {
    
    componentDidMount() {
        this.props.fetchPopularData();
    }
    render() {
        console.log('mapStateToProps - - render ', this.props.PMData);
        return (
            <div> 
            <div className="row mt-2 mb-2 p-2 border bg-info text-white">
            
                    <div className="col-md-4">
                        <select className="form-control"  onChange={event => this.props.filterData(event)}>
                            <option value="">Rating</option>
                            <option value="RL">Rating Low</option>
                            <option value="RH">Rating Heigh</option>
                        </select>
                    </div>
                {/* <SearchBox SearchReq={this.handleChange} SearchData={this.props.PMData}/>    */}
                <div className="col-md-4"></div>
                     <div className="col-md-4">
						<form action="#" method="get">
							<div className="input-group">
								<input onChange={(e) => this.props.handleChange(e)}  className="form-control" id="system-search" name="q" placeholder="Search for" required=""/>
							</div>
						</form>
                        <SearchBox SearchData={this.props.SAdata}/>  
					</div>
                </div>
                <div>    
                  <MoviesTemp pmvData={this.props.PMData} />
                </div>    
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
        handleChange: function(data) {
            console.log("handleChange - -  ",data.target.value.toLowerCase());
            //  put({type: 'REQUEST_FILTER_DATA', payload: data.target.value });
            return dispatch({type: 'REQUEST_SEARCH_DATA',searchText:data.target.value.toLowerCase()});
        },
    };
}

function mapStateToProps(state) {
    console.log("mapStateToProps = = =  " ,state);
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

    return {
        PMData: sortData,
        SAdata: state.searchRed.searchData
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(popularMovies);
