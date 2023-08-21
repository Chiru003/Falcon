import { Component } from '@angular/core';
import { BooksService } from 'src/app/services/books/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  books: any = []

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService.getAllBooks().subscribe((data) => {
      this.books = data;
    })
  }
}
