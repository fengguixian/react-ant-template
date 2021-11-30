import request from '../index'

// 
export function login(token) {
    return request({
        url: '/api/users/login',
        method: 'get',
        headers: {
            'Authorization': "Bearer " + token
        }
    })
}

export function getToken(uid) {
    return request({
        url: '/user/token',
        method: 'post',
        params: {
            uid: uid
        }
    });
}