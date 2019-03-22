import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesTemp from '../components/moviesTemp';
import Sliders from "../components/Sliders"

class sourceContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
       this.props.requestSourceData();
    }
    render() {
        let bannerHomeArr =[],bannerPersonArr =[],bannerTvArr=[];
       { this.props.HomeData && this.props.HomeData.slice(0, 9).map(mov =>
        bannerHomeArr.push({
                    "id"        : mov.id,
                    "ImgSrc"    : mov.backdrop_path != "" ? `https://image.tmdb.org/t/p/w500/${mov.backdrop_path}` : "",
                    "alt"       : mov.title,
                    "href"      : `/movies/${mov.id}`
                })
        )
        this.props.TvData && this.props.TvData.slice(0, 9).map(tv =>
            bannerTvArr.push({
                "id"        : tv.id,
                "ImgSrc"    : tv.profile_path != "" ? `https://image.tmdb.org/t/p/w500/${tv.backdrop_path}` : "",
                "alt"       : tv.title,
                "href"      : `/movies/${tv.id}`,
                "Title"     : tv.original_name
            })
        )
            this.props.PersonData && this.props.PersonData.slice(0, 9).map(person =>
            bannerPersonArr.push({
                "id"        : person.id,
                "ImgSrc"    : person.profile_path != "" ? `https://image.tmdb.org/t/p/w500/${person.profile_path}` : "",
                "alt"       : person.title,
                "href"      : `/movies/${person.id}`,
                "Title"     : person.name
            })
    )

    }
        const settings = {
            dots: true,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "10px",
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };
        const Persettings = {
            dots: true,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };
        const Tvsettings = {
            dots: true,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };
        return (
            <div>
                <div className="col-md-12 mt-2 mb-2">
                    <Sliders setting = {settings} Imgwidth={515} sliderData = {bannerHomeArr}>
                        </Sliders>
                </div>
                <div className="col-md-12 mt-4 mb-4">
                <h3>Popular TV Shows</h3>
                    <Sliders setting = {Tvsettings} Imgwidth={315} sliderData = {bannerTvArr}>
                        </Sliders>
                </div>
                <div className="col-md-12 mt-2 mb-2 p-2">
                <h3>Popular Person</h3>
                    <Sliders setting = {Persettings} ImgHeight={225} sliderData = {bannerPersonArr}>
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
    console.log("state - - - -- - -  -");
    console.log(state.homeList)
    return {
        HomeData: state.homeList.homeList,
        TvData: state.homeList.tvList,
        PersonData: state.homeList.personList,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(sourceContainer);
