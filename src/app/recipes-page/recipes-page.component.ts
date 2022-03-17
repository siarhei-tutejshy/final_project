import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, UrlSegment } from '@angular/router';
import { MyRecipesService } from '../services/my-recipes.service';
import { RecipesService } from './../services/recipes.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css'],
})
export class RecipesPageComponent implements OnInit {
  recipe: Object = {};
  constructor(
    private recipesService: RecipesService,
    private myRecipesService: MyRecipesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      console.log(params)
      this.route.url.subscribe((urlSegment: UrlSegment[]) => {
        if (urlSegment[0].path === 'my_recipes') {
          this.recipe =  this.myRecipesService.getRecipeById(+params['id'])

        }

    })
      this.recipesService.getRecipeById(+params['id']).subscribe((data) => {
        this.recipe = data.meals[0];
      });
    });
  }
  addRecipe() {
    console.log(this.recipe);
    this.myRecipesService.addRecipe(this.recipe);
  }
}
