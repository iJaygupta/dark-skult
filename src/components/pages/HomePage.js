import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import actions from '../../actions'
import Modal from '../auth/AuthModal'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthModal: false
        }
    }

    componentWillReceiveProps(nextState, updatedProps) {

    }

    handleSociallogIn() {
        console.log("URL ", process.env)
        this.props.authAction.googleLogIn(function (data) {
            console.log("api call data ==>>", data);
        })
    }

    componentDidMount() {
        console.log("URL ", process.env)
        this.props.authAction.login("918808974265", "Pass1234", true, function (data) {
            console.log("api call data ==>>", data);
        })
    }

    showModal = () => {
        this.setState({ isAuthModal: true });
    };

    hideModal = () => {
        this.setState({ isAuthModal: false });
    };

    render() {
        console.log("Props ==>> ", this.props);
        console.log("state ==>> ", this.state);


        return (
            <div>
                <h1>
                    Welcome !
                </h1>
                <button onClick={this.showModal}>Open Modal</button>
                {this.state.isAuthModal && <Modal show={this.state.isAuthModal} handleClose={this.hideModal} />}
            </div>
        );
    }
}


const mapStateToProps = (state) => {

    return {
        userInfo: state.authData.userInfo,
        token: state.authData.token

    }
}

function mapDispatchToProps(dispatch) {

    return {
        authAction: bindActionCreators(actions.auth, dispatch),
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))

