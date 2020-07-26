const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let message = {
                id: 6,
                message: state.newMessageText,
                img: "dinosaur.jpg"
            };
            state.messages.push(message);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return ({
        type: SEND_MESSAGE
    })
}

export const updateNewMessageTextActionCreator = (message) => {
    return ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        message: message
    })
}

export default dialogsReducer;
