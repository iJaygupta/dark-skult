import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import actions from "../../actions/index"
import './AuthModal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthModal: true,
      isLogInCard: false,
      isSignUpCard: false,
      showHideClassname: this.props.show ? " display-block" : " display-none",
      email: '',
      name: '',
      password: '',
      repassword: '',
    }
  }

  changeAuthMode = (e) => {
    const { name } = e.target;
    this.setState({
      isAuthModal: false,
      [name == "login" ? "isLogInCard" : "isSignUpCard"]: true
    })
  }

  inputChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  validateData = (callback) => {
    callback();
  }

  submitAuth = () => {
    this.validateData(() => {
      let data = {
        'email': this.state.email,
        'name': this.state.name,
        'password': this.state.password,
      }
      if (this.state.isSignUpCard) {
        this.props.authAction.signUp(data, (response) => {
          this.props.handleClose()
        })
      } else {
        delete data.name
        this.props.authAction.login(data, (response) => {
          this.props.history.push("/chat");
        })
      }
    })
  }

  render() {

    let facebookUrl = `${process.env.REACT_APP_API_URL}/auth/facebook`;
    let googleUrl = `${process.env.REACT_APP_API_URL}/auth/google`;

    return (
      <div className={this.state.showHideClassname}>

        <div className="container">
          <div className="card">
            <div className="card-body">
              {this.state.isAuthModal &&
                <div>
                  <h5 className="card-title"><h3><b style={{ "font-size": "16px" }}>Sign up or Log in to There</b></h3></h5>
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
                  </div>

                  <h5 className="card-subtitle text-center m-3" style={{ "font-size": "14px" }}>or use your email address</h5>
                  <div className="row text-center m-3">
                    <div className="col-6" style={{ "text-align-last": "right" }}><button onClick={this.changeAuthMode} name="login" className="btn btn-primary border active px-4 py-3">Log in</button> </div>
                    <div className="col-6" style={{ "text-align-last": "left" }}><button onClick={this.changeAuthMode} name="signup" className="btn btn-primary border px-4 py-3 ">Sign up</button></div>
                  </div>
                </div>
              }

              {(this.state.isLogInCard || this.state.isSignUpCard) &&
                <div>
                  <h5 className="card-title"><h3><b style={{ "font-size": "18px" }}>{this.state.isSignUpCard ? "Sign Up" : "Log in"} to There</b></h3></h5>
                  <hr />
                  <form noValidate autoComplete="off">
                    <div className="px-3 py-0"><TextField id="email" name="email" onChange={this.inputChangeHandler} label="Email" /></div>
                    {this.state.isSignUpCard && <div className="px-3 p-3"><TextField id="name" name="name" onChange={this.inputChangeHandler} label="Name" /></div>}
                    <div className="px-3 pt-3 pb-0"><TextField id="password" name="password" onChange={this.inputChangeHandler} label="Password" /></div>
                    {this.state.isSignUpCard && <div className="px-3 p-3"><TextField id="repassword" name="repassword" onChange={this.inputChangeHandler} label="Confirm Password" /></div>}

                    <div className="p-3 row">
                      <div className="col-sm-6"><Button onClick={this.submitAuth} className="mx-4 px-2 py-1" variant="contained" color="primary">{this.state.isSignUpCard ? "Sign Up" : "Log in"}</Button></div>
                    </div>
                  </form>
                </div>
              }
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

const mapDispatchToProps = (dispatch) => {
  return {
    authAction: bindActionCreators(actions.auth, dispatch),
  };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal))