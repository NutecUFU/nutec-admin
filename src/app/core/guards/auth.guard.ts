import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { getToken } from 'src/app/common/utils/auth';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}

canActivateChild(
  childRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const url = state.url;

    return this.checkLogin(url);
  }

  private checkLogin(url: string): boolean {
    if (getToken() !== '') {
      return true;
    }

    this.authService.setPreviousUrl = url;

    this.router.navigate(['/login']);

    return false;
  }
}
