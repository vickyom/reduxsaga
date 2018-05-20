import React, { Component } from 'react';

class reviewTemp extends Component {
    render() {
        console.log("reviewTemp  -- - >",this.props)
        return (
              
            <div className="row">
            { this.props.RVData.results && 
            this.props.RVData.results.map(mrvData => 
                <div className="col-md-12 mb-2 border-bottom" id={mrvData.id} key ={mrvData.id}>
                    <div className="col-md-2">
                    {/* <span className="glyphicon glyphicon-user">User Image </span> */}
                    <span >{mrvData.author}</span>
                    </div>
                    <div className="col-md-10 float-right">
                        
                        <p>{mrvData.content}</p>
                        <a>{mrvData.url}</a>
                    </div>
                    
                    
                   
               </div>

            )}
        </div>
        );
    }
}

export default reviewTemp;