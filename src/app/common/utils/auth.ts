import { Token } from 'src/app/core/interfaces/auth.interface';
import { UserPayload } from 'src/app/core/interfaces/user.interface';

export function saveUserAuth(token: Token) {
    localStorage.setItem('nc-us', JSON.stringify(token));
}

export function getUserAuth(): UserPayload {
    const data = localStorage.getItem('nc-us');
    const token = JSON.parse(data);
    const { user } = token;
    return user;
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

