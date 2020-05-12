const chat = (state = {}, action) => {

    switch (action.type) {
        case 'init':
            return { messages: [], chatRoomId: '', chatGroups: [] }

        case 'joinChatRoom':
            return { ...state, chatRoomId: action.data }

        case 'getChatGroup':
            return { ...state, chatGroups: action.data }

        case 'getMessages':
            return { ...state, messages: action.data }

        default:
            return state

    }

}

export default chat;