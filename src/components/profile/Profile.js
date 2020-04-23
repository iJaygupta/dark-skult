import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import './Profile.css';
import actions from '../../actions/index';


class Profile extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.userInfo && this.props.userInfo.id) {
            this.props.profileAction.getUserDetails(this.props.userInfo.id, function (response) {
                console.log(response)
            })
        }else{
            console.log("no id")
        }
        // this.props.

    }

    render() {
        console.log(this.props)
        return (
            <div className="profile-block">
                <div className="col-sm-8 mt-3 mt-md-8 p-0 px-md-3">
                    <div className="profile-box card">
                        <div className="card-body" >
                            <h2 className="font-weight-bold">Profile Details</h2>
                            <div className="row">
                                <div className="col-sm-2 mb-3 p-3">
                                    <img className="rounded-circle" width="160px" src="https://lh3.googleusercontent.com/a-/AOh14Ggnx2zZBeGfZe5Ql7Urqdii1XEfW86n3BZPN8Hp5w" alt="Card image cap"></img>
                                </div>
                                <div className="col-sm-8 mb-5 p-3">
                                    <div class="list-group">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h2 className="font-weight-bold">Jay Gupta</h2>
                                            <small className="text-muted">3 days ago</small>
                                        </div>
                                        <span className="mb-1">What was beyond the bend in the stream was unknown. Both were curious, but only one was brave enough to want to explore. That was the problem. There was always one that let fear rule her life.</span>
                                        <small className="text-muted">Donec id elit non mi porta.</small>
                                    </div>
                                    <a href="#" className="card-link">Edit Profile</a>

                                </div>
                            </div>
                            {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                            {/* <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p> */}

                        </div>
                    </div>
                </div>
                <div className="col-sm-8 mt-3 mt-md-8 p-0 px-md-3">
                    <div className="profile-box card">
                        <div className="card-body" >
                            <h2 className="card-title">User Info</h2>
                            <ul class="list-group ">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 mt-3 mt-md-8 p-0 px-md-3">
                    <div className="profile-box card">
                        <div className="card-body" >
                            <h2 className="card-title">Other Info</h2>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
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