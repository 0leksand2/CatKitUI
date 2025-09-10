import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  standalone: true
})
export class HomeComponent {
  protected readonly title = signal('Hone | CatKitUI');
}
