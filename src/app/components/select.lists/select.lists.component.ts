import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContentHeaderModule, KitSelectListModule } from 'cat-kit-ui';

@Component({
  selector: 'app-select-lists',
  imports: [ContentHeaderModule, KitSelectListModule],
  templateUrl: './select.lists.component.html',
  standalone: true
})
export class SelectListsComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Select lists | CatKitUI');
  }
}
