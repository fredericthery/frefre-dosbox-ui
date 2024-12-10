import { Routes } from '@angular/router';
import { authNotGuard } from './guard/auth-not.guard';
import { AuthenticationComponent } from './ui/account/authentication/authentication.component';
import { HomeContentComponent } from './ui/home/home-content/home-content.component';

export const routes: Routes = [
  {path: 'home', component: HomeContentComponent},
  {path: 'account/sign-in', component: AuthenticationComponent, canActivate: [authNotGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'},
];
