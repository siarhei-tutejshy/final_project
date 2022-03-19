import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Irecipe } from './../services/recipes.service';
import { MyRecipesService } from './../services/my-recipes.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})

export class RecipeFormComponent implements OnInit {

  @Output() close = new EventEmitter<void>();
  form!: FormGroup;

  constructor(private myRecipeService: MyRecipesService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),

      ingredients: new FormArray([
        new FormGroup({
          ingredient: new FormControl(''),
          measure: new FormControl('', Validators.required),
        }),
      ]),
      instructions: new FormControl(''),
    });
  }

  submit() {
    if (this.form.valid) {
      const formData: Irecipe = {
        idMeal: Date.now(),
        strMeal: this.form.value.name,
        strInstructions: this.form.value.instructions,
        strIngredient: [],
        strMeasure: [],
        isAdded: true,
        strMealThumb: '../../assets/pngwing.com.png',
      };

      this.form.value.ingredients.forEach((ingredients: any) => {
        formData.strIngredient?.push(ingredients.ingredient),
          formData.strMeasure?.push(ingredients.measure);
      });
      this.myRecipeService.addRecipe(formData);
      this.form.reset();
    }
    this.close.emit()
  }

  get formData() {
    return <FormArray>this.form.get('ingredients');
  }

  addIngredients():void {if (this.form.valid){
    const control = new FormGroup({
      ingredient: new FormControl(''),
      measure: new FormControl('',Validators.required),
    });

    (this.form.get('ingredients') as FormArray).push(control);}
  }
  clearForm(): void{

    this.form.reset();
  }
}
