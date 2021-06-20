
export const getUsersState = (state) => {
    return state.usersPage.users;
}

export const getPageSizeState = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCountState = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPageState = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFollowFetchingState = (state) => {
    return state.usersPage.isFollowFetching;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
