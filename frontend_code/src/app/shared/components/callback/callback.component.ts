import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-callback',
    template: ''
})

export class CallbackComponent {
    constructor(private router: Router) {
        this.handleAuth();
    }
    // Should create a separate Auth module and move it over there.
    handleAuth() {
        let authToken = window.location.hash;
        // alert(authToken);
        // TODO(npahwa) Should use localstorage custom class. Need to improve this
        localStorage.setItem('authToken', authToken.substr(1));
        this.router.navigate(['/']);
    }
}
