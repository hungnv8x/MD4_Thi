import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './books/book-list/book-list.component';
import {BookAddComponent} from './books/book-add/book-add.component';
import {BookDetailComponent} from './books/book-detail/book-detail.component';
import {BookDeleteComponent} from './books/book-delete/book-delete.component';
import {BookEditComponent} from './books/book-edit/book-edit.component';


const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent,
  },
  {
    path: 'books/create',
    component: BookAddComponent,
  },
  {
    path: 'books/:id/detail',
    component: BookDetailComponent,
  },
  {
    path: 'books/:id/delete',
    component: BookDeleteComponent,
  },
  {
    path: 'books/:id/edit',
    component: BookEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
