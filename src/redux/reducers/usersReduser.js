import { followAPI, usersAPI } from "../../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SWITCH_TO_NEXT_PAGE = 'SWITCH_TO_NEXT_PAGE';
const SHOW_USERS_PORTION = 'SHOW_USERS_PORTION';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true
}

const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id)
                        return { ...u, followed: true };
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id)
                        return { ...u, followed: false };
                    return u;
                })
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SWITCH_TO_NEXT_PAGE: {
            return {
                ...state,
                currentPage: state.currentPage + 1
            }
        }
        case SHOW_USERS_PORTION:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const followAC = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
}

export const unfollowAC = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }
}

export const setTotalUsersCountAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
}

export const switchToNextPageAC = () => {
    return {
        type: SWITCH_TO_NEXT_PAGE
    }
}

export const showUsersPortionAC = (users) => {
    return {
        type: SHOW_USERS_PORTION,
        users: users
    }
}

export const toggleIsFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}

export const setUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(switchToNextPageAC());
            dispatch(toggleIsFetchingAC(false));
            dispatch(showUsersPortionAC(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount));
        });
}

export const follow = (userId) => (dispatch) => {
    followAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(userId));
            }
        })
}

export const unfollow = (userId) => (dispatch) => {
    followAPI.unfollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(userId));
            }
        })
}

export default userReduser;