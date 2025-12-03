import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitSelectListComponent } from './components/select-list/select.list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [KitSelectListComponent],
    exports: [KitSelectListComponent]
})
export class KitSelectListModule { 
    
}