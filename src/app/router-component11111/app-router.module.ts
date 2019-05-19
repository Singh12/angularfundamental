import { NgModule } from '@angular/core';
import { RouterComponentComponent } from './router-component.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGard } from './auth-gard.service';
import { CanDeactivateGard } from './servers/edit-server/can-deactivate-gard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';
const config: Routes = [
    {path: '', component: RouterComponentComponent, children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent},
            {path: 'users', component: UsersComponent, children: [
                {path: ':id/:name', component: UserComponent}
            ]},
        { path: 'servers', canActivateChild: [AuthGard], component: ServersComponent, children: [
                {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGard]},
            { path: ':id', component: ServerComponent, resolve: { server: ServerResolver }}
            ]},
        ]},
    { path: 'not-found', component: ErrorPageComponent, data: {'message': 'Page not availabe'} },
    { path: '**', redirectTo: '/not-found'}
    ];
@NgModule({
imports: [
RouterModule.forRoot(config)
],
exports: [RouterModule],
declarations: [PageNotFoundComponent, ErrorPageComponent]
})
export class AppRouterModule {
}
