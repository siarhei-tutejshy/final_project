import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { CategoriesService } from './services/categories.service';
import { RecipesListPageComponent } from './categories-page/recipes-list-page/recipes-list-page.component';
import { RecipesService } from './services/recipes.service';
import { MyRecipesService } from './services/my-recipes.service';
import { MyRecipesPageComponent } from './my-recipes-page/my-recipes-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    RecipesPageComponent,
    CategoriesPageComponent,
    RecipesListPageComponent,
    MyRecipesPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CategoriesService, RecipesService, MyRecipesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
