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
<div class="block">
	<h2> #About </h2>
    <div class="block-inner">
    	<div class="row-1">
        	<div>1</div><div>2</div>
        </div>
        <div class="row-1">
        	<div>3</div><div>4</div>
        </div>
        </div>
    </div>
    <div class="clear-fix"></div>
<div class="block">
	<h2> #About </h2>
    <div class="block-inner">
    	<div class="row-1">
        	<div>1</div><div>2</div>
        </div>
        <div class="row-1">
        	<div>3</div><div>4</div>
        </div>
        </div>
    </div>
    <div class="block">
	<h2> #About </h2>
    <div class="block-inner">
    	<div class="row-1">
        	<div>1</div><div>2</div>
        </div>
        <div class="row-1">
        	<div>3</div><div>4</div>
        </div>
        </div>
    </div>
    <div class="clear-fix"></div>
<div class="block">
	<h2> #About </h2>
    <div class="block-inner">
    	<div class="row-1">
        	<div>1</div><div>2</div>
        </div>
        <div class="row-1">
        	<div>3</div><div>4</div>
        </div>
        </div>
    </div>
    <div class="block">
	<h2> #About </h2>
    <div class="block-inner">
    	<div class="row-1">
        	<div>1</div><div>2</div>
        </div>
        <div class="row-1">
        	<div>3</div><div>4</div>
        </div>
        </div>
    </div>

    <div class="block">
	<h2> #About </h2>
    <div class="block-inner">
    	<div class="row-1">
        	<div>1</div><div>2</div>
        </div>
        <div class="row-1">
        	<div>3</div><div>4</div>
        </div>
        </div>
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