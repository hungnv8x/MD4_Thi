import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {MessageService} from '../../service/message.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  createForm: FormGroup;

  constructor(private bookService: BookService,
              private messageService: MessageService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  create() {
    const data = this.createForm.value;
    this.bookService.create(data).subscribe(res => {
      this.messageService.setMessage('Create new book success');
      this.router.navigate(['books']);
    });
  }
}
