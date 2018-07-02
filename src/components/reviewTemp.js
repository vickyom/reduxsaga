import React, { Component } from 'react';

class reviewTemp extends Component {
    render() {
        return (
              
            <div>
                <h4 className="font-weight-normal text-center mt-2">
                    User Review
                </h4>
            { this.props.RVData.results && 
            this.props.RVData.results.map(mrvData => 
                <div className="row shadow-sm p-3 mb-4 bg-white rounded" id={mrvData.id} key ={mrvData.id}>
                    <div className="col-md-2">
                    <span className="small">{mrvData.author}</span>
                    </div>
                    <div className="col-md-10">
                        
                        <p className="small">{mrvData.content}</p>
                        
                    </div>
               </div>

            )}
        </div>
        );
    }
}

export default reviewTemp;