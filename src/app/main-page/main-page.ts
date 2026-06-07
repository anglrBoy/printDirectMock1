import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage {
  windowWidth = window.innerWidth;

  @HostListener('window:resize')
  onResize() {
    this.windowWidth = window.innerWidth;
  }
}
