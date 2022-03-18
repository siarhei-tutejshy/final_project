import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Irecipe {
  idMeal?: number;
  strMeal?: string;
  strCategory?: string;
  strArea?: string;
  strInstructions?: string;
  strIngredient?: any[];
  strMeasure?: any[];
  strMealThumb?: string;
  isAdded?: boolean
}

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private http: HttpClient) {}

  getRecipeById(id: number): Observable<any> {
    return this.http
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .pipe(
        map((data: any) => {
          let recipe = data.meals[0];
          let newRecipe: Irecipe = {
            idMeal: recipe.idMeal,
            strMeal: recipe.strMeal,
            strArea: recipe.strArea,
            strCategory: recipe.strCategory,
            strInstructions: recipe.strInstructions,
            strMealThumb: recipe.strMealThumb,
            strIngredient: [],
            strMeasure: [],
            isAdded:false
          };
          for (const name in recipe) {
            if (name.includes('strIngredient') && recipe[name].trim())
              newRecipe?.strIngredient?.push(recipe[name]);

            if (name.includes('strMeasure') && recipe[name].trim())
              newRecipe?.strMeasure?.push(recipe[name]);
          }
          return newRecipe;
        })
      );
  }
  getRandomRecipe(): Observable<any> {
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .pipe(
      map((data: any) => {
        let recipe = data.meals[0];
        let newRecipe: Irecipe = {
          idMeal: recipe.idMeal,
          strMeal: recipe.strMeal,
          strArea: recipe.strArea,
          strCategory: recipe.strCategory,
          strInstructions: recipe.strInstructions,
          strMealThumb: recipe.strMealThumb,
          strIngredient: [],
          strMeasure: [],
        };
        for (const name in recipe) {
          if (name.includes('strIngredient') && (recipe[name].trim() || null))
            newRecipe?.strIngredient?.push(recipe[name]);

          if (name.includes('strMeasure') && recipe[name].trim())
            newRecipe?.strMeasure?.push(recipe[name]);
        }
        return newRecipe;
      })
    );;
  }
}
