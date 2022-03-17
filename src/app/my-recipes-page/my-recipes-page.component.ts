import { Component, OnInit } from '@angular/core';
import { MyRecipesService } from './../services/my-recipes.service';

@Component({
  selector: 'app-my-recipes-page',
  templateUrl: './my-recipes-page.component.html',
  styleUrls: ['./my-recipes-page.component.css']
})
export class MyRecipesPageComponent implements OnInit {
  recipesList: any[] = []

  constructor(private myRecipesService:MyRecipesService) { }

  ngOnInit(): void {
    this.recipesList = this.myRecipesService.myRecipes
    console.log(this.recipesList)
  }
  removeRecipe(id:any){
    this.myRecipesService.removeRecipe(+id)
    this.recipesList = this.myRecipesService.myRecipes
  }

}