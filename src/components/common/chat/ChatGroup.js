
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import actions from "../../../actions/index";
import './ChatGroup.css';

class ChatGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    createGroup = () => {
        this.props.createChatGroup(() => {
            this.browseGroup()
        });
    }

    browseGroup = () => {
        this.props.getChatGroups()
    }

    joinChatGroup = (chatRoomId) => {
        this.props.chatAction.joinChatRoom(chatRoomId, ()=>{
            this.props.getMessages(chatRoomId)
        });
    }

    componentDidMount() {
        this.browseGroup();
    }


    render() {

        let groups = this.props.chatGroups && this.props.chatGroups.map((chatItem, index) => {
            return (
                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{chatItem.chatroom_id}</td>
                    <td>
                        <button onClick={() => { this.joinChatGroup(chatItem.chatroom_id) }} style={{ "border-radius": "20px" }} className="btn btn-success border px-2 py-2">Join</button>

                    </td>
                </tr>
            )
        })

        return (
            <div className="group-box">
                <div className="box-content">
                    <div className="card ">
                        <div className="card-body">
                            <div className="box1">
                                <h5 className="card-title"><h3><b style={{ "font-size": "16px" }}>Manage Chat Groups</b></h3></h5>
                                <div className="row box-content">
                                    <button onClick={this.createGroup} style={{ "border-radius": "20px" }} className="btn btn-primary border px-4 py-2">Create</button>

                                    <button onClick={this.browseGroup} style={{ "border-radius": "20px" }} className="btn btn-primary border px-4 py-2">Browse</button>
                                </div>
                            </div>
                            <div className="box2">

                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Group Id</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {groups}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        chatGroups: state.chatData.chatGroups
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatAction: bindActionCreators(actions.chat, dispatch),
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatGroup))


