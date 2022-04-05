import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from '../../service/message.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  editForm: FormGroup;
  id = this.route.snapshot.paramMap.get('id');

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {

    this.bookService.getBookById(this.id).subscribe(res => {
      this.editForm = this.fb.group({
        title: [res.title, [Validators.required]],
        author: [res.author, [Validators.required]],
        description: [res.description, [Validators.required]]
      });
    });
  }

  update() {
    const data = this.editForm.value;
    this.bookService.update(this.id, data).subscribe(res => {
      this.messageService.setMessage('Update book success');
      this.router.navigate(['books']);
    });
  }
}
