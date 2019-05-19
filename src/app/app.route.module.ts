import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';


import { HomepageComponent } from './core/homepage/homepage.component';
const recipeRoute: Routes = [
    {path: '', component: HomepageComponent, pathMatch: 'full'},
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipeModule'},
    { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' },
];
@NgModule({
    imports: [RouterModule.forRoot(recipeRoute, { preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoute {}
