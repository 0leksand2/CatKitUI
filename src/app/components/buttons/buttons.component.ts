import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.component.html',
  //styleUrl: './app.scss',
  standalone: true
})
export class ButtonsComponent {
  protected readonly title = signal('Buttons | CatKitUI');
}
