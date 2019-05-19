import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { AppRoute } from '../app.route.module';
import { CommonModule } from '@angular/common';
import { RecipeShoppingServiceService } from '../shopping-list/service/recipe-shopping-service.service';
import { RecipeServiceService } from '../recipes/service/recipe-service.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthServices } from '../auth/auth.service';
import { RouteGardService } from '../auth/routegard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptors } from '../shared/auth.Interceptors';
import { LoginInterCeptors } from '../shared/login.Interceptors';



@NgModule({
    declarations: [
        HomepageComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        AppRoute
    ],
    exports: [AppRoute, HeaderComponent],
    providers: [RecipeShoppingServiceService, RecipeServiceService, DataStorageService, AuthServices, RouteGardService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptors, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoginInterCeptors, multi: true}
    ],
})
export class CoreModule {}
