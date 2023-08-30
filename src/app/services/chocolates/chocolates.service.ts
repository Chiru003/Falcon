import { Injectable } from '@angular/core';
import { chocolate } from 'src/app/types/chocolates';
import { cardDetail } from 'src/app/types/common';

@Injectable({
  providedIn: 'root'
})
export class ChocolatesService {
  mockData: chocolate[] = [
    {
      name: "Bournville",
      brand: "Cadbury",
      flavor: "Fruit and Nut",
      note: "Delicious",
      coverFileName: "https://m.media-amazon.com/images/I/61zWILLZ8HL._SL1100_.jpg"
    },
    {
      name: " Dairymilk Silk",
      brand: "Cadbury",
      flavor: "Chocolate",
      note: "Tasty",
      coverFileName: "https://m.media-amazon.com/images/I/51wQg3GGwwL._SL1000_.jpg"
    },
    {
      name: "Dark Chocolate",
      brand: "Amul",
      flavor: "Dark Chocolate",
      note: "Decadent",
      coverFileName: "https://m.media-amazon.com/images/I/41XQL-1sVTS.jpg"
    },
    {
      name: "Rocky Road",
      brand: "Fabelle",
      flavor: "Milk Chocolate",
      note: "Yummy",
      coverFileName: "https://m.media-amazon.com/images/I/41r8wgBn0vL.jpg"
    },
    {
      name: "Choco Deck",
      brand: "Fabelle",
      flavor: "Chocolate",
      note: "Delight",
      coverFileName: "https://m.media-amazon.com/images/I/71CsHFkB7yL._SL1500_.jpg"
    },
    {
      name: "Chocominis",
      brand: "Amul",
      flavor: "Chocolate",
      note: "Tasty",
      coverFileName: "https://m.media-amazon.com/images/I/71KZQkANkFS._SX679_.jpg"
    },
    {
      name: "Twilight Twist",
      brand: "Amul",
      flavor: "Chocolate",
      note: "Luscious",
      coverFileName: "https://m.media-amazon.com/images/I/41EDA8+SbXL.jpg"
    },
    {
      name: "Munch",
      brand: "Nestle",
      flavor: "Chocolate",
      note: "Crunchy",
      coverFileName: "https://m.media-amazon.com/images/I/71uHoLv15iL._SX679_.jpg"
    },
    {
      name: "Exotic Dark",
      brand: "Hershey's",
      flavor: "Dark Chocolate",
      note: "Tempting",
      coverFileName: "https://m.media-amazon.com/images/I/61kAIDQZvWS._SX679_.jpg"
    },
    {
      name: "Ferrero Rocher",
      brand: "Ferrero",
      flavor: "Chocolate",
      note: "Rich",
      coverFileName: "https://m.media-amazon.com/images/I/61iWDUgz42L._SX679_.jpg"
    },
    {
      name: "Kisses",
      brand: "Hershey's",
      flavor: "Chocolate",
      note: "Mouth watering",
      coverFileName: "https://m.media-amazon.com/images/I/512DJzwos7L._SL1000_.jpg"
    },
    {
      name: "Fuse Bite",
      brand: "Cadbury",
      flavor: "Chocolate",
      note: "Exquisite",
      coverFileName: "https://m.media-amazon.com/images/I/713JP56Ox0L._SL1500_.jpg"
    },
    {
      name: "Gems",
      brand: "Cadbury",
      flavor: "Chocolate",
      note: "Chocolaty",
      coverFileName: "https://m.media-amazon.com/images/I/71KW8HfV3KL._SX679_.jpg"
    },
    {
      name: "5 Star",
      brand: "Cadbury",
      flavor: "Chocolate",
      note: "Delight",
      coverFileName: "https://m.media-amazon.com/images/I/51nx7CevGJL._SL1001_.jpg"
    },
    {
      name: "Perk",
      brand: "Cadbury",
      flavor: "Chocolate",
      note: "Divine",
      coverFileName: "https://m.media-amazon.com/images/I/81MOG5D3HYL._SL1500_.jpg"
    },
    {
      name: "Kit Kat",
      brand: "Nestle",
      flavor: "Chocolate",
      note: "Crunchy",
      coverFileName: "https://m.media-amazon.com/images/I/7168iTpu3fL._SL1500_.jpg"
    },
    {
      name: "Almondo",
      brand: "Amul",
      flavor: "Chocolate",
      note: "Tasty",
      coverFileName: "https://m.media-amazon.com/images/I/51MQ4kJbjkS.jpg"
    },
    {
      name: "Nutties",
      brand: "Cadbury",
      flavor: "Chocolate",
      note: "Tempting",
      coverFileName: "https://m.media-amazon.com/images/I/51j0vT8LhxL._SX679_.jpg"
    }
  ]
  getmockData(){
    return this.mockData;
  }
}
