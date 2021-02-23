import { profileAPI } from "../../api/api";

const ADD_POST = 'ultanet/profile/ADD_POST';
const SET_PROFILE = 'ultanet/profile/SET_PROFILE';
const SET_STATUS = 'ultanet/profile/SET_STATUS';

let initialState = {
    posts: [
        { content: "It's a wonderful life!", likesCount: 5 },
        { content: "Hello, world", likesCount: 12 },
        { content: "Learn as if you were to live forever.", likesCount: 8 }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                content: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const setProfileAC = (profile) => ({
    type: SET_PROFILE,
    profile
});

export const setStatusAC = (status) => ({
    type: SET_STATUS,
    status
});

export const addPostCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const getProfile = (id) => (dispatch) => {
    profileAPI.getProfileInfo(id)
        .then(data => {
            dispatch(setProfileAC(data));
        });
}

export const getStatus = (id) => (dispatch) => {
    profileAPI.getStatus(id)
        .then(data => dispatch(setStatusAC(data)));
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => dispatch(setStatusAC(data)));
}

export const addPost = (newPostText) => (dispatch) => {
    dispatch(addPostCreator(newPostText));
}

export default profileReducer;