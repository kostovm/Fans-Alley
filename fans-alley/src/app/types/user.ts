export interface UserInfo {
    name: string,
    phoneNumber: string,
    email: string,
    username: string,
    about: string,
    password: string,
    imageUrl: string
}

export interface UserForAuth {
    about: string;
    accessToken: string;
    email: string;
    imageUrl: string;
    name: string;
    phoneNumber: string
    username: string
    _id: string
}