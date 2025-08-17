import { Component, signal } from '@angular/core';
import { SidenavLayoutService } from '../../services/sidebar.service';


@Component({
    selector: 'kit-main-body',
    templateUrl: './main.body.component.html',
    standalone: false
})
export class KitMainBodyComponent {
    constructor(public sidenavLayoutService: SidenavLayoutService){ }
}
