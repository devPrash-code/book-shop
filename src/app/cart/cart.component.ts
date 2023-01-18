import { Component } from '@angular/core';
import { BooksService } from '../books/books.service';
import { Book } from '../types/Book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  allBooks: Book[] = [];
  cartData: any = [];
  totalCartProductAmount: number = 0;
  cartDataLength: number = 0;

  constructor(private BookService: BooksService) {}

  ngOnInit(): void {
    this.cartDetailsFunc();
    this.CartProductAmount();
    this.cartDataLengthFunc();
    this.allBooks = this.BookService.getBooks();
  }

  cartDetailsFunc() {
    this.cartData = JSON.parse(localStorage.getItem('localCart') || '[]');
  }

  CartProductAmount() {
    this.totalCartProductAmount = 0;
    this.cartData.forEach((amt: any) => {
      this.totalCartProductAmount += amt.totalamount;
    });
  }

  removeBook(book: any) {
    const localCart = JSON.parse(localStorage.getItem('localCart') || '[]');
    const currentIndex = localCart.findIndex((obj: any) => obj.id == book.id);
    delete localCart[currentIndex];
    this.cartData = localCart.filter((obj: any) => obj != null);
    localStorage.setItem('localCart', JSON.stringify(this.cartData));
    this.CartProductAmount();
    this.cartDataLengthFunc();
  }

  cartDataLengthFunc() {
    this.cartDataLength = JSON.parse(localStorage.getItem('localCart') || '[]').length;
    this.BookService.cartDataLength.next(this.cartDataLength);
  }

  inc(book: any) {
    if(book.qty < 10) {
      this.cartData.find((obj: any) => obj.id == book.id).qty += 1;
      this.cartData
        .find((obj: any) => obj.id == book.id).totalamount = 
          book.totalamount + this.allBooks.find((obj: any) => obj.id == book.id)?.amount;
      localStorage.setItem('localCart', JSON.stringify(this.cartData));
    } else {
      alert("You reached your limit.");
    }
    this.CartProductAmount();
  }

  dec(book: any) {
    let bookAmount = this.allBooks.find((obj: any) => obj.id == book.id)?.amount;
    if(book.qty > 1) {
      this.cartData.find((obj: any) => obj.id == book.id).qty -= 1;
      this.cartData.find((obj: any) => obj.id == book.id).totalamount = book.totalamount - (bookAmount || 0);
      localStorage.setItem('localCart', JSON.stringify(this.cartData));
    } else {
      this.removeBook(book);
    }
    this.CartProductAmount();
  }
}
