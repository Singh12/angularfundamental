import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ShoppingListComponent, ShoppingEditComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: ShoppingListComponent}])
    ],
    exports: [RouterModule]
})
export class ShoppingListModule {}
