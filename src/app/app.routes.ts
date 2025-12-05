import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ContentHeadersComponent } from './components/content.headers/content.headers.component';
import { SelectListsComponent } from './components/select.lists/select.lists.component';
import { TablesComponent } from './components/tables/tables.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'buttons', component: ButtonsComponent, pathMatch: 'full'},
    { path: 'contentheaders', component: ContentHeadersComponent, pathMatch: 'full' },
    { path: 'selectlists', component: SelectListsComponent, pathMatch: 'full' },
    { path: 'tables', component: TablesComponent, pathMatch: 'full' }
];
