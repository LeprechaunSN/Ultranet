import { authAPI, profileAPI } from "../../api/api";

const SET_USER_DATA = "ultanet/auth/SET_USER_DATA";
const SET_USER_PHOTO = "ultanet/auth/SET_USER_PHOTO";

const initialState = {
    id: null,
    email: null,
    login: null,
    photo: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: action.isAuth
            }
        case SET_USER_PHOTO:
            return {
                ...state,
                photo: action.photo
            }
        default:
            return state;
    }
}

export const setAuthUserData = (payload, isAuth) => ({ type: SET_USER_DATA, payload, isAuth });

export const setAuthUserPhoto = photo => ({ type: SET_USER_PHOTO, photo })

export const getAuthUser = () => (dispatch) => {

    return authAPI.authMe()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(response.data, true));
            }
        })
        .then(profileAPI.getProfileInfo()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthUserPhoto(response.photos.small));
                }
            })
        );
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(getAuthUser());
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData({
            id: null,
            email: null,
            login: null,
            photo: null,
            password: null
        }, false));
    }
}

export default authReducer;