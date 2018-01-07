import { Injectable } from '@angular/core';

@Injectable()
export class AuthTokenService {
    private _token: string = '';

    constructor(
    ) {
    }

    set token(s: string) {
        this._token = s;
    }

    get token(): string {
        // return this._token;
        // TODO(npahwa) Should use localstorage custom class. Need to improve this
        this._token = localStorage.getItem('authToken');
        return this._token;
    }
}
