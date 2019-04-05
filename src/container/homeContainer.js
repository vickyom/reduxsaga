import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sliders from "../components/Sliders"
import SampleNextArrow from '../components/nextArrow';
import SamplePrevArrow from '../components/prevArrow';

class sourceContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            repos: null,
            bannerHomeArr:[],
            bannerTvArr:[],
            bannerPersonArr:[]
        }

    }
    componentDidMount() {
        this.setState({ loading: true });
        this.props.requestSourceData();

    }
    getMoviesData(){
        this.props.HomeData && this.props.HomeData.slice(0, 9).map(mov =>
            this.state.bannerHomeArr.push({
                "id"        : mov.id,
                "ImgSrc"    : mov.backdrop_path != "" ? `https://image.tmdb.org/t/p/w500/${mov.backdrop_path}` : "",
                "alt"       : mov.title,
                "href"      : `/movies/${mov.id}`
            })
        )
    }
    getTvData(){

        this.props.TvData && this.props.TvData.slice(0, 9).map(tv =>
            this.state.bannerTvArr.push({
                "id"        : tv.id,
                "ImgSrc"    : tv.poster_path != "" ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}` : "",
                "alt"       : tv.title,
                "href"      : `/movies/${tv.id}`,
                "Title"     : tv.original_name
            })
        )
    }
    getPersonData(){

        this.props.PersonData && this.props.PersonData.slice(0, 9).map(person =>
            this.state.bannerPersonArr.push({
                "id"        : person.id,
                "ImgSrc"    : person.profile_path != null ? `https://image.tmdb.org/t/p/w500/${person.profile_path}` : "http://placehold.it/108x172",
                "alt"       : person.title,
                "href"      : `/movies/${person.id}`,
                "Title"     : person.name
            })
        )
    }

    render() {

    if (this.props.HomeData.length > 0) {
        this.getMoviesData();
    }
    if (this.props.PersonData.length > 0) {
        this.getPersonData();
    }
    if (this.props.TvData.length > 0) {
        this.getTvData();
    }
    this.getPersonData();
    this.getTvData();

        const settings = {
            dots: true,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "15px",
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        const Persettings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        const Tvsettings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div>

                <div className="col-md-12 mt-2 mb-2">
                <h4 className="bg-primary text-light text-capitalize text-center">Popular Movies</h4>
                    <Sliders setting ={settings} plachl='500X281' Imgwidth={515} sliderData ={this.state.bannerHomeArr}>
                        </Sliders>
                </div>
                <div className="col-md-12 mt-4 mb-4">
                <h4 className="bg-primary text-light text-capitalize text-center">Popular TV Shows</h4>
                    <Sliders setting = {Tvsettings} plachl='225X381' ImgHeight={225} sliderData = {this.state.bannerTvArr}>
                        </Sliders>
                </div>
                <div className="col-md-12 mt-2 mb-2 p-2">
                    <h4 className="bg-primary text-light text-capitalize text-capitalize text-center">Popular Person</h4>
                    <Sliders setting = {Persettings} plachl='225X381' ImgHeight={225} sliderData = {this.state.bannerPersonArr}>
                    </Sliders>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        requestSourceData: function(param) {
            return dispatch({
                type: 'REQUEST_HOME_DATA',
                param: param,
            });
        },
    };
}

function mapStateToProps(state) {
    return {
        HomeData: state.homeList.homeList,
        TvData: state.homeList.tvList,
        PersonData: state.homeList.personList,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(sourceContainer);
