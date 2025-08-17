import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitMainBodyComponent } from './components/main.body.component/main.body.component';
import { KitSidenavComponent } from './components/sidenav.component/sidenav.component';
import { KitSidenavLayoutComponent } from './components/sidenav.layout.component/sidenav.layout.component';

@NgModule({
    imports: [CommonModule],
    declarations: [KitSidenavLayoutComponent, KitSidenavComponent, KitMainBodyComponent],
    exports: [KitSidenavLayoutComponent, KitSidenavComponent, KitMainBodyComponent]
})
export class KitSidenavLayoutModule { 
    
}