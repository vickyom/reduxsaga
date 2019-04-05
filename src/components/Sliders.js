import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyImage } from "react-lazy-images";

export default class Sliders extends Component {

  render() {
    console.log("---- this.props.sliderData - - -- ");
    console.log(this.props.plachl);
    let imgw = this.props.Imgwidth && this.props.Imgwidth || this.props.ImgHeight
    let defaultPlac = this.props.plachl

    return (
      <div>
        <Slider {...this.props.setting}>
          {this.props.sliderData.map(function(slide) {
            return (
              <div key={slide.id}>
                <LazyImage
                  src={slide.ImgSrc}
                  alt="Image"
                  style={{width: `${imgw}`}}
                  placeholder={({ imageProps, ref }) => (
                    <img ref={ref} src={`http://placehold.it/${defaultPlac}`} alt={imageProps.alt} />
                  )}
                  actual={({ imageProps }) => <img {...imageProps} />}
                />
                {/* <img id={slide.id} style={{width: `${imgw}`}} src={slide.ImgSrc} alt='image'/> */}
                <div>{slide.Title || ""}</div>
              </div>

            )
          })}
        </Slider>
      </div>
    )
  }
}