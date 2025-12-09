import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContentHeaderModule, SpinnerModule } from 'cat-kit-ui';

@Component({
  selector: 'app-home',
  imports: [ContentHeaderModule, SpinnerModule],
  templateUrl: './home.component.html',
  standalone: true
})
export class HomeComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Home | CatKitUI');
  }
}
