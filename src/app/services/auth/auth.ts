import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { UserCredentials } from '../../models/auth';
import { platformBrowser } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private userSignal = signal(false);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedUser = localStorage.getItem('temp_user');
      if (savedUser) this.userSignal.set(true);
    }
  }

  isAuthenticated = computed(() => this.userSignal());

  login(credentials: UserCredentials) {
    if (credentials.email == 'lgarg@gmail.com' && credentials.password == '12345') {
      this.userSignal.set(true);
      const tempUser = { name: 'Lakshay', email: 'lgarg@gmail.com' };
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('temp_user', JSON.stringify(tempUser));
      }
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.userSignal.set(false);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('temp_user');
    }
  }
}
