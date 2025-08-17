import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumeratePipe } from './pipes/enumerate.pipe';
import { KitColumnComponent } from './components/column/column.component';
import { KitPagerComponent } from './components/pager/pager.component';
import { KitTableComponent } from './components/table/table.component';

@NgModule({
    imports: [CommonModule, EnumeratePipe],
    declarations: [KitTableComponent, KitColumnComponent, KitPagerComponent],
    exports: [KitTableComponent, KitColumnComponent, KitPagerComponent]
})
export class KitTableModule { 
    
}