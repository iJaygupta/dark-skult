import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import './Profile.css';
import actions from '../../actions/index';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {
                email: "",
                name: "",
                profilePic: "",
                registered_on: "",
                _id: "",
                is_email_verified: "",
                is_phone_verified: ""
            }
        }
    }

    componentDidMount() {

        this.props.profileAction.getUserDetails((response) => {
            if (!response.error && response.data) {
                this.setState({ userDetails: response.data });
            }
        })
    }


    render() {
  
        let userDetails = this.state.userDetails;

        return (
            <div className="profile-block">
                <div className="col-sm-8 mx-auto my-3 mt-md-8 px-md-3">
                    <div className="profile-box shadow card">
                        <h2 className="p-3 shadow font-weight-bold">Profile Details</h2>
                        <div className="card-body" >

                            <div className="row ">
                                <div className="col-sm-5 p-3">
                                    <img className="rounded-circle d-block m-auto" width="160px" src={userDetails.profilePic} alt="Card image cap"></img>
                                </div>
                                <div className="col-sm-7 p-3">
                                    <div className="list-group">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h2 className="font-weight-bold">{userDetails.name}</h2>
                                            <small className="text-muted">3 days ago</small>
                                        </div>
                                        <span className="mb-1 font_2">What was beyond the bend in the stream was unknown. Both were curious, but only one was brave enough to want to explore. That was the problem. There was always one that let fear rule her life.</span>
                                        <small className="text-muted font_1 justify-content-center">Donec id elit non mi porta.</small>
                                    </div>
                                    <a href="#" className="card-link font_2">Edit Profile</a>

                                </div>
                            </div>
                            {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                            {/* <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p> */}
                            <div className="progress shadow-sm">
                                <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 mx-auto my-3 mt-md-8 px-md-3">
                    <div className="profile-box shadow card">
                        <div className="card-body" >
                            <h3 className="shadow-sm mb-3 card-title">User Info</h3>
                            <div className="col-md-12 m-auto">
                                <div className="row bg-light text-center">
                                    <div className="col-md-6 p-0 w-50">
                                        <label className="font_2 font-weight-bold">Name</label>
                                    </div>
                                    <div className="col-md-6 p-0 w-50">
                                        <p className="font_2 font-weight-normal">{userDetails.name}</p>
                                    </div>
                                </div>
                                <div className="row text-center">
                                    <div className="col-md-6 p-0 w-50">
                                        <label className="font_2 font-weight-bold">Email</label>
                                    </div>
                                    <div className="col-md-6 p-0 w-50">
                                        <p className="font_2 font-weight-normal">{userDetails.email}</p>
                                    </div>
                                </div>
                                <div className="row bg-light text-center">
                                    <div className="col-md-6 p-0 w-50">
                                        <label className="font_2 font-weight-bold">Joined On</label>
                                    </div>
                                    <div className="col-md-6 p-0 w-50">
                                        <p className="font_2 font-weight-normal">{userDetails.registered_on ? new Date(userDetails.registered_on).toDateString() : ""}</p>
                                    </div>
                                </div>
                                <div className="row text-center">
                                    <div className="col-md-6 p-0 w-50">
                                        <label className="font_2 font-weight-bold">Mobile</label>
                                    </div>
                                    <div className="col-md-6 p-0 w-50">
                                        <p className="font_2 font-weight-normal">{userDetails.mobile}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 mx-auto my-3 mt-md-8  px-md-3">
                    <div className="profile-box shadow card">
                        <div className="card-body" >
                            <h3 className="shadow-sm mb-3 card-title">Other Info</h3>
                            <div className="col-md-12 m-auto">
                                <div className="row bg-light text-center">
                                    <div className="col-md-6 p-0 w-50">
                                        <label className="font_2 font-weight-bold">Email Verified</label>
                                    </div>
                                    <div className="col-md-6 p-0 w-50">
                                        <p className=" font_2 font-weight-normal">{userDetails.is_email_verified !== "" ? userDetails.is_email_verified ? "Yes" : "No" : ""}</p>
                                    </div>
                                </div>
                                <div className="row text-center">
                                    <div className="col-md-6 p-0 w-50">
                                        <label className="font_2 font-weight-bold">Phone Verified</label>
                                    </div>
                                    <div className="col-md-6 p-0 w-50">
                                        <p className=" font_2 font-weight-normal">{userDetails.is_phone_verified !== "" ? userDetails.is_phone_verified ? "Yes" : "No" : ""}</p>
                                    </div>
                                </div>
                                <div className="row bg-light text-center">
                                    <div className="col-md-6 p-0 w-50">
                                        <label className="font_2 font-weight-bold">Role</label>
                                    </div>
                                    <div className="col-md-6 p-0 w-50">
                                        <p className=" font_2 font-weight-normal">{userDetails.role}</p>
                                    </div>
                                </div>
                                <div className="row text-center">
                                    <div className="col-md-6 p-0 w-50">
                                        <label className="font_2 font-weight-bold">Address</label>
                                    </div>
                                    <div className="col-md-6 p-0 w-50">
                                        <p className=" font_2 font-weight-normal">{userDetails.address}</p>
                                    </div>
                                </div>
                            </div>
                            {/* <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul> */}
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

const mapStateToProps = state => ({

    userInfo: state.authData.userInfo,
    token: state.authData.token
})


const mapDispatchToProps = dispatch => ({

    profileAction: bindActionCreators(actions.profile, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);