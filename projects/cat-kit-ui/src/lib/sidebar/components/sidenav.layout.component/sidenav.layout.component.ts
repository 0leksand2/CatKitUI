import { Component, Input, OnInit } from '@angular/core';
import { SidenavLayoutService } from '../../services/sidebar.service';


@Component({
  selector: 'kit-sidenav-layout',
  templateUrl: './sidenav.layout.component.html',
  styleUrl: './sidenav.layout.component.scss',
  standalone: false
})
export class KitSidenavLayoutComponent implements OnInit {
  @Input() title: string = '';
  constructor(public sidenavLayoutService: SidenavLayoutService) { }

  ngOnInit(): void {
    this.sidenavLayoutService.title = this.title;
  }


}
