import { Component } from '@angular/core';
import { ChocolatesService } from 'src/app/services/chocolates/chocolates.service';
import { chocolate } from 'src/app/types/chocolates';

@Component({
  selector: 'app-chocolates',
  templateUrl: './chocolates.component.html',
  styleUrls: ['./chocolates.component.css']
})
export class ChocolatesComponent {
  cardDetails: any;
  mockData: any;
  constructor(private chocolateService: ChocolatesService){}
  
  ngOnInit() {
    this.cardDetails = this.chocolateService.getcardDetails();
    this.mockData = this.chocolateService.getmockData();
  } 
  
  
}