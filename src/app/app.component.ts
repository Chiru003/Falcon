import { Component } from '@angular/core';
import { menu } from '../app/types/common';
import { NavigationStart, Router } from '@angular/router';
import { GeneralService } from './services/general/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'Falcon';
  menus: menu[] = []

  constructor(private router: Router, private general: GeneralService) {
    this.menus = this.general.menus;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.menus.forEach((menu) => {
          if (
            menu.link === event.url ||
            (event.url === '/' && menu.link === '/home')
          ) {
            menu.isActive = true;
          } else {
            menu.isActive = false;
          }
        });
      }
    });
  }

  ngOnInit() {}
  
}
