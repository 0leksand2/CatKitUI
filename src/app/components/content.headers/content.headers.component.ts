import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContentHeaderModule } from 'cat-kit-ui';

@Component({
  selector: 'app-content-headers',
  imports: [ContentHeaderModule],
  templateUrl: './content.headers.component.html',
  standalone: true
})
export class ContentHeadersComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Content Headers | CatKitUI');
  }
}
