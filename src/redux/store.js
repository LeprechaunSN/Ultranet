import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";
import userReduser from "./reducers/usersReduser";
import appReducer from "./reducers/appReducer";

let rootReducer  = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    usersPage: userReduser,
    auth: authReducer,
    form: formReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;