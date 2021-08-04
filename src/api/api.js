import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        //"API-KEY": "a9d0f966-c2f4-474b-8c98-710627b53d18"
        "API-KEY": "adfa0f80-bb2b-49f6-99e1-2fc8e9795f73"
    }
});

export const authAPI = {
    getAuth() {
        return instance.get(
            'auth/me',
        ).then(response => {
            return response;
        });
    },

    logIn(formData) {
        return instance.post(
            'auth/login',
            {email: formData.email, password: formData.password, rememberMe: formData.rememberMe, captcha: formData.captcha}
        ).then(response => {
            return response;
        });
    },

    logOut() {
        return instance.delete(
            'auth/login'
        ).then(response => {
            return response;
        });
    }
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`,
        ).then(response => {
            return response.data;
        });
    },

    followUser(id) {
        return instance.post(
            `follow/${id}`, {},
        ).then(response => {
            return response.data.resultCode;
        });
    },

    unfollowUser(id) {
        return instance.delete(
            `follow/${id}`,
        ).then(response => {
            return response.data.resultCode;
        });
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(
            `profile/` + userId,
        ).then(response => {
            return response.data;
        });
    },

    getAuth() {
        console.warn("Obsolete method. use authAPI");
        return authAPI.getAuth();

        // return instance.get(
        //     'auth/me',
        //     ).then(response => {
        //     return response;
        // });
    },

    pushPhoto(file) {
        let formData = new FormData();
        formData.append("image", file);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    updateProfile(profile) {
      return instance.put('profile', profile);
    },

    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },

    updateStatus(status) {
        return instance.put('profile/status/', {status: status});
    },

}
export const securityAPI = {

    getCaptchaUrl() {
        return instance.get('security/get-captcha-url');
    }
}