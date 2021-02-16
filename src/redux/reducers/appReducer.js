import { getAuthUser } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

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

export const initializeApp = () => (dispatch) => {
    const promise = dispatch(getAuthUser());
    Promise.all([promise])
        .then(() => dispatch(setSuccessInitialization()));
}

export default appReducer;