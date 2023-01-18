import { Component, Input } from '@angular/core';
import { Book } from '../../types/Book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book: Book = {} as Book;
  cartDataLength: number = 0;
  allBooks: Book[] = [];

  constructor(private BookService: BooksService) {}

  ngOnInit(): void {
    this.cartDataLengthFunc();
    this.allBooks = this.BookService.getBooks();
  }

  // adding products in the local storage
  addToCart(productCategory: Book) {
    let cartData = JSON.parse(localStorage.getItem("localCart") || "[]");
    let cartProduct = cartData.find((obj: any) => obj.id === productCategory.id);
    if(cartProduct) {
      if(cartProduct.qty < 10) {
        cartProduct.qty += 1;
        cartProduct.totalamount += cartProduct.amount;
        localStorage.setItem("localCart", JSON.stringify(cartData));
        alert("Your product quantity is increased.");
      } else {
        alert('Your product is already added to the cart with the maximum limit. Please check your cart.');
      }
    } else {
      cartData.push(productCategory);
      localStorage.setItem("localCart", JSON.stringify(cartData));
    }
    this.cartDataLengthFunc();
  }

  cartDataLengthFunc() {
    this.cartDataLength = JSON.parse(localStorage.getItem('localCart') || '[]').length;
    this.BookService.cartDataLength.next(this.cartDataLength);
  }
}