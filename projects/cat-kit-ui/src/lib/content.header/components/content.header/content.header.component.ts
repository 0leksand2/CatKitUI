import { Component, Input } from '@angular/core';

@Component({
  selector: 'kit-content-header',
  templateUrl: './content.header.component.html',
  styleUrl: './content.header.component.scss',
  standalone: false
})
export class ContentHeaderComponent {
  @Input() title: string = '';
  @Input() underline: boolean = true;
  @Input() fontSize: number | string = 32;
  
  
}