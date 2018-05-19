import React, { Component } from 'react';
import { connect } from 'react-redux';
import SourceTemp from '../components/sourceTemp';

class sourceContainer extends Component {
    componentDidMount() {
        this.props.requestSourceData();
    }
    render() {
        return (
            <div>
                <h1>{this.props.match.params.source}</h1>
                <SourceTemp srcData={this.props.sourceData} />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    console.log(' -- -- sourceConta = = = ', ownProps.match.params.source);
    return {
        requestSourceData: function() {
            return dispatch({
                type: 'REQUEST_SOURCE_DATA',
                param: ownProps.match.params.source,
            });
        },
    };
}

function mapStateToProps(state) {
    console.log('mapStateToProps - - source ', state.sourceList.data);
    return {
        sourceData: state.sourceList.data,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(sourceContainer);
