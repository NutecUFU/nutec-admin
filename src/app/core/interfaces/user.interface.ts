export interface UserPayload {
    id?: number;
    email: string;
    password: string;
    is_active: boolean;
    first_name: string;
    last_name: string;
    profile: ProfilePayload;
}

interface ProfilePayload {
    photo: File;
    lattes?: string;
    linked?: string;
}
