
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import actions from "../../../actions/index";
import queryString from 'query-string';



class SocialAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSocialLogIn() {
        let queryParam = queryString.parse(this.props.location.search);

        if (queryParam && queryParam.token) {
            this.props.authAction.socialLogin(queryParam.token, (data) => {
                if (data && !data.error && data.token) {
                    localStorage.setItem('token', data.token)
                    this.props.history.push("/profile");
                } else {
                    this.props.history.push("/");
                }

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