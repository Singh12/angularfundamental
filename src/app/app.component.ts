import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipes';
  recipeList = 'recipe';
  constructor() {}
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCwQuy8Vb-b5j8t74n_SJP_MCGbfatibbI',
      authDomain: 'recipe-4fc9a.firebaseapp.com'
    });
  }
  displayRecipe(recipeDetails: string) {
    this.recipeList = recipeDetails;
  }
}

