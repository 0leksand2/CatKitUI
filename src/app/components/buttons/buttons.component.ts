import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.component.html',
  //styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('CatKitUI');
}
