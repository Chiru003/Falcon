import { Component, Input } from '@angular/core';
import { cardDetail } from 'src/app/types/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() cards: any = []
  @Input() cardDetails: cardDetail = {
    numberOfCardsInRow: 6,
    height: 200,
    cardHeaders: [],
  } 
}
