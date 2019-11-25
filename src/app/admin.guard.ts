import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor() {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {

    const islogin = sessionStorage.getItem('isLogin');

    // const isRemembered = localStorage.getItem('OkRememberedMe').toString();

    // console.log('login', islogin);
    // console.log('isRemembered', isRemembered);

    if (islogin === 'true') {
      return true;
    } else { return false; }
  }
}
