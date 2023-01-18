import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [BooksComponent, BookComponent, BookInfoComponent],
  providers: [BooksService],
  imports: [CommonModule, AppRoutingModule],
  exports: [BooksComponent]
})
export class BooksModule { }
