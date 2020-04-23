
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import actions from "../../../actions/index";



class Loader extends Component {
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
                <h1>Loading...</h1>
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
        authAction: bindActionCreators(actions.auth, dispatch),
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Loader))