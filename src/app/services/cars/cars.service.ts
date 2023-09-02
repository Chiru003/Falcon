import { Injectable } from '@angular/core';
import { carDetail } from '../../types/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }
  carDetails: carDetail[] = [
    {
      name:"crysta",
      brand:"Innova",
      price:2400000,
      fuel:"Diesel",
      coverFileName:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/9612/1680599962805/front-left-side-47.jpg?tr=w-456",
      description:"Comes with all necessary features to make the drive comfortable.", 

    },
    {
      name:"Jeep campus",
      brand:"jeep",
      price:3200000,
      fuel:"Diesel",
      coverFileName:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Jeep/Compass/10942/1690624094982/front-left-side-47.jpg?tr=w-456",
      description:"Good mileage, good looks, many good internal features."   
    },
    {
      name:"Mahindra scorpio",
      brand:"Mahindra",
      price:2400000,
      fuel:"Diesel",
      coverFileName:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg?tr=w-456",
      description:"Expectations from the new Scorpio N are sky high."   
    },
    {
      name:"Mahindra XU700",
      brand:"Mahindra",
      price:2600000,
      fuel:"Diesel",
      coverFileName:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV700/10797/1690277045969/front-left-side-47.jpg?tr=w-456",
      description:"Long safety list, with 7 airbags."
    },
    {
      name:"Honda Eleate",
      brand:"Honda",
      price:2000000,
      fuel:"Petrol",
      coverFileName:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Honda/Elevate/9533/1686040115808/front-left-side-47.jpg?tr=w-456",
      description:"Ample legroom and headroom for rear seat occupants."
    },
    {
      name:"Tata Altroz",
      brand:"Tata",
      price:1200000,
      fuel:"Petrol",
      coverFileName:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Altroz/10707/1690032362798/front-left-side-47.jpg?tr=w-456",
      description:"Turbo-petrol engine offers enjoyable performance."
    },
    {
      name:"i20",
      brand:"Hyundai",
      price:1200000,
      fuel:"perol",
      coverFileName:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/i20/10108/1684224627482/front-left-side-47.jpg?tr=w-456",
      description:"Rear seat space is impressive."
    }
  ]
 
}

