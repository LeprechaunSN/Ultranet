import React from "react"
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form"

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="input" name="email" placeholder="Email" type="email" />
        </div>
        <div>
            <Field component="input" name="password" placeholder="Password" type="password" />
        </div>
        <div>
            <Field component="input" name="rememberMe" type="checkbox" />
            <label>Remember me</label>
        </div>
        <button>Login</button>
    </form>
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

function Login(props) {
    const login = (values) => {
        props.login(values.email, values.password, values.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={login} />
    </div>
}

export default Login;