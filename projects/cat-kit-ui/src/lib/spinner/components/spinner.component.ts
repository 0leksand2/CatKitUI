import { Component, Input } from '@angular/core';

@Component({
  selector: 'kit-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  standalone: false
})
export class SpinnerComponent {
  @Input() fullScreen: boolean = false;
}