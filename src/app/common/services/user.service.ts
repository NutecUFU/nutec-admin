import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { UserPayload } from '../../core/interfaces/user.interface';

@Injectable()
export class UserService {

  constructor(
    private readonly http: HttpClient
  ) { }

  register(formData: FormData): Observable<UserPayload> {
    return this.http.post<UserPayload>(environment.endpoints.users, formData);
  }
}
