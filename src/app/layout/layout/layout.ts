import { Component } from '@angular/core';
import { Header } from '../../component/header/header';
import { Sidebar } from '../../component/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Header,Sidebar,RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
