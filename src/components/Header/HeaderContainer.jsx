import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthUser, logout } from "../../redux/reducers/authReducer"

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUser();
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    id: state.auth.id,
    login: state.auth.login,
    photo: state.auth.photo,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { getAuthUser, logout })(HeaderContainer);