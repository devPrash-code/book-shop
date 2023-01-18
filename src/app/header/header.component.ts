import { Component } from '@angular/core';
import { BooksService } from '../books/books.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  cartDataCount:number = 0;

  constructor(private BookService: BooksService) {
    this.BookService.cartDataLength.subscribe((count) => {
      this.cartDataCount = count;
    })
  }

  ngOnInit(): void {
  }
}
