import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RouteGardService } from '../auth/routegard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipeRoute: Routes = [
    {
        path: '', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [RouteGardService] },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [RouteGardService] }
        ]
    }
];
@NgModule({
imports: [
    RouterModule.forChild(recipeRoute),
],
exports: [RouterModule],
})
export class RecipesRoute {}
