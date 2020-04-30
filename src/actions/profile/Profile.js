import api from '../../lib/request';
import apiPaths from '../../lib/api';
import buildUrl from '../../lib/utils';




const profile = {
    getUserDetails: function (userId, callback) {

        return dispatch => {
            api.setMethod('GET').sendRequest(`${apiPaths.getUserDetails}`, null, true, function (response) {
                // dispatch({
                //     type: 'socialLogin',
                //     error: response.data.error,
                //     msg: response.data.msg,
                //     token: response.data.token,
                //     userInfo: response.data.data
                // });
                callback(response.data);
            }, dispatch)
        }
    },
    getServiceProviderList: function (filters, callback) {
        let listUrl = buildUrl(apiPaths.getServiceProviderList, filters)

        return dispatch => {
            api.setMethod('GET').sendRequest(listUrl, null, null, function (response) {
                dispatch({
                    type: 'getServiceProviderList',
                    error: response.data.error,
                    msg: response.data.msg,
                    data: response.data.data
                });
                callback(response.data);
            }, dispatch)
        }
    }
}

export default profile;

