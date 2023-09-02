import { Component } from '@angular/core';
import { carDetail } from 'src/app/types/cars';
import { CarsService } from 'src/app/services/cars/cars.service';
import { cardDetail } from 'src/app/types/common';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CarsService]
})

export class CarsComponent {

  carDetails: carDetail [] = []
  cardDetails: cardDetail = {
    numberOfCardsInRow: 4,
    height: 220,
    cardHeaders: [
      "Name",
      "Brand",
      "Price",
      "Fuel",
      "Description"
    ]
   
  }
  constructor(private carService:CarsService){
   
  }
  ngOnInit(){
    this.carDetails = this.carService.carDetails
}

}

