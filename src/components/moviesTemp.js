import React, { Component } from 'react';

class moviesTemp extends Component {
constructor(props){
        super(props)
    }
    
    render() {
        return (
                <div className="row">
                           
                { this.props.pmvData && 
                this.props.pmvData.map(mov => 
                    <div className="col-md-4" id={mov.publishedAt} key ={mov.publishedAt}>
                        <div className="card">
                                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} alt="Card image cap"/>
                                <div className="card-body">
                                    <h6 className="card-title">{mov.title}</h6>
                                    <p className="card-text">{mov.release_date}</p>
                                    <a href={`/movies/${mov.id}`} className="btn btn-primary">More Details</a>
                                </div>
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

export default moviesTemp; 
