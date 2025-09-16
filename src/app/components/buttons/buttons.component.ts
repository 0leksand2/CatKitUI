import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContentHeaderModule } from 'cat-kit-ui';

@Component({
  selector: 'app-buttons',
  imports: [ContentHeaderModule],
  templateUrl: './buttons.component.html',
  //styleUrl: './app.scss',
  standalone: true
})
export class ButtonsComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Buttons | CatKitUI')
  }
}
