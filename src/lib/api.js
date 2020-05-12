
export default {
    signUp: '/api/v1/signup',
    logIn: '/api/v1/login',
    socialLogin: '/user/social-login',
    getUserDetails: '/api/v1/user',
    getServiceProviderList: `${process.env.REACT_APP_API_URL_NEW}/api/provider/list`,
    createChatGroup: '/api/v1/chatRoom',
    getChatGroup: '/api/v1/chatRoom',
    getMessages : `/api/v1/message`,
}

