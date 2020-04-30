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
        console.log("Props ==>> ", this.props);
        console.log("state ==>> ", this.state);


        return (
            <div>
                {/* <button onClick={this.showModal}>Open Modal</button> */}
                {this.state.isAuthModal && <Modal show={this.state.isAuthModal} handleClose={this.hideModal} />}

                <div className="body-start">
                    <nav id="topnav" className=" navbar-fixed-top fixed-top navbar navbar-dark shadow px-3 navbar-expand-lg">
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
                                <li className="nav-item active" >
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item active">
                                    <a onClick={this.showModal} className="nav-link" href="javascript:void(0);" >Log in<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a onClick={this.showModal} className="nav-link" href="javascript:void(0);" >Create Account<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
                                        </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>

                                        <a className="dropdown-item" href="#">new</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>


                    {/* {/ body part /} */}
                    <div className="body-content1">
                        <div className="body-content">
                            <span><h2>WELCOME!</h2></span>
                            <span><h3>Here, Introducing Top Most E-commerce Websites.</h3></span>
                            <span><h5>E-commerce is the activity of electronically buying or selling of products on online services or over the Internet</h5></span>
                            <span><h2></h2></span>
                        </div>
                    </div>
                    <div className="body-content1">
                        <div className="body-content">
                            <span><h2>WELCOME!</h2></span>
                            <span><h3>Here, Introducing Top Most E-commerce Websites.</h3></span>
                            <span><h5>E-commerce is the activity of electronically buying or selling of products on online services or over the Internet</h5></span>
                            <span><h2></h2></span>
                        </div>
                    </div>
                    <div className="body-content1">
                        <div className="body-content">
                            <span><h2>WELCOME!</h2></span>
                            <span><h3>Here, Introducing Top Most E-commerce Websites.</h3></span>
                            <span><h5>E-commerce is the activity of electronically buying or selling of products on online services or over the Internet</h5></span>
                            <span><h2></h2></span>
                        </div>
                    </div>
                </div>
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