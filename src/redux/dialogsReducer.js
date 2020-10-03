
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
    dialogs: [
      { id: 0, name: "Tom" },
      { id: 1, name: "Kate" },
      { id: 2, name: "Sebas" },
      { id: 3, name: "Vakusa" },
      { id: 4, name: "Renol" },
      { id: 5, name: "Dekolaf" },
      { id: 6, name: "Dalna" },
      { id: 7, name: "Qwarka" },
    ],

    messages: [
      { id: 0, message: "HELLLO" },
      { id: 1, message: "GHGHjkjk sghgsh gshjgshj ghsghsg" },
      { id: 2, message: "1761867281619 7281972819" },
      { id: 3, message: "))))))0000)))___" },
      { id: 4, message: "QWertyuio!!!!!!" },
      { id: 5, message: "TAKe meeeeeeeeee" },
      { id: 6, message: "OOOOOOps" },
      { id: 7, message: "QWERTYUIOP???" },
    ], 
    newMessageBody: 'Message',
};

const dialogsReducer = (state=initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
stateCopy = {
    ...state,
    newMessageBody: action.body
};
            return stateCopy;
        
        case SEND_MESSAGE:

            let body = state.newMessageBody;
            stateCopy = {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id:6, message: body}]
            };
            return stateCopy;

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;