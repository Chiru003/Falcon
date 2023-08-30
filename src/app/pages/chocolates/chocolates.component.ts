import { Component } from '@angular/core';
import { ChocolatesService } from 'src/app/services/chocolates/chocolates.service';
import { chocolate } from 'src/app/types/chocolates';
import { cardDetail } from 'src/app/types/common';

@Component({
  selector: 'app-chocolates',
  templateUrl: './chocolates.component.html',
  styleUrls: ['./chocolates.component.css']
})
export class ChocolatesComponent {
  cardDetails: cardDetail = {
    numberOfCardsInRow: 4,
    height: 250,
    cardHeaders: [
      "Name", 
      "Brand", 
      "Flavor",
      "Note"
    ]
  };
  mockData: chocolate[] = [];
  constructor(private chocolateService: ChocolatesService){}
  
  ngOnInit() {
    this.mockData = this.chocolateService.getmockData();
  } 
  
  
}