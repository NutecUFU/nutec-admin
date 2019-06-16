import { Token } from 'src/app/modules/login/interfaces/login.interface';

export function saveUserAuth(token: Token) {
    localStorage.setItem('nc-us', JSON.stringify(token));
}

export function getUserAuth() {
    const data = localStorage.getItem('nc-us');
    return JSON.parse(data);
}

export function getToken() {
    const storageData = localStorage.getItem('nc-us');

    if (storageData) {
        const user = JSON.parse(storageData);
        const { token } = user;
        return token;
    }

    return '';
}

