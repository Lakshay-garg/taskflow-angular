import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './layout/layout/layout';
import { CommonModule } from '@angular/common';
import { LoginLayout } from './layout/login-layout/login-layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('taskflow-angular');
  isLoggedIn: boolean = false;
}
