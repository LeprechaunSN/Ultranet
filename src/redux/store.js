import { applyMiddleware, combineReducers, compose, createStore } from "redux";
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


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;