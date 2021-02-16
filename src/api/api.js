import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "f9685e89-0c26-4e35-aaa0-bfe8dae92b2b"
    }
})

export const authAPI = {
    authMe() {
        return instance.get("auth/me")
            .then(response => response.data);;
    },
    login(email, password, rememberMe) {
        return instance.post("auth/login", {email, password, rememberMe})
            .then(response => response.data);
    },
    logout() {
        return instance.delete("auth/login")
            .then(response => response.data);;
    }
}

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfileInfo(id) {
        return instance.get('profile/' + id)
            .then(response => response.data);
    },
    getStatus(id) {
        return instance.get('profile/status/' + id)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put('profile/status', { status: status })
            .then(response => response.data);
    }
}

export const followAPI = {
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    }
}