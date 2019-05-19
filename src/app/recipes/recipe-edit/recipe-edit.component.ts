import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, PatternValidator } from '@angular/forms';
import { RecipeServiceService } from '../service/recipe-service.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
editMode = false;
recipeForm: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute, private shoppingService: RecipeServiceService ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
      }
    );
    this.initForm();
  }
  onSubmit() {
    if (this.editMode) {
      this.shoppingService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.shoppingService.insertNewRecipe(this.recipeForm.value);
    }
    this.onCancle();
  }
  private initForm() {
    let recipeName = '';
    let recipeImage = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);
    if (this.editMode) {
      const recipeGet = this.shoppingService.getSingleRecipe(this.id);
      recipeName = recipeGet.name;
      recipeImage = recipeGet.imagePath;
      recipeDescription = recipeGet.description;
      if (recipeGet['ingredients']) {
        for (const ingredient of recipeGet.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[+]?[1-9]\d*\.?[0]*$/)])
            })
          );
        }
      }
    }
      this.recipeForm = new FormGroup({
        'name': new FormControl(recipeName, Validators.required),
        'imagePath': new FormControl(recipeImage, Validators.required),
        'description': new FormControl(recipeDescription, Validators.required),
        'ingredients': recipeIngredients
      });
      console.log(this.recipeForm.value);
  }
  onAddIngredient(even: any) {
    console.log(this.recipeForm.get('ingredients'));
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[+]?[1-9]\d*\.?[0]*$/)])
      })
    );
  }
onDeleteIngredient(index: number) {
  console.log(index);
  (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  clearField() {
    this.recipeForm.reset();
    console.log(this.recipeForm.get('ingredients').value);
    this.recipeForm.get('ingredients').value.forEach(index => {
      (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    });
  }
  onCancle() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
