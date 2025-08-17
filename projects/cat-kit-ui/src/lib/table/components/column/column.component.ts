import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'kit-column',
  template: '',
  standalone: false
})
export class KitColumnComponent<T = any> {
  @Input() field!: keyof T;
  @Input() caption!: string;
  @Input() width!:  number;
  
  @ContentChild(TemplateRef) template?: TemplateRef<any>;
}