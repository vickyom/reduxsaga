import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class Sliders extends Component {
  render() {
    console.log("---- this.props.sliderData - - -- ");
    console.log(this.props);
    let imgw = this.props.Imgwidth;
    return (
      <div>
        <Slider {...this.props.setting}>
          {this.props.sliderData.map(function(slide) {
            return (
              <div key={slide.id}>
                <img id={slide.id} style={{width: `${imgw}`}} src={slide.ImgSrc} alt='image'/>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}