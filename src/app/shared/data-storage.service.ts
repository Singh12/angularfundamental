import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RecipeServiceService } from '../recipes/service/recipe-service.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AuthServices } from '../auth/auth.service';
import { HttpClient, HttpParams, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataStorageService {
constructor(private http: HttpClient, private recipeService: RecipeServiceService, private authToken: AuthServices) { }
// function to save data

saveRecipe() {
  //  const params = new HttpParams().set('auth', this.authToken.getAuthToken());
        // return this.http.put('https://recipe-4fc9a.firebaseio.com/recipe.json', this.recipeService.getRecipe(), {
        //     observe: 'body',
        //     params});
      //  const httpHeader = new HttpHeaders().set('auyth', 'njbvjyuvyu'); This is one way to setup
        const requests = new HttpRequest('PUT', 'https://recipe-4fc9a.firebaseio.com/recipe.json', this.recipeService.getRecipe(), {reportProgress: true});
        // Object of type 0 sent event
        // Object of type 1 upload progress
        // type 3 download
        return this.http.request(requests);
}
getRecipe() {
    const token = this.authToken.getAuthToken();
    // We can pass multiple argument
this.http.get<Recipe[]>('https://recipe-4fc9a.firebaseio.com/recipe.json', {
// Below are to optional behavior if response type is not json then change it text
observe: 'body',
responseType: 'json' // text,blob,or file anytype
}).pipe(map((recipes: Recipe[]) => {
            recipes.forEach(recipe => {
                if (!recipe['ingredients']) {
                    recipe['ingredients'] = [];
                }
            });
           return recipes;
        })).subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipe(recipes);
            }
        );
}
}
