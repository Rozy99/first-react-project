import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { text: "My name", likes: 56 },
                { text: "is", likes: 11 },
                { text: "Rozi", likes: 4 },
            ],
            newPostText: "",
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Vova" },
                { id: 2, name: "Gustav" },
                { id: 3, name: "Salvador" },
                { id: 4, name: "Van" },
                { id: 5, name: "Mane" },
            ],

            messages: [
                { id: 1, message: "Hi, my dear friend!", img: "avatar.jpg" },
                { id: 2, message: "Hi Rozi.. How are you?", img: "dinosaur.jpg" },
                {
                    id: 3,
                    message: "I'm good. Thanks! I know you are becoming a cool samurai :O",
                    img: "avatar.jpg",
                },
                {
                    id: 4,
                    message:
                        "Yes, you're right, I like react and I wanna be master in my work!",
                    img: "dinosaur.jpg",
                },
                { id: 5, message: "I believe in you. Rock it!!!", img: "avatar.jpg" },
            ],
            newMessageText: "",
        },

        sidebar: {
            friends: [
                { name: "Rozi" },
                { name: "Gustav" },
                { name: "Mane" },
            ]
        }
    },
    _callSubscriber() {
        console.log('bababababa');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
