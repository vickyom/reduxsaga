import React, { Component } from 'react';
import ReviewTemp from './reviewTemp';
import Modal from './modal';


class moviesDetailsTemp extends Component {
    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false,
          hover: false,
          rating:0,
          ratingSub:0,
		  ratingClick:false,
		  isRatHovered:true
        };
    
        this.openModal = this.openModal.bind(this);
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
        this.getRating = this.getRating.bind(this);
        this.rateHover = this.rateHover.bind(this)
        // this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
      openModal() {
        this.setState({modalIsOpen: true});
      }
      closeModal() {
        this.setState({modalIsOpen: false});
      }
      hoverOn(event){
        // this.setState({ ratingClick: false });
        this.setState({ rating: event });
        return (event > this.state.rating) ? 'far fa-star' : 'fas fa-star';
       
	  }
	  rateHover(){
		  console.log("rateHover - -- -- >",this.state.isRatHovered );
		this.setState({ isRatHovered: !this.state.isRatHovered });
      }	
	  
      hoverOff(){ 
          if(this.state.ratingClick && this.state.ratingSub > 0){
            this.setState({ rating: this.state.ratingSub }); 
          }else{
            this.setState({ rating: 0 }); 
          }
           
      }
      getRating(e){
        this.setState({ ratingSub: e });
        this.setState({ ratingClick: true });
      }
      getClass(key){
        return (key > this.state.rating) ? 'fas fa-star':'far fa-star';
    }
      renderStars(){
        const allImgs = 5;
        let arr =[];
        for (let i = 1; i <= 5; i ++) {
            arr.push(<span data-value={i} onClick={event => this.getRating(i)}><i onMouseOut={() => this.hoverOff(i)} onMouseOver={event => this.hoverOn(i)} className={`${this.getClass(i)}`}></i></span>)
		}
		return arr
}
    render() {
       if(!this.props.MDData.data){
           return <div>Loading ..... </div>
	   }
	   const btnClass = this.state.isRatHovered ? "far fa-heart" : "fas fa-heart";
	   const renderStars = this.renderStars();
	   console.log(this.props.MDData.data)
        return (
            
                <div className="row">
                        <div className="col-md-4" id={this.props.MDData.data.publishedAt} key ={this.props.MDData.data.publishedAt}>
                            <img className="" style={imgStyle} src={`https://image.tmdb.org/t/p/w500/${this.props.MDData.data.poster_path}`} alt="Card image cap"/>
                         </div>       
                        <div className="col-md-8">
                            <h4 className="">{this.props.MDData.data.title}</h4>
                            <h6><small>English</small></h6>
                            <p>Release Date : {this.props.MDData.data.release_date}</p>
							<span><i className="fas fa-users"></i> {this.props.MDData.data.vote_count}</span> |
							<span className="border border-primary rounded-circle p-1" onClick={this.openModal}>
								<i onMouseEnter={this.rateHover} onMouseLeave={this.rateHover} className={btnClass}></i>
							</span>
							<div>
								{ this.props.MDData.data.genres && 
									this.props.MDData.data.genres.map(gen => 
										<span className="badge badge-secondary mr-1"  id={gen.name} key ={gen.name}> {gen.name}  </span>
					
									)}
							</div>
							<p><small>{this.props.MDData.data.overview}</small></p>    
                        </div>
						<div>
							<h4 className="font-weight-normal text-center mt-2">Top Billed Cast</h4>
								<ul className="list-inline">
								{ this.props.MDData.data.credits && 
									this.props.MDData.data.credits.cast.slice(0, 10).map(cast => 
										
									<li className="col-md-2 list-inline-item">
											<img className="rounded-circle" style={imgCast} src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}/>
										<span className="small d-block">{cast.name} As {cast.character}</span>
									</li>
									)}
								</ul>
						</div>
						<div className="col-md-12 mt-2 ">
							<h4>User Review: </h4>
							<ReviewTemp RVData = {this.props.MDData.Reviewdata}/>
						</div>
                        
                        
                   
                <Modal 
                    Modalbody={renderStars} 
                    heading={`Please rate the movie ${this.props.MDData.data.title}`} 
                    isOpen={this.state.modalIsOpen}
                    isClose={this.closeModal}                    
                />
             </div>
           
        );
    }
}
const imgStyle = {
    height: '350px'
    
  };
  const imgCast = {
    height: '150px'
    
  };
export default moviesDetailsTemp; 
