
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import actions from "../../../actions/index"
import queryString from 'query-string'



class SocialAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthModal: false,
            showHideClassname: this.props.show ? "modal display-block" : "modal display-none"
        }
    }

    handleSocialLogIn() {
        let queryParam = queryString.parse(this.props.location.search);
        console.log("this.props.location.search ==>>", queryParam);
        console.log(this.props)

        if (queryParam && queryParam.token) {
            this.props.authAction.socialLogin(queryParam.token, function (data) {
                console.log("api call data ==>>", data);
            })
        }

    }

    componentDidMount() {
        this.handleSocialLogIn();
    }

    render() {
        return (
            <div>
                <h1>Authenticating...</h1>
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SocialAuth))