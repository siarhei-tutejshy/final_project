import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private recipesService: RecipesService, private router: Router) {}

  ngOnInit(): void {}

  showRandomRecipe(): void {
    let randomId: number;
    this.recipesService.getRandomRecipe().subscribe((recipe) => {
      randomId = +recipe['idMeal'];
      this.router.navigate(['/recipes', randomId]);
    });
  }
}
