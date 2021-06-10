
import { connect } from 'react-redux';
import {
    toggleFollow,
    getUsers, setCurrentPage, setIsFetching
} from '../../redux/usersReducer';
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        console.log("did mount");
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                toggleFollow={this.props.toggleFollow}
                isFollowFetching={this.props.isFollowFetching}
                isFetching={this.props.isFetching}
            />}
        </>;
    }
}

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFollowFetching: state.usersPage.isFollowFetching,
        isFetching: state.usersPage.isFetching,
    }
}

//let AuthRedirectComponent = WithAuthRedirect(UsersContainer);

export default compose (
    connect(mapStateToProps, {
        toggleFollow,
        setCurrentPage,
        getUsers,
        setIsFetching
    }),
    WithAuthRedirect
)(UsersContainer);
