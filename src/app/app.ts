import { Component } from '@angular/core';
import { MainPage } from './main-page/main-page';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar, MainPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
