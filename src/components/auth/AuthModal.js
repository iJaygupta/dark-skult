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
      isAuthModal: true,
      showHideClassname: this.props.show ? " display-block" : " display-none",
      email: '',
      password: ''
    }
  }


  authModeHandler = () => {
    this.setState({
      isAuthModal: false
    })
  }

  inputChangeHandler = (e) => {

    // let value = e.target.value;
    // this.setState({
    //   [e.target.type]: value
    // })
  }

  submitSignUp = () => {
    // let signUpData = {
    //   "email": this.state.email,
    //   "password": this.state.mobile
    // }

    // this.props.authAction.signUp(signUpData, (response) => {
          
    // })

    console.log(this.state)
  }




  render() {
    let facebookUrl = `${process.env.REACT_APP_API_URL}/auth/facebook`;
    let googleUrl = `${process.env.REACT_APP_API_URL}/auth/google`;
    console.log(this.props)


    return (
      <div className={this.state.showHideClassname}>
        <div className="container">
          <div className="card">
            {
              this.state.isAuthModal ?
                <div className="card-body">
                  <h5 className="card-title"><h3><b style={{ "font-size": "16px" }}>Sign up or log in to MyWeb</b></h3></h5>
                  <hr />
                  <div>
                    <a href={googleUrl} className="card-link row border card-link p-3 active rounded m-3">
                      <div className="col-4"><img width="25px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ5fUKXoCIu4PTQutgld0al75g5OUNRY4jPxmEuRkRM21tEwQT&usqp=CAU" /></div>
                      <div className="col-8"><h6 className="card-subtitle mt-2 text-muted"> Continue with Google</h6></div>
                    </a>
                  </div>

                  <div>
                    <a href={facebookUrl} className="card-link row border card-link p-3 active rounded m-3">
                      <div className="col-4"><img width="25px" src="https://clipart.info/images/ccovers/1509135364flat-facebook-logo-png-icon-circle.png" /></div>
                      <div className="col-8"><h6 className="card-subtitle mt-2 text-muted" >Continue with Facebook</h6></div>
                    </a>

                    {/* <div className="col-4"><a href="#" className="card-link"><img width="25px" src="https://clipart.info/images/ccovers/1509135364flat-facebook-logo-png-icon-circle.png" /></a></div>
                <div className="col-8"><h6 className="card-subtitle mt-2" ><a href="#" className="card-link text-muted"> Continue with Facebook</a></h6></div> */}
                  </div>

                  <h5 className="card-subtitle text-center m-3" style={{ "font-size": "14px" }}>or use your email address</h5>
                  <div className="row text-center m-3">
                    <div className="col-6" style={{ "text-align-last": "right" }}><button onClick={this.authModeHandler} className="btn btn-primary border active px-4 py-3">Log in</button> </div>
                    <div className="col-6" style={{ "text-align-last": "left" }}><button onClick={this.authModeHandler} className="btn btn-primary border px-4 py-3 ">Sign up</button></div>
                  </div>
                  {/* <p className="card-text text-center" style="font-size: 12px">By loggingin, you agree to MyWeb <a href="#" className="card-link">Terms of Service. Cookie Policy.<br />Privacy Policy</a> and <a href="#" className="card-link m-0">Content Policies</a></p> */}
                </div>
                :
                <div className="card-body">
                  <h5 className="card-title"><h3><b style={{ "font-size": "16px" }}>Sign in to Continue</b></h3></h5>
                  <hr />
                  <form >
                    <div className="form-group">
                      <label for="email">Email address</label>
                      <input onChange={this.inputChangeHandler} type="email" className="form-control" id="email"  placeholder="Enter email" />
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label for="password">Password</label>
                      <input onChange={this.inputChangeHandler} type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button className="btn btn-primary border active px-4 py-3">Submit</button>
                  </form>
                </div>
            }

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