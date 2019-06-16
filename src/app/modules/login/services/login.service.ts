import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Login, Token } from '../interfaces/login.interface';


@Injectable()
export class LoginService {
    constructor(private readonly http: HttpClient) { }

    login(payload: Login): Observable<Token> {
        return this.http.post<Token>(`${environment.endpoints.auth}`, payload);
    }
}
