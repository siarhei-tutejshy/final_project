import { Injectable } from '@angular/core';
import { Irecipe } from './recipes.service';

@Injectable({
    providedIn: 'root',
})
export class MyRecipesService {
    myRecipes: Irecipe[] = JSON.parse(localStorage.getItem('myRecipes')!) || [];

    constructor() {}

    addRecipe(recipe: Object) {
        this.myRecipes.push(recipe);
        localStorage.setItem('myRecipes', JSON.stringify(this.myRecipes));
    }
    removeRecipe(id: number) {
        this.myRecipes = this.myRecipes.filter((r) => r.idMeal !== id);
        localStorage.setItem('myRecipes', JSON.stringify(this.myRecipes));
    }
    getRecipeById(id: number) {
        return this.myRecipes.find((r) => +r.idMeal! === id);
    }
}
