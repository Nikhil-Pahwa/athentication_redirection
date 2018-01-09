import { Injectable } from '@angular/core';
import { AuthTokenService } from '../utils';
import { environment } from '../../../../environments/environment';
/*
 * SessionService handles user session and XSRF tokens.
 */
@Injectable()
export class SessionService {
    constructor(
        private authTokenService: AuthTokenService
    ) {
        if (!this.authTokenService.token) {
            // TODO(npahwa) Need to move this hardcoded url to config file or in envirnoment variables.
            // Also need to do redirection with the help of services
            window.location.href = `${environment.apiBaseUrl}/authenticate`;
        }
    }
}


