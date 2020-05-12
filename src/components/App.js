import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import actions from '../actions/index'
import Home from './pages/HomePage';
import Contact from './common/contact/ContactUs';
import SocialAuth from './common/socialAuth/socialAuth';
import Provider from './../containers/ProviderContainer';
import Profile from './profile/Profile';
import Main from './../containers/Main';
import DisplayMsg from './pages/NotFound';



class App extends Component {
  constructor(props) {
    super(props);
  }

  authenticate = () => {
    let token = localStorage.getItem('token');
    if (token) {
      return true
    } else {
      return false
    }

  }


  render() {
    return (
      <div className="App" >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/authenticate-social-user" component={SocialAuth} />
          <Route exact path="/provider" component={Provider} />
          {this.authenticate() ? (
            <Route path="/" component={Main} />
          ) : (
              <Redirect to="/" />
            )}
        </Switch>
      </div>
    );
  }

}


const mapStateToProps = (state) => {

  return {
    token: state.authData.token
  }
}

function mapDispatchToProps(dispatch) {

  return {
    authAction: bindActionCreators(actions.auth, dispatch),
  };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

