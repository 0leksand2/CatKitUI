import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'buttons', component: ButtonsComponent, pathMatch: 'full'}
];
