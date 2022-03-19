import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { CategoriesService } from '../services/categories.service';

@Component({
    selector: 'app-categories-page',
    templateUrl: './categories-page.component.html',
    styleUrls: ['./categories-page.component.css'],
})

export class CategoriesPageComponent implements OnInit {
    categories: Array<any> = [];
    pageName:string = ''

    constructor(
        private categoriesService: CategoriesService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.url.subscribe((urlSegment: UrlSegment[]) => {
            this.pageName = urlSegment[0].path
            if (urlSegment[0].path === 'areas') {
                this.categoriesService.fetchAreas()
                    .subscribe((cat) => {this.categories = cat.meals});
            } else if (urlSegment[0].path === 'categories') {
                this.categoriesService.fetchCategories()
                .subscribe((cat) => {this.categories = cat.categories});
            }
        });
    }
}
