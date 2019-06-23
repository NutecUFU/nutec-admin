import { Token } from 'src/app/core/interfaces/auth.interface';

const invalidToken = { token: '' };

export function saveUserAuth(token: Token) {
    localStorage.setItem('nc-us', JSON.stringify(token));
}

export function getUserAuth(): Token {
    const data = localStorage.getItem('nc-us');
    return JSON.parse(data);
}

export function getToken(): Token {
    const storageData = localStorage.getItem('nc-us');

    if (storageData) {
        const user = JSON.parse(storageData);
        const { token } = user;
        return token;
    }

    return invalidToken;
}

