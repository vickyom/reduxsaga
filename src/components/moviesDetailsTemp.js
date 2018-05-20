import React, { Component } from 'react';
import ReviewTemp from './reviewTemp';


class moviesDetailsTemp extends Component {
    render() {
       if(!this.props.MDData.data){
           return <div>Loading ..... </div>
       }
        return (
            
                <div className="row">
                    <div className="col-md-12" id={this.props.MDData.data.publishedAt} key ={this.props.MDData.data.publishedAt}>
                        <div className="card">
                                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${this.props.MDData.data.backdrop_path}`} alt="Card image cap"/>
                                <div className="card-body">
                                    <h6 className="card-title">{this.props.MDData.data.title}</h6>
                                    <div>
                                    { this.props.MDData.data.genres && 
                                        this.props.MDData.data.genres.map(gen => 
                                            <span className="badge badge-primary mr-1"  id={gen.name} key ={gen.name}> {gen.name}  </span>
                        
                                        )}
                                    </div>
                                   
                                    <p className="card-text">{this.props.MDData.data.release_date}</p>
                                   
                                </div>
                                <div>
                                    <h4>Review data</h4>
                                    <ReviewTemp RVData = {this.props.MDData.Reviewdata}/>
                                </div>
                        </div>
                        
                   </div>
   
            
            </div>
           
        );
    }
}

export default moviesDetailsTemp; 
