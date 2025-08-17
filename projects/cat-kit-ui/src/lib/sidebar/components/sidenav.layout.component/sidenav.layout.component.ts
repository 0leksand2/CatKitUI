import { Component } from '@angular/core';
import { SidenavLayoutService } from '../../services/sidebar.service';


@Component({
  selector: 'kit-sidenav-layout',
  templateUrl: './sidenav.layout.component.html',
  styleUrl: './sidenav.layout.component.scss',
  standalone: false
})
export class KitSidenavLayoutComponent {
  constructor(public sidenavLayoutService: SidenavLayoutService) { }
}
