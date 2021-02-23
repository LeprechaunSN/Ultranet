import { getAuthUser } from "./authReducer";

const INITIALIZED_SUCCESS = 'ultranet/app/INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const setSuccessInitialization = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => async (dispatch) => {
    const promise = await dispatch(getAuthUser());
    Promise.all([promise])
    dispatch(setSuccessInitialization());
}

export default appReducer;