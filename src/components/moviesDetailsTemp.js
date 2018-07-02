import React, { Component } from 'react';
import ReviewTemp from './reviewTemp';
import Modal from './modal';

class moviesDetailsTemp extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            hover: false,
            rating: 0,
            ratingSub: 0,
            ratingClick: false,
            isRatHovered: true,
            isImgHovered:false,
            isImgHovID:''
        };

        this.openModal = this.openModal.bind(this);
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverImgOn = this.hoverImgOn.bind(this);
        this.hoverImgOff = this.hoverImgOff.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
        this.getRating = this.getRating.bind(this);
        this.rateHover = this.rateHover.bind(this);
        this.getImgHoverClass = this.getImgHoverClass.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({ modalIsOpen: true });
    }
    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    hoverOn(event) {
        this.setState({ rating: event });
        return event > this.state.rating ? 'far fa-star' : 'fas fa-star';
    }
    hoverOff() {
      if (this.state.ratingClick && this.state.ratingSub > 0) {
          this.setState({ rating: this.state.ratingSub });
      } else {
          this.setState({ rating: 0 });
      }
  }
    rateHover() {
      
        this.setState({ isRatHovered: !this.state.isRatHovered });
    }
    getRating(e) {
        this.setState({ ratingSub: e });
        this.setState({ ratingClick: true });
    }
    getClass(key) {
        return key > this.state.rating ? 'far fa-star' : 'fas fa-star';
    }
    renderStars() {
        const allImgs = 5;
        let arr = [];
        for (let i = 1; i <= 5; i++) {
            arr.push(
                <span data-value={i} onClick={event => this.getRating(i)}>
                    <i
                        onMouseOut={() => this.hoverOff(i)}
                        onMouseOver={event => this.hoverOn(i)}
                        className={`${this.getClass(i)}`}
                    />
                </span>
            );
        }
        return arr;
    }
    getImgHoverClass(e){
        return e == this.state.isImgHovered ? 'card-body overlay' : 'none';
        // return e == 88751 ? 'card-body overlay' : '';
    }
    hoverImgOn(e) {
        console.log("hoverImgOn ===" , e == 88751);
        
        this.setState({ isImgHovered: e});
       
    }
    hoverImgOff() {
        console.log("hoverImgOff ++++" ,this.state.isImgHovered);
        this.setState({ isImgHovered: '' });
        
    }
    renderCastListing() {
		return (
            <div className="col-md-12">
                <h4 className="font-weight-normal text-center mt-2">
                    Top Billed Cast
                </h4>
                <ul className="list-inline">
                    {this.props.MDData.data.credits &&
                        this.props.MDData.data.credits.cast
                            .slice(0, 10)
                            .map(cast => (
                                <li key ={cast.name} className="col-md-2 list-inline-item">
                                    <img
                                        className="rounded-circle"
                                        style={imgCast}
                                        src={`https://image.tmdb.org/t/p/w500/${
                                            cast.profile_path
                                        }`}
                                    />
                                    <span className="small d-block">
                                        {cast.name} As{' '}
                                    </span>
                                    <span className="small d-block">
                                        {cast.character}
                                    </span>
                                </li>
                            ))}
                    </ul>
            </div> 
		)
    }
    renderSmMovies() {
        // className="card-body overlay" 
        // style={{display:(this.state.isImgHovered) ? 'block' : 'none'}}
        if(this.props.MSData.results && this.props.MSData.results.length){
		return (
            <div>
                <h6>
                    Similar Movies
                </h6>
                <div className="col-md-12 ">
                    {this.props.MSData.results
                            .slice(0, 4)
                            .map(mov => (
                                <div key={mov.id} className="col-md-3 d-inline-block p-2" id={mov.publishedAt} key ={mov.publishedAt}>
                                <a href={`/movies/${mov.id}`}>
                                    <div className="card">
                                        <img onMouseOver={event => this.hoverImgOn(mov.id)} onMouseOut={event => this.hoverImgOff(mov.id)}  className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} alt="Card image cap"/>
                                        <div className= {this.getImgHoverClass(mov.id)}>
                                            <h6 style={name} className="card-title">{mov.title}</h6>
                                        </div>
                                    </div>
                                    </a>
                            </div>
                            ))}
                    </div>
            </div> 
        )
    }else{

            return <div>loading ..</div>
        }
	}
    render() {
       
       (this.state.isRatHovered) ? 'block' : 'none'
        if (!this.props.MDData.data) {
            return <div>Loading ..... </div>;
        }
        const btnClass = this.state.isRatHovered
            ? 'far fa-heart'
            : 'fas fa-heart';
        const renderStars = this.renderStars();
        return (
            <div className="row">
                <div
                    className="col-md-4"
                    id={this.props.MDData.data.publishedAt}
                    key={this.props.MDData.data.publishedAt}
                >
                    <img
                        className="card-img-top"
                        style={imgStyle}
                        src={`https://image.tmdb.org/t/p/w500/${
                            this.props.MDData.data.poster_path
                        }`}
                        alt="Card image cap"
                    />
                </div>
                <div className="col-md-8">
                    <h4 className="">{this.props.MDData.data.title}</h4>
                    <div className="mb-2">
                        {this.props.MDData.data.genres &&
                            this.props.MDData.data.genres.map(gen => (
                                <span
                                    key={gen.id}
                                    className="badge badge-secondary mt-1 mr-1 p-2"
                                >
                                    {gen.name}
                                </span>
                            ))}
                    </div>
                    <h6>
                        <small>English</small>
                    </h6>
                    <p>Release Date : {this.props.MDData.data.release_date}</p>
                    <span>
                        <i className="fa fa-star fa-3" />{' '}
                        {this.props.MDData.data.vote_average}
                    </span> |
                    <span>{' '}
                        <i className="fas fa-users" />{' '}
                        {this.props.MDData.data.vote_count}
                    </span>
                    | Rate me :
                    <span
                        className="border border-primary rounded-circle p-1"
                        onClick={this.openModal}
                    >
                        <i
                            onMouseEnter={this.rateHover}
                            onMouseLeave={this.rateHover}
                            className={btnClass}
                        />
                    </span>
                    <p className="mt-3">
                        <small>{this.props.MDData.data.overview}</small>
                    </p>
                    {this.renderSmMovies() }
                </div>
                <span style={hr} />
                {this.renderCastListing()}
                <span style={hr} />
                <div className="col-md-12 mt-2 ">
                {this.props.MDData.Reviewdata.results.length > 0 && <ReviewTemp RVData={this.props.MDData.Reviewdata} /> }
                    
                </div>

                <Modal
                    Modalbody={renderStars}
                    heading={`Please rate the movie ${
                        this.props.MDData.data.title
                    }`}
                    isOpen={this.state.modalIsOpen}
                    isClose={this.closeModal}
                />
            </div>
        );
    }
}
const hr = {
    marginTop: '1rem',
    marginBottom: '1rem',
    border: '0',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    width: '100%',
};
const imgStyle = {
    height: '550px',
};
const imgCast = {
    height: '100px',
    width: '100px',
};
const name = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize:'12px'
    
  };
  
export default moviesDetailsTemp;
