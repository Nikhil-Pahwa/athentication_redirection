export interface RemoteUser {
    user_name: string;
    role: string;
    company: string;
}

export interface User {
    name: string;
    role: string;
}

export class User implements User {
    constructor(
        public name: string,
        public role: string,
    ) {
    }
}

export let EmptyUser = new User('', '');

export function UserFromRemote(user: RemoteUser): User {
    return new User(user.user_name, user.role);
}

