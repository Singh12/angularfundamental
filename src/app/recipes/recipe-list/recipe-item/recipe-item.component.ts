import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() index: number;
@Input() recipe: Recipe;
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  singleRecipe() {
    this.router.navigate([this.index], {relativeTo: this.route});
  }
  ngOnInit() {
  }

}
