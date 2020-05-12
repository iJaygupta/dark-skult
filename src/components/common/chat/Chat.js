
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import actions from "../../../actions/index";
import ChatGroup from './ChatGroup';

import './Chat.css';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receiverID: "",
            messageText: null,
            groupMessage: [],
            user: {},
            isAuthenticated: true,
            chatRoomId: 10
        };
    }

    sendMessage = () => {
        let groupMessage = [...this.state.groupMessage]
        groupMessage.push({
            text: this.state.messageText, uid: this.props.userInfo.userId
        })
        this.setState({ groupMessage });

        let msgData = {
            messageText: this.state.messageText,
            chatRoomId: this.props.chatRoomId,
            senderName : this.props.userInfo.name
        }
        this.props.chatAction.sendMessage(msgData, (res) => {
        })

    };

    scrollToBottom = () => {
        const chat = document.getElementById("chatList");
        chat.scrollTop = chat.scrollHeight;
    };

    handleSubmit = event => {
        event.preventDefault();
        this.sendMessage();
        event.target.reset();
    };

    handleChange = event => {
        this.setState({ messageText: event.target.value });
    };

    getUser = () => {
        this.props.profileAction.getUserDetails()
    };

    getChatGroups = () => {
        this.props.chatAction.getChatGroup()
    }

    createChatGroup = (callback) => {
        let chatGroupData = {
            "chatRoomId": Math.floor(100 + Math.random() * 900)
        }
        this.props.chatAction.createChatGroup(chatGroupData, callback)
    }

    messageListener = () => {
        this.props.chatAction.addMessageListener((newMessage) => {
            if(this.props.chatRoomId == newMessage.chatRoomId){
                let groupMessage = [...this.state.groupMessage]
                groupMessage.push({
                    text: newMessage.message, uid: newMessage.uid , displayName : newMessage.displayName
                })
                this.setState({ groupMessage });
            }
        })
    }

    getMessages = (chatRoomId) => {
        this.props.chatAction.getMessages(chatRoomId, (response) => {
            if (!response.error) {
                let groupMessage = [...this.state.groupMessage]
                response.data.map((elem) => {
                    groupMessage.push({
                        text: elem.content, uid: elem.user_id , displayName : elem.name
                    })
                    this.setState({ groupMessage });
                })
            }
        })
    }

    componentDidMount() {
        this.props.chatAction.connectSocket(()=>{
            this.messageListener()
        });
        this.getUser()
    }


    render() {
        if (!this.props.chatRoomId) {
            return <ChatGroup getChatGroups={this.getChatGroups} createChatGroup={this.createChatGroup} getMessages={this.getMessages} />
        } else {
            return (
                <div className="chatWindow">
                    <ul className="chat" id="chatList">
                        {this.state.groupMessage.map((data, index) => (
                            <div key={index}>
                                {this.props.userInfo.userId == data.uid ? (
                                    <li className="self">
                                        <div className="msg">
                                            <p>You</p>
                                            <div className="message"> {data.text}</div>
                                        </div>
                                    </li>
                                ) : (
                                        <li className="other">
                                            <div className="msg">
                                                <p>{data.displayName}</p>
                                                <div className="message"> {data.text} </div>
                                            </div>
                                        </li>
                                    )}
                            </div>
                        ))}
                    </ul>
                    <div className="chatInputWrapper">
                        <form onSubmit={this.handleSubmit}>
                            <input
                                className="textarea input"
                                type="text"
                                placeholder="Enter your message..."
                                onChange={this.handleChange}
                            />
                        </form>
                    </div>
                </div>
            );

        }


    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.chatData.messages,
        chatRoomId: state.chatData.chatRoomId,
        userInfo: state.profileData.userInfo,

    }
}

function mapDispatchToProps(dispatch) {

    return {
        chatAction: bindActionCreators(actions.chat, dispatch),
        profileAction: bindActionCreators(actions.profile, dispatch),
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat))


