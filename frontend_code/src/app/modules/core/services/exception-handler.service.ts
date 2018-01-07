import { ErrorHandler, Injectable } from '@angular/core';
@Injectable()

export class ExceptionHandler extends ErrorHandler {
    constructor() {
        super(true);
    }

    handleError(error: any): void {
        try {
            switch (error.status) {
                case 401:
                    // TODO(npahwa) Need to move this hardcoded url to config file or in envirnoment variables.
                    // Also need to do redirection with the help of services
                    window.location.href = 'http://localhost:3002/authenticate';
                    break;
                case 403:
                    // To do here route from here
                    break;
                case 500:
                    // To do here route from here
                    break;
                default:
                    // To do here route from here
                    break;
            }
        } catch (ex) {
            throw (ex);
        }
    }
}
