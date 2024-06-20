import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanLoadFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { LoginService } from '../login/login.service';

export const loginGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  if (loginService.isLoggedIn) {
    return true;
  } else {
    return router.createUrlTree(['/login']);
  }
};

export const canLoadGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): boolean | UrlTree => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  if (loginService.isLoggedIn) {
    return true;
  } else {
    return router.createUrlTree(['/login']);
  }
};
