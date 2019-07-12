import { Token } from 'src/app/core/interfaces/auth.interface';

export function saveUserAuth(token: Token) {
    localStorage.setItem('nc-us', JSON.stringify(token));
}

export function getUserAuth(): Token {
    const data = localStorage.getItem('nc-us');
    return JSON.parse(data);
}

export function getToken(): string {
    const storageData = localStorage.getItem('nc-us');

    if (storageData) {
        const user = JSON.parse(storageData);
        const { token } = user;
        return token;
    }

    return '';
}

