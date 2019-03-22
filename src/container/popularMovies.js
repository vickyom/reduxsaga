import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesTemp from '../components/moviesTemp'
import SearchBox from '../components/searchBox';
import Sliders from "../components/Sliders"
class popularMovies extends Component {

    componentDidMount() {
        this.props.fetchPopularData();
    }
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
     }
    handleChange(data){
        this.props.fetchSearchData(data);
        // this.props.dispatch({type: 'REQUEST_SEARCH_DATA',searchText:data.toLowerCase()});
    }
    render() {

        let bannerArr = []
        const settings = {
            dots: true,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
          };

            this.props.PMData && this.props.PMData.map(mov =>
                bannerArr.push({
                    "id"        : mov.id,
                    "ImgSrc"    : `https://image.tmdb.org/t/p/w500/${mov.backdrop_path}`,
                    "alt"       : mov.title,
                    "href"      : `/movies/${mov.id}`
                })
            )

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
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <SearchBox SearchReq={this.handleChange} SearchData={this.props.SAdata}/>
                    </div>
                </div>
                <div className="mb-4">
                    <Sliders setting = {settings} Imgwidth={325} sliderData = {bannerArr}>
                    </Sliders>
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
            return dispatch({type: 'REQUEST_FILTER_DATA',filter:data.target.value});
        },
        fetchSearchData: function(data) {
            return dispatch({type: 'REQUEST_SEARCH_DATA',searchText:data.toLowerCase()});
        },
    };
}

function mapStateToProps(state) {
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
