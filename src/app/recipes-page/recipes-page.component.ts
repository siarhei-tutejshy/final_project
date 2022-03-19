import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, UrlSegment } from '@angular/router';
import { MyRecipesService } from '../services/my-recipes.service';
import { Irecipe, RecipesService } from './../services/recipes.service';

@Component({
    selector: 'app-recipes-page',
    templateUrl: './recipes-page.component.html',
    styleUrls: ['./recipes-page.component.css'],
})
export class RecipesPageComponent implements OnInit {
    recipe: Irecipe = {};
    constructor(
        private recipesService: RecipesService,
        private myRecipesService: MyRecipesService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.route.url.subscribe((urlSegment: UrlSegment[]) => {
                if (urlSegment[0].path === 'my_recipes') {
                    this.recipe =
                        this.myRecipesService.getRecipeById(+params['id']) ||
                        {};
                } else if (urlSegment[0].path === 'recipes') {
                    this.recipesService
                        .getRecipeById(+params['id'])
                        .subscribe((data) => {
                            this.recipe = data;
                        });
                }
            });
        });
    }

    addRecipe() {
        this.recipe.isAdded = true;
        this.myRecipesService.addRecipe(this.recipe);
    }

    removeRecipe() {
        this.myRecipesService.removeRecipe(this.recipe.idMeal!);
        this.recipe.isAdded = false;
    }
}
