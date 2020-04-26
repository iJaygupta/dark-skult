
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import actions from "../actions/index";
import ProviderListing from "../components/provider/ProviderListing";
import ProviderHeader from "../components/provider/ProviderHeader";





class Provider extends Component {
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
                <h1>Provider Container...</h1>
                <ProviderHeader/>
                <ProviderListing/>
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Provider))