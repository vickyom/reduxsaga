import React, { Component } from 'react';

class searchBox extends Component {
    // constructor(props){
    //     super(props)
    //     this.handleChange = this.handleChange.bind(this)
    // }
    // handleChange(events){
    //     console.log(this.props);
    //     this.props.SearchReq(events.target.value)
    // }
    render() {
        console.log("searchBox", this.props.SearchData)
        // if(!this.props.SearchData){
        //     return <div>Loading ..... </div>
        // }
        return (
           
        <div className="col-sm-4 col-md-4 col-md-offset-4" style={searchStyle}>
                    {/* <div className="span3 side-by-side clearfix offset4">
						<form action="#" method="get">
							<div className="input-group">
								<input onChange={(e) => this.handleChange(e)}  className="form-control" id="system-search" name="q" placeholder="Search for" required=""/>
								<span className="input-group-btn">
									<button type="submit" className="btn btn-default" data-original-title="" title=""><i class="glyphicon glyphicon-search"></i></button>
								</span>
							</div>
						</form>
					</div> */}

                <ul id="autolist" className="list-group">
                { this.props.SearchData && 
                this.props.SearchData.results.map(mov => 
                    <li id="fav" className="list-group-item">
                    <div className="row">
                        <div id="favorites" className="">
                            <div className="container">
                            <a href={`/movies/${mov.id}`} className="btn btn-primary">{mov.title}</a>
                            </div>
                        </div>
                    </div>
                </li>
                    
                )}
                 </ul>
        </div>
        );
    }
}
const searchStyle = {
    zIndex:1,
    position: 'absolute',
    
  };
export default searchBox;