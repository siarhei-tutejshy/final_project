import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { RecipesListPageComponent } from './categories-page/recipes-list-page/recipes-list-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'recipes/:id', component: RecipesPageComponent },
  { path: 'categories', component: CategoriesPageComponent },
  { path: 'areas', component: CategoriesPageComponent },
  { path: 'categories/:category', component: RecipesListPageComponent },
  { path: 'areas/:category', component: RecipesListPageComponent },
  {path: '**/**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
