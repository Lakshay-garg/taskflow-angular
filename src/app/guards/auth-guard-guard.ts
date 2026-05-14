import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth/auth';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {

  const platformId = inject(PLATFORM_ID);

  // Don't run auth checks on the server — let the browser decide after hydration
  if (!isPlatformBrowser(platformId)) {
    return true;
  }
  
  const authService = inject(Auth)
  const router = inject(Router);

  return authService.isAuthenticated() ? true : router.createUrlTree(['/login']);
};
