import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SidenavLayoutService {
    isMobile = false;
    isSidenavOpen = true;
    constructor() {

     }

    toggleSidenav() {
        this.isSidenavOpen = !this.isSidenavOpen;
    }
}