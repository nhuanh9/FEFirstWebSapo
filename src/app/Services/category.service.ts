import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../model/House';
import {Category} from '../model/category';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL = environment.apiUrl + '/category';

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_URL);
  }

  detail(id: string): Observable<Category> {
    return this.http.get<Category>(this.API_URL + `/${id}`);
  }
}
