
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import actions from "../../../actions/index"
import './modal.css';


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthModal: false,
            showHideClassname: this.props.show ? "modal display-block" : "modal display-none"
        }
    }

    handleSociallogIn = () => {
        console.log("URL ", process.env)
        this.props.authAction.facebookLogIn(function (data) {
            console.log("api call data ==>>", data);
        })
    }

    render() {
        return (
            <div className={this.state.showHideClassname}>
                <section className="modal-main">
                    <div className="auth-container">
                        <h1>Sign up or log in to Application</h1>
                        <div className="authitem1">
                            <a href="javascript:void(0)" onClick={this.handleSociallogIn} ><img src="https://b.zmtcdn.com/images/new_google_icon.png"></img>
                                <span>Continue with Google</span>
                            </a>
                        </div>
                        <div className="authitem1">
                            <a href="javascript:void(0)" onClick={() => { console.log("dakh") }} ><img src="https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/facebook-icon_32x32.png"></img>
                                <span>Continue with Facebook</span>
                            </a>
                        </div>
                    </div>
                    {/* {children} */}
                    <button onClick={this.props.handleClose} className="close" >X</button>
                    {/* <a><img src="https://b.zmtcdn.com/images/new_google_icon.png"><span>Continue With Google</span></img></a> */}
                    {/* <a href="javascript:void(0)" onClick={() => { console.log("dakh") }} className="authbutton"><img src="https://b.zmtcdn.com/images/new_google_icon.png"></img>
                    <span className="authtext">Continue with Google</span>
                </a> */}

                </section>
            </div>
        );
    }
};

const mapStateToProps = (state) => {

    return {
        userInfo: state.auth.userInfo,
        token: state.auth.token

    }
}

function mapDispatchToProps(dispatch) {

    return {
        authAction: bindActionCreators(actions.auth, dispatch),
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal))
// export default Modal;