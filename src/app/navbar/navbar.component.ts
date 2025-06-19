import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent   {

  scrollPosition: number = 0;
  isScrolled:boolean=false;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY || window.pageYOffset;
    
     if (this.scrollPosition >= 100) {
    this.isScrolled = true;
  } else {
    this.isScrolled = false;
    
    
  }
  }


}
