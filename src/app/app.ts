import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KitSidenavLayoutModule } from 'cat-kit-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KitSidenavLayoutModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('CatKitUI');
}
