import { Component, Input, signal } from '@angular/core';
import { SidenavLayoutService } from '../../services/sidebar.service';


@Component({
    selector: 'kit-main-body',
    templateUrl: './main.body.component.html',
    styleUrls: [`./main.body.component.scss`],
    standalone: false,
    host: {
        '[class.mobile]': 'sidenavLayoutService.isMobile'
    }
})
export class KitMainBodyComponent {
    constructor(public sidenavLayoutService: SidenavLayoutService){ }
    @Input() title!: string;
}
