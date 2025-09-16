import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHeaderComponent } from './components/content.header/content.header.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ContentHeaderComponent],
    exports: [ContentHeaderComponent]
})
export class ContentHeaderModule { 
    
}