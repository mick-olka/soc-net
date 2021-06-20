
import { connect } from 'react-redux';
import {
    toggleFollow,
    getUsers, setCurrentPage, setIsFetching
} from '../../redux/usersReducer';
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPageState, getIsFetching, getIsFollowFetchingState,
    getPageSizeState,
    getTotalUsersCountState,
    getUsersState
} from "../../redux/selectors/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
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
        users: getUsersState(state),
        pageSize: getPageSizeState(state),
        totalUsersCount: getTotalUsersCountState(state),
        currentPage: getCurrentPageState(state),
        isFollowFetching: getIsFollowFetchingState(state),
        isFetching: getIsFetching(state),
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
    //WithAuthRedirect
)(UsersContainer);
