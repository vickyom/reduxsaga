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
                    <div key={mov.id} className="col-md-3 p-2 mb-3" id={mov.publishedAt} key ={mov.publishedAt}>
                        <a href={`/movies/${mov.id}`}>
                            <div className="card">
                                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} alt="Card image cap"/>
                                <div className="card-body">
                                    <h6 style={name} className="card-title name ">{mov.title}</h6>
                                        <div className="row">
                                            <div className="col-4 metadata">
                                            <small><i className="fa fa-star" aria-hidden="true"></i>
                                                <span> {mov.vote_average}/10</span></small>
                                            </div>
                                            <div className="col-8 metadata"><small>Adventure. Sci-Fi</small></div>
                                        </div>
                                        <p className="card-text"><small><i className="fa fa-calendar" aria-hidden="true"> </i> {new Date(mov.release_date).toDateString().substring(0,11)}</small></p>
                                </div>
                            </div>
                        </a>
                   </div>
                )}
            </div>

        );
    }
}

const imgStyle = {
    height: '150px'

  };
  const name = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'

  };

export default moviesTemp;
