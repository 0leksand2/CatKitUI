import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitModalComponent } from './components/modal.component/modal.component';
import { KitYesNoComponent } from './components/yes.no.component/yes.no.component';
import { KitModalService } from './services/modal.service';

@NgModule({
    imports: [CommonModule],
    declarations: [KitModalComponent, KitYesNoComponent],
    exports: [KitModalComponent],
    providers: [KitModalService]
})
export class KitModalModule { 
    
}