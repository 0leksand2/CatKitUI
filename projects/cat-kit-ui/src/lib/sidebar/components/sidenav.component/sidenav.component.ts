import { Component, HostListener, Input } from '@angular/core';
import { SidenavLayoutService } from '../../services/sidebar.service';


@Component({
    selector: 'kit-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
    standalone: false,
    host: {
        '[class.open]': 'sidenavLayoutService.isSidenavOpen',
        '[class.mobile]': 'sidenavLayoutService.isMobile'
    }
})
export class KitSidenavComponent {
    sidenav: boolean = true;
    constructor(public sidenavLayoutService: SidenavLayoutService){ }

    ngOnInit() {
        this.checkScreenSize();
    }

    @HostListener('window:resize')
    checkScreenSize() {
        this.sidenavLayoutService.isMobile = window.innerWidth < 768;
        this.sidenavLayoutService.isSidenavOpen = !this.sidenavLayoutService.isMobile;
    }
}
