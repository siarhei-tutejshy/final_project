import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { IRecipes } from '../services/recipes-service.service';
export interface IRecipes {
  name: string,
  id?: number,
  thumbnail_url: string
}
@Component({
  selector: 'app-div',
  templateUrl: './app-div.component.html',
  styleUrls: ['./app-div.component.css']
})
export class AppDivComponent implements OnInit {
  recipes: IRecipes[] = [];
   headers : HttpHeaders= new HttpHeaders()

  // .set('x-rapidapi-host', 'themealdb.p.rapidapi.com')
  // .set('x-api-key', '1');


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://www.themealdb.com/api/json/v1/1/categories.php',  {
    // headers: this.headers
    })
    .subscribe(
      (response: any) => {
console.log(response)


   })
  }

}
