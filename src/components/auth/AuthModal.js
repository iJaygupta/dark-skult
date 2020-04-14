
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import actions from "../../actions/index"
import './AuthModal.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthModal: false,
      showHideClassname: this.props.show ? " display-block" : " display-none"
    }
  }

  handleSociallogIn = () => {
    this.props.authAction.facebookLogIn(function (data) {
      console.log("api call data ==>>", data);
    })
    this.props.authAction.googleLogIn(function (data) {
      console.log("api call data ==>>", data);
    })
  }

  render() {
    console.log("Auth Props ", this.props);

    return (
      <div className={this.state.showHideClassname}>
        <div className="container" style={{ "width": "30%" }}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"><h3><b style={{ "font-size": "15px" }}>Sign up or log in to MyWeb</b></h3></h5>
              <hr />
              <div onClick={this.handleSociallogIn} className="row border card-link p-3 active rounded m-3">
                <div className="col-4"><a href="#" className="card-link"><img width="25px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ5fUKXoCIu4PTQutgld0al75g5OUNRY4jPxmEuRkRM21tEwQT&usqp=CAU" /></a></div>
                <div className="col-8"><h6 className="card-subtitle mt-0"><a href="#" className="card-link text-muted"> Continue with Google</a></h6></div>
              </div>

              <div className="row border p-3 active rounded m-3">
                <div className="col-4"><a href="#" className="card-link"><img width="25px" src="https://clipart.info/images/ccovers/1509135364flat-facebook-logo-png-icon-circle.png" /></a></div>
                <div className="col-8"><h6 className="card-subtitle mt-1" ><a href="#" className="card-link text-muted"> Continue with Facebook</a></h6></div>
              </div>

              <h5 className="card-subtitle text-center m-3">or use your email address</h5>
              <div className="row text-center m-3">
                <div className="col-6" style={{ "text-align-last": "right" }}><button className="btn btn-primary border active px-4 py-3">Log in</button> </div>
                <div className="col-6" style={{ "text-align-last": "left" }}><button className="btn btn-primary border px-4 py-3 ">Sign up</button></div>
              </div>
              {/* <p className="card-text text-center" style="font-size: 12px">By loggingin, you agree to MyWeb <a href="#" className="card-link">Terms of Service. Cookie Policy.<br />Privacy Policy</a> and <a href="#" className="card-link m-0">Content Policies</a></p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal))
// export default Modal;