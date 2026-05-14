import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth/auth';
import { UserCredentials } from '../../models/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // username: string = '';
  // password: string = '';
  username = signal('');
  password = signal('');
  authService = inject(Auth);
  router = inject(Router);

  submit() {
    console.log('hii')
    const credentials: UserCredentials = {
      email: this.username(),
      password: this.password(),
    };
    const loggedIn = this.authService.login(credentials);
    if (loggedIn) {
      this.router.navigate(['/auth/dashboard']);
    }else{
      this.router.navigate(['login'])
    }
  }
}
