import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {count} from 'rxjs/operators';
import {MessageService} from '../../service/message.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books = [];
  count: number;
  message: string;
  constructor(private bookService: BookService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.getAll();
    this.message = this.messageService.message;
  }

  getAll() {
    this.bookService.getAll().subscribe(res => {
      this.books = res;
      this.count = this.books.length;
    });
  }

}
