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
                                    <h6 style={name} className="card-title name">{mov.title}</h6>
                                    <i className="fas fa-user"></i> <span>{mov.vote_count}</span>
                                    <p className="card-text">{mov.release_date}</p>
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
