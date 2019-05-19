import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { RecipeShoppingServiceService } from './service/recipe-shopping-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private shoppingService: RecipeShoppingServiceService) {
   }
  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredient();
    this.subscription = this.shoppingService.addIngredient.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  addClickIngredient(addvent: any) {
    this.ingredients.push(addvent);
  }
  getIngredient(index: number) {
    this.shoppingService.toBeUpdating.next(index);
  }
}
