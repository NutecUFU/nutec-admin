import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { saveUserAuth } from 'src/app/common/utils/auth';
import { AuthPayload, Token } from 'src/app/core/interfaces/login.interface';
import { environment } from 'src/environments/environment';

import { CoreModule } from '../core.module';

@Injectable({
    providedIn: CoreModule
})
export class AuthService {

    private loggedIn: boolean;
    private previousUrl = '';

    constructor(private readonly http: HttpClient, private route: Router) { }

    auth(payload: AuthPayload): Observable<Token> {
        return this.http.post<Token>(`${environment.endpoints.auth}`, payload);
    }

    setUserToken(token: Token) {
        if (token.token !== '' && token.token !== null) {
            saveUserAuth(token);
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }

        return this.isLoggedIn;
    }

    navigate() {
        this.route.navigate([this.previousUrl]);
    }

    get isLoggedIn() { return this.loggedIn; }
    set setPreviousUrl(url: string) { this.previousUrl = url; }
}
