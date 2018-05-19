import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class newsTemp extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
       
        return (
            
                <div className="list-group">
                { this.props.data && 
                this.props.data.map(mov => 
                    <div id={mov.publishedAt} key ={mov.publishedAt}>
                   
                    <div>
                        <img style={imgStyle} src={`${mov.urlToImage}`} alt=''/> 
                    </div>   
                        <div>
                            <div>
                                <span>{mov.author}</span>
                            </div>
                        </div>
                            <div>
                                <h4>{mov.title}</h4>
                            </div>
                            <div>
                            <Link to={`/news/${mov.source.id}`}>{mov.source.name}</Link>
                            </div>
                        </div>
                    
                )}
            </div>
           
        );
    }
}

const imgStyle = {
    height: '150px'
    
  };

export default newsTemp; 
