import React, { Component } from 'react';

class modal extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(){
        this.props.isClose(false)
    }
    render() {
        
        const mStyle = (this.props.isOpen) ? 'block' :'none'
        return (
            <div className="modal"  style={{display:mStyle}} id="myModal">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">{this.props.heading}</h4>
                    <button type="button" className="close" data-dismiss="modal" onClick={this.handleChange}>&times;</button>
                    </div>
                    <div className="modal-body">
                    {this.props.Modalbody}
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Submit</button>
                    </div>
                    
                </div>
                </div>
            </div>
        );
    }
}

export default modal;