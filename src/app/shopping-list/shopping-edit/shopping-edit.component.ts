import { Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeShoppingServiceService } from '../service/recipe-shopping-service.service';
import { NgForm } from '@angular/forms';
import { Subscription, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  ingredient: Ingredient[];
  toBeadded = false;
  subscription: Subscription;
  index: number;
  @ViewChild('f') ngForm: NgForm;
  constructor(private ingredientService: RecipeShoppingServiceService) { }
  ngOnInit() {
    this.subscription = this.ingredientService.toBeUpdating.subscribe(
      (index: number) => {
       this.index = index;
       const formData = this.ingredientService.getSingleIngredient(index);
       this.ngForm.setValue({
         'name': formData.name,
         'amount': formData.amount
       });
       this.toBeadded = true;
      }
    );
  }
  ingredientForm() {
    if (!this.toBeadded) {
      this.ingredientService.addNewIngredient(new Ingredient(this.ngForm.value.name,
        this.ngForm.value.amount));
      this.ngForm.reset();
    } else {
      this.ingredientService.updateIngredient(this.index, new Ingredient(this.ngForm.value.name,
        this.ngForm.value.amount));
    }
  }
  onClickDelete() {
    this.ingredientService.deleteIngredient(this.index);
    this.toBeadded = false;
    this.ngForm.reset();
  }
  onClickClear() {
    this.toBeadded = false;
    this.ngForm.reset();
  }
ngOnDestroy() {
 this.subscription.unsubscribe();
}
}
