import {usersAPI} from "../api/api";

const SET_USERS = "SET_USERS";
const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_PORTION_NUM = "SET_PORTION_NUM";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOW_FETCHING = "FOLLOW_FETCHING";
const SET_CREATURES = "SET_CREATURES";

let initialState = {
    users: [],
    pageSize: 20,
    TotalUsersCount: 0,
    currentPage: 1,
    portionNum: 1,
    isFetching: true,
    isFollowFetching: [],
    creatures: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }

        case SET_CREATURES:
            return {
                ...state, creatures: [...action.creatures]
            }

        case TOGGLE_FOLLOW:
            return {
                ...state,
                // users: updateArrayItem(state.users, action.userId, "id", {followed: true})
                    users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed};
                    }
                    return u;
                }),
            };

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_PORTION_NUM:
            return {...state, portionNum: action.portionNum};

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        case FOLLOW_FETCHING:
            return {
                ...state, isFollowFetching: action.isFetching ?
                    [...state.isFollowFetching, action.userId] :
                    state.isFollowFetching.filter(id => id !== action.userId)
            };

        default:
            return state;
    }
};

export const toggleFollowDone = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setPortionNum = (portionNum) => ({type: SET_PORTION_NUM, portionNum});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowFetching = (isFetching, userId) => ({type: FOLLOW_FETCHING, isFetching, userId});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {    // THUNK
    dispatch(setIsFetching(true));
    let response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(setIsFetching(false));
}

export const toggleFollow = (userId, isFollowed) => async (dispatch) => {
    dispatch(toggleFollowFetching(true, userId));
    if (isFollowed) {
        let response = await usersAPI.unfollowUser(userId);
        if (response === 0) {
            dispatch(toggleFollowDone(userId));
        }
        dispatch(toggleFollowFetching(false, userId));
    } else {
        let response0 = await usersAPI.followUser(userId)
        if (response0 === 0) {
            dispatch(toggleFollowDone(userId));
        }
        dispatch(toggleFollowFetching(false, userId));
    }
}

export default usersReducer;