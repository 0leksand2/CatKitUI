import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitDropdownComponent } from './components/dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [KitDropdownComponent],
    exports: [KitDropdownComponent]
})
export class KitDropdownModule { 
    
}