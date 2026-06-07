import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  activeTheme = 'slate';
  darkMode = false;

  private variants: Record<string, { light: string; dark: string }> = {
    'purple': { light: 'dark-purple', dark: 'dark' },
    'arctic': { light: 'arctic',      dark: 'dark-arctic' },
    'slate':  { light: 'slate',       dark: 'dark-slate' },
  };

  private baseMap: Record<string, string> = {
    'dark-purple': 'purple',
    'dark':        'purple',
    'arctic':      'arctic',
    'dark-arctic': 'arctic',
    'slate':       'slate',
    'dark-slate':  'slate',
  };

  constructor() {
    document.body.setAttribute('data-theme', this.activeTheme);
  }

  setTheme(base: string, event: Event): void {
    event.preventDefault();
    const variant = this.variants[base];
    this.activeTheme = this.darkMode ? variant.dark : variant.light;
    document.body.setAttribute('data-theme', this.activeTheme);
  }

  isActiveBase(base: string): boolean {
    const variant = this.variants[base];
    return this.activeTheme === variant.light || this.activeTheme === variant.dark;
  }

  toggleDark(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.darkMode = !this.darkMode;
    const base = this.baseMap[this.activeTheme] ?? 'slate';
    const variant = this.variants[base];
    this.activeTheme = this.darkMode ? variant.dark : variant.light;
    document.body.setAttribute('data-theme', this.activeTheme);
  }
}
