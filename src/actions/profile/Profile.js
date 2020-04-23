import api from '../../lib/request';
import apiPaths from '../../lib/api';



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
    }
}

export default profile;

