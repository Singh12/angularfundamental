import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoute } from './app.route.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { AuthRouteModule } from './auth/auth-route.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoute,
    HttpClientModule,
    FormsModule,
    AuthRouteModule,
    AuthModule,
    CoreModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  // providers: [RecipeShoppingServiceService, AuthService, AuthGard, CanDeactivateGard, ServerResolver, ServerServiceService],

  bootstrap: [AppComponent]
})
export class AppModule { }
