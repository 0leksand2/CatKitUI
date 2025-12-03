import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContentHeaderModule, KitSelectListModule } from 'cat-kit-ui';

@Component({
  selector: 'app-select-lists',
  imports: [CommonModule, ContentHeaderModule, KitSelectListModule],
  templateUrl: './select.lists.component.html',
  standalone: true
})
export class SelectListsComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Select lists | CatKitUI');
  }
  selectedValue: any = null;
  selectedValue1: any = null;
  options: any[] = [
    { value: 'abc', label: 'abc' },
    { value: 'def', label: 'dEf' },
    { value: 'ghi', label: 'GhI' },
    { value: 'jkl', label: 'jkl' },
    { value: 'mno', label: 'MNO' },
    { value: 'pqr', label: 'PqR' }, 
    { value: 'stu', label: 'STU' },
    { value: 'vwx', label: 'vwx' },
    { value: 'yz', label: 'yZ' },
  ]
}
