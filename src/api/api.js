import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a9d0f966-c2f4-474b-8c98-710627b53d18"
    }
});

export const usersAPI = {
    getUsers (currentPage=1, pageSize=10) {
    return instance.get(
        `users?page=${currentPage}&count=${pageSize}`,
        ).then(response => {
        return response.data;
    });
},

    followUser (id) {
        return instance.post(
            `follow/${id}`, {},
            ).then(response => {
            return response.data.resultCode;
        });
    },

    unfollowUser (id) {
        return instance.delete(
            `follow/${id}`,
        ).then(response => {
            return response.data.resultCode;
        });
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(
            `profile/` + userId,
            ).then(response => {
            return response.data;
        });
    },

    getAuth () {
        return instance.get(
            'auth/me',
            ).then(response => {
            return response;
        });
    }

}
