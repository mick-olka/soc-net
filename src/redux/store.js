import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            profileInfo: {id: 0, name: "Mick", info: "Leet Meee Out!"},
            newPostText: 'write',
            posts: [
                {id: 0, author: "Mick", likes: 0, message: "IT''\"S MY FIRST POST!!!!"},
                {
                    id: 2,
                    author: "Mick",
                    likes: 2,
                    message: "SOME post post post post post",
                },
                {id: 4, author: "Mick", likes: 12, message: "i am the lord of time"},
                {
                    id: 6,
                    author: "Mick",
                    likes: 1234,
                    message: "i like lorem ipsum )))))))))))00))))",
                },
                {
                    id: 8,
                    author: "Mick",
                    likes: 333,
                    message: "My name is 21931-08391038321",
                },
                {id: 10, author: "Mick", likes: 0, message: "Say abrakadabra"},
                {
                    id: 12,
                    author: "Mick",
                    likes: 343,
                    message: "QWETRYFGHSBH guwdiqhdq ghduwqigdhqi y6739gheiq guqi",
                },
                {
                    id: 14,
                    author: "Mick",
                    likes: 51,
                    message: "POOOOOOOOOOOOOOooooooooOOOOOOOOOOst",
                },
                {id: 16, author: "Mick", likes: 51, message: "Leet mtttttt ouy;"},
            ]
        },

        dialogsPage: {
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
                {id: 0, message: "HELLLO"},
                {id: 1, message: "GHGHjkjk sghgsh gshjgshj ghsghsg"},
                {id: 2, message: "1761867281619 7281972819"},
                {id: 3, message: "))))))0000)))___"},
                {id: 4, message: "QWertyuio!!!!!!"},
                {id: 5, message: "TAKe meeeeeeeeee"},
                {id: 6, message: "OOOOOOps"},
                {id: 7, message: "QWERTYUIOP???"},
            ],
            newMessageBody: 'Message',
        },

        newsPage: {
            posts: [
                {id: 1, author: "Nika", likes: 0, message: "IT''\"S MY FIRST POST!!!!"},
                {
                    id: 3,
                    author: "Mark",
                    likes: 2,
                    message: "SOME post post post post post",
                },
                {id: 5, author: "Lokey", likes: 12, message: "i am the lord of time"},
                {
                    id: 3,
                    author: "Shane",
                    likes: 1234,
                    message: "i like lorem ipsum )))))))))))00))))",
                },
                {
                    id: 7,
                    author: "Sam",
                    likes: 333,
                    message: "My name is 21931-08391038321",
                },
                {id: 9, author: "Gogh", likes: 0, message: "Say abrakadabra"},
                {
                    id: 11,
                    author: "Susan",
                    likes: 343,
                    message: "QWETRYFGHSBH guwdiqhdq ghduwqigdhqi y6739gheiq guqi",
                },
                {
                    id: 13,
                    author: "Kate",
                    likes: 51,
                    message: "POOOOOOOOOOOOOOooooooooOOOOOOOOOOst",
                },
                {id: 15, author: "Nina", likes: 51, message: "Leet mtttttt ouy;"},
            ]

        }
    },
    _callSubscriber() { //передати сюди observer в який ми передали rerenderEntireTree з index
        console.log('@ state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  //передали rerenderEntireTree з index в _callSubscriber
        // щоб коли змінили state зробити render дерева
    },

    dispatch(action) {

        this._state = profileReducer(this._state.profilePage, action); //profileReducer gives us new state
        // which depends on action type
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action); //same

        this._callSubscriber(this._state); //rerenderEntireTree here
    }
};

window.store = store;

export default store;
