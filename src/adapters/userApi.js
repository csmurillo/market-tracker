import { API } from '../config';
export const updatePassword = (userId, token, password) => {
    return fetch(`${API}/user/account/passwordChange/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(password)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


