import React, { Component } from 'react';


class sourceTemp extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
       
        return (
            
                <div className="row">
                 
                { this.props.srcData && 
                this.props.srcData.map(mov => 
                   
                    <div className="col-md-6"  id={mov.publishedAt} key ={mov.publishedAt}>
                        <div className="card">
                                <img style={imgStyle} className="card-img-top" src={`${mov.urlToImage}`} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{mov.author}</h5>
                                    <p className="card-text">{mov.title}</p>
                                    <a href={`/news/${mov.source.id}`} className="btn btn-primary">{mov.source.name}</a>
                                </div>
                        </div>
                   </div>
                )}
            </div>
           
        );
    }
}

const imgStyle = {
    height: '250px'
    
  };

export default sourceTemp; 
