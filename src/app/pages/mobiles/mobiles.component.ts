import { Component } from '@angular/core';
import { cardDetail } from 'src/app/types/common';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {
  cardDetails: cardDetail = {
    numberOfCardsInRow: 6,
    height: 220,
    cardHeaders: [
      "Name",
      "Brand",
      "Price"
    ]
  }
  mockData: any = [
    {
      name: "iPhone 14 pro",
      price: 123000,
      brand: "Apple",
      coverFileName: "https://m.media-amazon.com/images/I/31irWzsdLsL._SY445_SX342_QL70_FMwebp_.jpg"
    },
    {
      name: "11R",
      price: 46000,
      brand: "OnePlus",
      coverFileName: "https://m.media-amazon.com/images/I/61amb0CfMGL._AC_UY218_.jpg"
    }
  ]
}
