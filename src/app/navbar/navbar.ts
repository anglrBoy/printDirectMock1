import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  activeTheme = 'slate';

  constructor() {
    document.body.setAttribute('data-theme', this.activeTheme);
  }

  setTheme(theme: string, event: Event): void {
    event.preventDefault();
    this.activeTheme = theme;
    document.body.setAttribute('data-theme', theme);
  }
}
