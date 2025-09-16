import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KitSidenavLayoutModule } from 'cat-kit-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, KitSidenavLayoutModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('CatKitUI');

  menu:any[] = [
    {
      url: '',
      text: 'Home',
      icon: 'fa fa-home'
    },
    {
      url: 'buttons',
      text: 'Buttons',
      icon: 'fa fa-circle-dot'
    },
    {
      url: 'selectlist',
      text: 'Select Lists',
      icon: 'fa fa-square-caret-down'
    },
    {
      url: 'tables',
      text: 'Tables',
      icon: 'fa fa-table'
    },
    {
      url: 'notifications',
      text: 'Notifications',
      icon: 'fa fa-bell'
    },
    {
      url: 'modals',
      text: 'Modal',
      icon: 'fa fa-message'
    },
    {
      url: 'sidebar',
      text: 'Sidebar',
      icon: 'fa fa-elementor'
    },
    {
      url: 'contentheader',
      text: 'Content Header',
      icon: 'fa fa-heading'
    }
  ];

  constructor(){

  }

}
