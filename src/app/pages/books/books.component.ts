import { Component } from '@angular/core';
import { BooksService } from 'src/app/services/books/books.service';
import { book } from 'src/app/types/books';
import { cardDetail } from 'src/app/types/common';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  books: book[] = []
  cardDetails: cardDetail = {
    numberOfCardsInRow: 6,
    height: 220,
    cardHeaders: [
      "Price",
      "Author",
      "Category"
    ]
  }
  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService.getAllBooks().subscribe((data: any) => {
      this.books = data;
      this.books.forEach((book: any) => {
        // adding the domain name cuz api response not giving the complete url of the image
        book.coverFileName = "https://bookcart.azurewebsites.net/upload/" + book.coverFileName
      });
    })
  }
}
  