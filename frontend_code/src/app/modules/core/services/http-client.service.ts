import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthTokenService } from '../utils';
import { environment } from '../../../../environments/environment';

@Injectable()
export class HttpClient {

    constructor(private http: Http, private authTokenService: AuthTokenService) { }

    createAuthorizationHeader(headers: Headers) {
        headers['Content-Type'] = 'application/json; charset=utf-8;';
        if (this.authTokenService.token) {
            headers.append('AUTH-TOKEN', this.authTokenService.token);
        } else {
            // TODO(npahwa) Need to move this hardcoded url to config file or in envirnoment variables.
            // Also need to do redirection with the help of services
            window.location.href = `${environment.apiBaseUrl}/authenticate`;
        }
    }

    get(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    }

    post(url, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }
}
