
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';



class ProviderListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>Provider Listing...</h1>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
    }
}

function mapDispatchToProps(dispatch) {

    return {
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProviderListing))