import { UserPayload } from './user.interface';

export interface AuthPayload {
    email: string;
    password: string;
}

export interface Token {
    token: string;
    user: UserPayload;
}
