import { Injectable } from '@angular/core';
import { menu } from '../../types/common';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor() {}

  menus: menu[] = [
    {
      title: 'Home',
      id: 1,
      link: '/home',
      isActive: false,
    },
    {
      title: 'Books',
      id: 2,
      link: '/books',
      isActive: false,
    },
    {
      title: 'Mobiles',
      id: 3,
      link: '/mobiles',
      isActive: false,
    },
    {
      title:"Cars",
      id:4,
      link:'/cars',
      isActive: false,
    }
  ];
}
