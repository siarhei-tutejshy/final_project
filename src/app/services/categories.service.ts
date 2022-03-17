import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  fetchCategories(): Observable<any> {
    return this.http.get(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
  }

  fetchAreas(): Observable<any> {
    return this.http.get(
      'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
    );
  }
  filterBy(type: string, name: string): Observable<any> {
    return this.http.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?${type}=${name}`
    );
  }
}
