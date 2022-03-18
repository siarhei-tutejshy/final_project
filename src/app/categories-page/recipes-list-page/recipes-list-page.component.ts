
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-recipes-list-page',
  templateUrl: './recipes-list-page.component.html',
  styleUrls: ['./recipes-list-page.component.css']
})
export class RecipesListPageComponent implements OnInit {

  recipesList: Array<any> = [];
  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe((urlSegment: UrlSegment[]) => {
      let type = urlSegment[0].path.slice(0,1)
      this.categoriesService.filterBy(type, urlSegment[1].path).subscribe(data => {
        this.recipesList = data.meals
        console.log(this.recipesList)
      })
        })
    };


}


