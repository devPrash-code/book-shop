import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  getBooks() {
    return [
      {
        id: 1,
        title: "Rich Dad Poor Dad",
        descTitle: "Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That The Poor And Middle Class Do Not!: (25th Anniversary Edition)",
        author: "Robert T. Kiyosaki",
        imageUrl: "assets/img/books/rich-dad-poor-dad.jpg",
        amount: 700,
        totalamount: 700,
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident assumenda expedita quisquam esse exercitationem maxime maiores, repudiandae totam ab eaque vero laudantium temporibus ipsum magnam harum natus enim omnis delectus sequi repellendus!",
        qty: 1,
      },
      {
        id: 2,
        title: "Ikigai",
        descTitle: "Ikigai: The Japanese secret to a long and happy life",
        author: "Héctor García, Francesc Miralles",
        imageUrl: "assets/img/books/ikigai.jpg",
        amount: 1200,
        totalamount: 1200,
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident assumenda expedita quisquam esse exercitationem maxime maiores, repudiandae totam ab eaque vero laudantium temporibus ipsum magnam harum natus enim omnis delectus sequi repellendus!",
        qty: 1,
      },
      {
        id: 3,
        title: "Do It Today",
        descTitle: "Do It Today: Overcome Procrastination, Improve Productivity",
        author: "Dariux Foroux",
        imageUrl: "assets/img/books/do-it-today.jpg",
        amount: 800,
        totalamount: 800,
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident assumenda expedita quisquam esse exercitationem maxime maiores, repudiandae totam ab eaque vero laudantium temporibus ipsum magnam harum natus enim omnis delectus sequi repellendus!",
        qty: 1,
      },
      {
        id: 4,
        title: "You Can",
        descTitle: "You Can",
        author: "George Matthew Adams",
        imageUrl: "assets/img/books/you-can.jpg",
        amount: 400,
        totalamount: 400,
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident assumenda expedita quisquam esse exercitationem maxime maiores, repudiandae totam ab eaque vero laudantium temporibus ipsum magnam harum natus enim omnis delectus sequi repellendus!",
        qty: 1,
      },
      {
        id: 5,
        title: "Fifty Shades - Grey",
        descTitle: "Grey: Fifty Shades of Grey as told by Christian",
        author: "E L James",
        imageUrl: "assets/img/books/fifty-shades-grey.jpg",
        amount: 293,
        totalamount: 293,
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident assumenda expedita quisquam esse exercitationem maxime maiores, repudiandae totam ab eaque vero laudantium temporibus ipsum magnam harum natus enim omnis delectus sequi repellendus!",
        qty: 1,
      },
      {
        id: 6,
        title: "Fifty Shades - Darker",
        descTitle: "Darker: Fifty Shades Darker as Told by Christian: 5 (Fifty Shades Of Grey Series, 5)",
        author: "E L James",
        imageUrl: "assets/img/books/fifty-shades-darker.jpg",
        amount: 270,
        totalamount: 270,
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident assumenda expedita quisquam esse exercitationem maxime maiores, repudiandae totam ab eaque vero laudantium temporibus ipsum magnam harum natus enim omnis delectus sequi repellendus!",
        qty: 1,
      },
      {
        id: 7,
        title: "Dark Matter",
        descTitle: "Dark Matter: The Most Mind-Blowing And Twisted Thriller Of The Year",
        author: "Blake Crouch",
        imageUrl: "assets/img/books/dark-matter.jpg",
        amount: 320,
        totalamount: 320,
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident assumenda expedita quisquam esse exercitationem maxime maiores, repudiandae totam ab eaque vero laudantium temporibus ipsum magnam harum natus enim omnis delectus sequi repellendus!",
        qty: 1,
      },
    ]
  }

  // creating subjects
  cartDataLength = new Subject<any>();
}
