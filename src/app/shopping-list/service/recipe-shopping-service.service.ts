import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeShoppingServiceService {
  addIngredient = new Subject<Ingredient[]>();
  toBeUpdating = new Subject<number>();
  private ingredients: Ingredient[] = [new Ingredient('mango', 2),
  new Ingredient('Banana', 2)
];
  constructor() {
  }
  getIngredient() {
    return this.ingredients.slice();
  }
  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.addIngredient.next(this.ingredients.slice());
  }
  addIngredientfromRecipe(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.addIngredient.next(this.ingredients.slice());
  }
  getSingleIngredient(index: number) {
    const getIngredient = this.ingredients[index];
    return getIngredient;
  }
  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.addIngredient.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    const deleted = this.ingredients.splice(index, 1);
    this.addIngredient.next(this.ingredients.slice());
  }
}
