
import { connect } from 'react-redux';
import {
    toggleFollow,
    getUsers, setCurrentPage, setIsFetching, setPortionNum
} from '../../redux/usersReducer';
import React from "react";
import UsersList from "./UsersList";
import {compose} from "redux";
import {
    getCurrentPageState, getIsFetching, getIsFollowFetchingState,
    getPageSizeState,
    getTotalUsersCountState,
    getUsersStateReselector
} from "../../redux/selectors/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return  !nextProps.isFetching || this.props.currentPage!==nextProps.currentPage;
    }

    render() {
        console.log("RENDER UsersC with fetching: "+this.props.isFetching);
        return <UsersList
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                portionNum={this.props.portionNum}
                setPortionNum={this.props.setPortionNum}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                toggleFollow={this.props.toggleFollow}
                isFollowFetching={this.props.isFollowFetching}
                isFetching={this.props.isFetching}
            />;
    }
}

let mapStateToProps = (state) => {
    return{
        users: getUsersStateReselector(state),
        pageSize: getPageSizeState(state),
        totalUsersCount: getTotalUsersCountState(state),
        currentPage: getCurrentPageState(state),
        portionNum: state.usersPage.portionNum,
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
        setIsFetching,
        setPortionNum,
    }),
    //WithAuthRedirect
)(UsersContainer);
