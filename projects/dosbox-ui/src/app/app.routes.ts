import { Routes } from '@angular/router';
import { HomeContentComponent } from './ui/home/home-content/home-content.component';

export const routes: Routes = [
  {path: 'home', component: HomeContentComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'},
];
