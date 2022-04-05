import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../service/book.service';
import {MessageService} from '../../service/message.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book = [];
  const;
  id = this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
   this.getBookById(this.id);
  }

  delete() {
    if (confirm('Are you sure?')) {
      this.bookService.delete(this.id).subscribe(res => {
        this.messageService.setMessage('Delete book success!');
        this.router.navigate(['books']);
      });
    }
  }

  getBookById(id) {
    this.bookService.getBookById(id).subscribe(res => {
      this.book = res;
    });
  }
}
