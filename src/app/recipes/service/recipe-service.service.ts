import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeShoppingServiceService } from '../../shopping-list/service/recipe-shopping-service.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeServiceService {
  recipesChanged = new Subject<Recipe[]>();
private recipes: Recipe[] = [
  new Recipe('Demo Recipe2',
  'Demo Recipe Description',
  'https://i.pinimg.com/originals/0c/06/21/0c0621a1944625faf19503d57bb8f2df.jpg',
    [new Ingredient('meat', 1), new Ingredient('meat', 1), new Ingredient('meat', 1)]
  ),
  new Recipe('Demo Recipe3', 'Demo Recipe Description', 'https://i.pinimg.com/originals/0c/06/21/0c0621a1944625faf19503d57bb8f2df.jpg', [new Ingredient('bread', 1)]),
  ];
  constructor(private ingrService: RecipeShoppingServiceService) { }
  getRecipe() {
    return this.recipes.slice();
  }
  setRecipe(recipe: Recipe[]) {
    console.log(recipe);
    this.recipes = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  addIngredients(ingredient: Ingredient[]) {
   this.ingrService.addIngredientfromRecipe(ingredient);
  }
  getSingleRecipe(id) {
    return this.recipes[id];
  }
  deleteSingleRecipe(id) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes);
  }
  updateRecipe(id: number, recipe: Recipe) {
    // console.log(recipe);
   // const updatedRecipe = this.recipes.splice(id, 1, recipe);
   this.recipes[id] = recipe;
   this.recipesChanged.next(this.recipes);
  }
  insertNewRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes);
  }
}
