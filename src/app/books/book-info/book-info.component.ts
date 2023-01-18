import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/types/Book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent {
  id: any;
  productData: any;
  cartDataLength: number = 0;
  books: Book[] = this.booksService.getBooks();

  constructor(
    private booksService: BooksService,
    private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.productData = this.getSingleBook();
    this.cartDataLengthFunc();
  }

  getSingleBook = () => {
    return this.books.find((obj: any) => obj.id == this.id);
  }

  addToCart() {
    const localCartData = JSON.parse(localStorage.getItem('localCart') || '[]');
    let verifyData = localCartData.find((obj: any) => obj.id == this.id);
    if(!verifyData) {
      const currentBook = this.books.find((obj: any) => obj.id == this.id);
      localCartData.push(currentBook);
      localStorage.setItem('localCart', JSON.stringify(localCartData));
      this.cartDataLengthFunc();
    } else {
      if(verifyData.qty < 10) {
        verifyData.qty += 1;
        verifyData.totalamount += verifyData.amount;
        localStorage.setItem('localCart', JSON.stringify(localCartData));
      } else return alert('You reached your maximum quantity of this product. Please check your cart.');
    }
  }

  cartDataLengthFunc() {
    this.cartDataLength = JSON.parse(localStorage.getItem('localCart') || '[]').length;
    this.booksService.cartDataLength.next(this.cartDataLength);
  }
}
