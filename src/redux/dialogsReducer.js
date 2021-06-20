const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 0, name: "Tom"},
        {id: 1, name: "Kate"},
        {id: 2, name: "Sebas"},
        {id: 3, name: "Vakusa"},
        {id: 4, name: "Renol"},
        {id: 5, name: "Dekolaf"},
        {id: 6, name: "Dalna"},
        {id: 7, name: "Qwarka"},
    ],

    messages: [
        {id: 10, message: "HELLLO"},
        {id: 21, message: "GHGHjkjk sghgsh gshjgshj ghsghsg"},
        {id: 32, message: "1761867281619 7281972819"},
        {id: 43, message: "))))))0000)))___"},
        {id: 54, message: "QWertyuio!!!!!!"},
        {id: 65, message: "TAKe meeeeeeeeee"},
        {id: 76, message: "OOOOOOps"},
        {id: 87, message: "QWERTYUIOP???"},
    ]
};

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {

        case SEND_MESSAGE:

            let body = action.newMessageBody;
            stateCopy = {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
            return stateCopy;

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;