import React from "react"
import { connect } from "react-redux";
import Users from "./Users";
import { follow, unfollow, setUsers } from "../../redux/reducers/usersReduser";
import { compose } from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setUsers(this.props.currentPage, this.props.pageSize);
    }

    switchToNextPage = () => {
        this.props.setUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return <>
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                switchToNextPage={this.switchToNextPage}
            />
        </>;
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default compose( 
    connect(mapStateToProps, { follow, unfollow,setUsers })
)(UsersContainer);