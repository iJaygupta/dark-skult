import api from '../../lib/request';
import apipaths from '../../lib/api';

const common = {
	getRoles : function () {
		return dispatch => {
			api.setMethod('get').sendRequest( apipaths.userRolesList, {}, false, function(response) {
				dispatch({
					type	: 'getRoles',
					error 	: response.data.error,
					msg		: response.data.msg,
					data 	: response.data.data
				});
			}, dispatch);
		}
	},

	userInfo : function (callback) {
		return dispatch => {
			api.setMethod('get').sendRequest(apipaths.getUserInfo, {}, true, function(res) {
				callback({
					error 	: res.data.error,
					msg		: res.data.msg,
					data	: res.data.data
				});
				
				dispatch({
					type	: 'userInfo',
					error 	: res.data.error,
					msg		: res.data.msg,
					data	: res.data.data
				});
			}, dispatch);
		}
	},

	isLoader : function (bool) {
		return {
			type: 'loader',
			isLoader: bool,
		}
	},
	cardLoader : function (bool) {
		return {
			type: 'cardLoader',
			isCardLoader: bool,
		}
	},
	notify : function (content, type, clsName) {
		// var clsName = (typeof clsName === 'undefined') ? "" : clsName;

		// return (dispatch, getState) => {
		// 	dispatch({
		// 		type: 'notify',
		// 		data: content,
		// 		toastClass: clsName,
		// 		notificationType : type
		// 	});
		// }
	},

	logVideoInfo : function (data) {
		return (dispatch) => {
			api.setMethod('post').sendRequest( apipaths.videoInfo, data, true, function(res) {
				
			}, dispatch);
		}
	},

	notified : function () {
		return {
			type: 'notified'
		}
	},
	removeNotification : function () {
		return {
			type: 'removeNotification',
		};
	},


}


export default common;
