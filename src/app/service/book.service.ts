import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(environment.api_url + 'books');
  }

  create(data): Observable<any> {
    return this.http.post(environment.api_url + 'books', data);
  }

  getBookById(id): Observable<any> {
    return this.http.get(environment.api_url + `books/${id}`);
  }

  delete(id): Observable<any> {
    return this.http.delete(environment.api_url + `books/${id}`);
  }

  update(id, data) {
    return this.http.put(environment.api_url + `books/${id}`, data);
  }
}
