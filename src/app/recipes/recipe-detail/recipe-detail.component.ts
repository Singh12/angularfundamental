import { Component, OnInit, Input } from '@angular/core';
import { RecipeServiceService } from '../service/recipe-service.service';
import { Ingredient } from '../../shared/ingredient.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  detailsRecipes: {};
  id: number;
  constructor(private recipeService: RecipeServiceService, private route: Router, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params.subscribe(
      (pram: Params) => {
        this.id = +pram.id;
        this.detailsRecipes = this.recipeService.getSingleRecipe(this.id);
      }
    );
    this.recipeService.recipesChanged.subscribe(
      (recipe) => {
        this.router.params.subscribe(
          (pram: Params) => {
            this.id = +pram.id;
            this.detailsRecipes = this.recipeService.getSingleRecipe(this.id);
          }
        );
      }
    );
  }
  addShoppingList() {
    this.recipeService.addIngredients(this.detailsRecipes['ingrdient']);
  }
  deleteRecipe() {
    this.recipeService.deleteSingleRecipe(this.id);
    this.route.navigateByUrl('/recipes');
  }
}
