
import React from 'react'


class prevArrow extends React.Component {
    render() {

        const { className, style, onClick } = this.props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
          />
        );

    }
}
export default prevArrow