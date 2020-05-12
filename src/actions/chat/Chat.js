import api from '../../lib/request';
import apiPaths from '../../lib/api';
import io from 'socket.io-client';
var socket = undefined;

const chat = {

	connectSocket: function (callback) {
		return dispatch => {
			if (!socket) {
				socket = io(process.env.REACT_APP_API_URL, { query: `token=${localStorage.getItem('token')}` });
			}
			callback()
		}
	},
	createChatGroup: function (data, callback) {
		return dispatch => {
			api.setMethod('POST').sendRequest(`${apiPaths.createChatGroup}`, data, true, function (response) {

				callback(response.data.data);
			}, dispatch)
		}
	},
	getChatGroup: function (filters, callback) {
		return dispatch => {
			api.setMethod('GET').sendRequest(`${apiPaths.getChatGroup}`, null, true, function (response) {
				dispatch({
					type: 'getChatGroup',
					data: response.data.data
				});
				// callback(response.data);
			}, dispatch)
		}
	},
	getMessages: function (chatRoomId, callback) {
		return dispatch => {
			api.setMethod('GET').sendRequest(`${apiPaths.getMessages}/${chatRoomId}`, null, true, function (response) {
				dispatch({
					type: 'getMessages',
					data: response.data.data
				});
				callback(response.data);
			}, dispatch)
		}
	},
	joinChatRoom: function (chatRoomId, callback) {
		return dispatch => {
			dispatch({
				type: 'joinChatRoom',
				data: chatRoomId
			});
			callback();
			if (socket) {
				socket.emit('join-chat-room', chatRoomId);
			}
		}
	},
	sendMessage: function (data, callback) {
		return dispatch => {
			if (socket) {
				socket.emit('chat-message', data);
			}
		}
	},
	addMessageListener: function (callback) {
		return dispatch => {
			if (socket) {
				socket.on('getMessage', function (data) {
					callback(data)
				});
			}
		}
	},
}


export default chat;
