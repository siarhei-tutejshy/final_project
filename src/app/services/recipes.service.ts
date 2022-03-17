import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Irecipe {

}

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private http: HttpClient) {}

  getRecipeById(id: number): Observable<any> {
    return this.http.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }
}
