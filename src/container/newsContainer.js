import React from "react";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NewsTemp from "../components/newsTemp";


class newsContainer extends React.Component {
  
  componentDidMount() {
   
    this.props.requestApiData();
  }
  
//author , title,  urlToImage

  render() {
    console.log(newsContainer)
   return(
   <div>
      <NewsTemp data={this.props.data} />
    </div>
   );
}
}
//const mapStateToProps = state => ({ data: state.data });
function mapStateToProps(state) {
  console.log("state -- " ,state)
  return{
     data: state.data.newsList
  }
}


function mapDispatchToProps(dispatch) {
  return {
      requestApiData:function() {
        console.log("mapDispatchToProps requestApiData ")
      return dispatch({type: 'REQUEST_API_DATA'});
    }
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(newsContainer);
