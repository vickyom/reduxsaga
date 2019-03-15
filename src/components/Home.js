import React, { Component } from "react";
import Sliders from "./Sliders"
export default class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {id: "1", ImgSrc: "https://image.tmdb.org/t/p/w500//d1hQaeKeAW3FBc3v6tIP5utleU0.jpg"},
        {id: "2", ImgSrc: "https://image.tmdb.org/t/p/w500//h3KN24PrOheHVYs9ypuOIdFBEpX.jpg"},
        {id: "3", ImgSrc: "https://image.tmdb.org/t/p/w500//aQXTw3wIWuFMy0beXRiZ1xVKtcf.jpg"},
        {id: "4", ImgSrc: "https://image.tmdb.org/t/p/w500//uUiId6cG32JSRI6RyBQSvQtLjz2.jpg"},
        {id: "5", ImgSrc: "https://image.tmdb.org/t/p/w500//5A2bMlLfJrAfX9bqAibOL2gCruF.jpg"},
        {id: "6", ImgSrc: "https://image.tmdb.org/t/p/w500//wDN3FIcQQ1HI7mz1OOKYHSQtaiE.jpg"}
     ]
    };
    this.click = this.click.bind(this);
  }
  click() {
    const { slides } = this.state;
    this.setState({
      slides:
        slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
    });
  }
  render() {
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
    return (
      <div style={{marginTop:10}}>
        <Sliders setting = {settings} Imgwidth={325} sliderData = {this.state.slides}>
        </Sliders>
      </div>
    );
  }
}