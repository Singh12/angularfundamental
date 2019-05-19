import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServiceService } from '../service/recipe-service.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeServiceService) {
    this.recipes = recipeService.getRecipe();
    recipeService.recipesChanged.subscribe(
      (recipe: Recipe[]) => {
        this.recipes = recipe;
      }
    );
  }
  ngOnInit() {
  }
}
