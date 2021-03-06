import React from "react"
import { connect } from "react-redux";
import { login } from "../../redux/reducers/authReducer";
import Login from "./Login";

class LoginContainer extends React.Component {
    render() {
        return <Login {...this.props} />
    }

}

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth })

export default connect(mapStateToProps, {login})(LoginContainer);