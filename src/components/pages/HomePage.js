import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import actions from '../../actions'
import Modal from '../auth/AuthModal'
import $ from "jquery"
import './HomePage.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthModal: false
        }
    }

    componentWillReceiveProps(nextState, updatedProps) {

    }
  

    componentDidMount() {
        $(function () {
            $(document).scroll(function () {
                var $nav = $(".navbar-fixed-top");
                $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            })
        })
    }

    showModal = () => {
        this.setState({ isAuthModal: true });
    };

    hideModal = () => {
        this.setState({ isAuthModal: false });
    };

    render() {

        return (
            <div className="d-block">
                {/* <button onClick={this.showModal}>Open Modal</button> */}
                {this.state.isAuthModal && <Modal show={this.state.isAuthModal} handleClose={this.hideModal} />}

                <div className="body-start">
                  <div>
                    <nav id="topnav" className=" navbar-fixed-top fixed-top navbar navbar-dark p-0 navbar-expand-lg">
                        <h2 className="navbar-brand" >There</h2>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbar-menu">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#services" >Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="provider">Providers</a>
                                </li>
                                <li className="nav-item active ">
                                    <a className="nav-link" href="chat">Chat Room</a>
                                </li>
                                <li className="nav-item active">
                                    <a onClick={this.showModal} className="nav-link" href="javascript:void(0);" >Log in<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a onClick={this.showModal} className="nav-link" href="javascript:void(0);" >Create Account<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item dropdown active">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
                                        </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another</a>

                                        <a className="dropdown-item" href="#">new</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                  </div>
                    {/* {/ body part main /} */}
                    <div className="body-content1">
                        <div className="body-content">
                            <span className="h2 p-1 d-block">WELCOME!</span>
                            <span className="h5 p-1 d-block">Here, Introducing Top Most E-commerce Websites.</span>
                            <span className="h6 p-1 d-block">E-commerce is the activity of electronically buying or selling of products on online services or over the Internet</span>
                            <span className="row justify-content-center">
                                <button className="py-2 px-3 m-2 b0 btn btn-dark rounded-pill">Portfolio</button>
                                <button className="py-2 px-3 m-2 b0 btn btn btn-dark rounded-pill">Portfolio</button>
                                </span>
                        </div>
                    </div>
                </div>
                <div class="clear-fix"></div>
                <div className="pt-5 text-center"> <u><h2>Services</h2></u></div>
                <div class="block  pt-5">
                    <div class="card-deck mb-3 text-center">
                        <div class="card mb-4 shadow-sm">
                          <div class="card-header">
                            <h4 class="my-0 font-weight-normal">Free</h4>
                          </div>
                          <div class="card-body">
                            <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                              <li>10 users included</li>
                              <li>2 GB of storage</li>
                              <li>Email support</li>
                              <li>Help center access</li>
                            </ul>
                            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                          </div>
                        </div>
                        <div class="card mb-4 shadow-sm">
                          <div class="card-header">
                            <h4 class="my-0 font-weight-normal">Pro</h4>
                          </div>
                          <div class="card-body">
                            <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                              <li>20 users included</li>
                              <li>10 GB of storage</li>
                              <li>Priority email support</li>
                              <li>Help center access</li>
                            </ul>
                            <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
                          </div>
                        </div>
                        <div class="card mb-4 shadow-sm">
                          <div class="card-header">
                            <h4 class="my-0 font-weight-normal">Enterprise</h4>
                          </div>
                          <div class="card-body">
                            <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                              <li>30 users included</li>
                              <li>15 GB of storage</li>
                              <li>Phone and email support</li>
                              <li>Help center access</li>
                            </ul>
                            <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
                          </div>
                        </div>
                      </div>
                    </div>
               
                <div class="clear-fix"></div>
                <div className="block">
                    <footer className="pt-2 container-fluid bg-dark text-white mt-5 pt-md-5 border-top">
                        <div className="row">
                          <div className="col-12 col-md">
                            <div className="col-sm-12"> <b>Brief Info</b><br/> E-Commerce, also known as e-Business, or electronic business, is simply the sale and purchase of services and goods over an electronic medium, like the Internet.</div>
                            <small className="col-sm-12 d-block mb-3 text-muted">© 2019-2020</small>
                          </div>
                          <div className="col-6 col-md">
                            <h5>Features</h5>
                            <ul class="list-unstyled text-small">
                              <li><a className="text-muted" href="#">Cool stuff</a></li>
                              <li><a className="text-muted" href="#">Random feature</a></li>
                              <li><a className="text-muted" href="#">Team feature</a></li>
                              <li><a className="text-muted" href="#">Stuff for developers</a></li>
                              <li><a className="text-muted" href="#">Another one</a></li>
                              <li><a className="text-muted" href="#">Last time</a></li>
                            </ul>
                          </div>
                          <div class="col-6 col-md">
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                              <li><a className="text-muted" href="#">Resource</a></li>
                              <li><a className="text-muted" href="#">Resource name</a></li>
                              <li><a className="text-muted" href="#">Another resource</a></li>
                              <li><a className="text-muted" href="#">Final resource</a></li>
                            </ul>
                          </div>
                          <div className="col-6 col-md">
                            <h5>About</h5>
                            <ul className="list-unstyled text-small">
                              <li><a className="text-muted" href="#">Team</a></li>
                              <li><a className="text-muted" href="#">Locations</a></li>
                              <li><a className="text-muted" href="#">Privacy</a></li>
                              <li><a className="text-muted" href="#">Terms</a></li>
                            </ul>
                          </div>
                        </div>
                      </footer>
                    </div>
  
                {/* {/ body part main /} */}
                {/* <div className="clearfix mt-4">
                        <h3>Best Services</h3>
                        <span><h5>E-commerce is the activity of electronically buying or selling of products on online services or over the Internet</h5></span>
                    </div> */}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))