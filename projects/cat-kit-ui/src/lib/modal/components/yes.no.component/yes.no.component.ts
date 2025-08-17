import { Component } from "@angular/core";

@Component({
    selector: 'kit-yesno-component',
    standalone: false,
    template: `
    <div class="modal-footer">
        <button class="button red mr-5" (click)="closeWindow(false)">Cancel</button>
        <button class="button primary" (click)="closeWindow(true)">Confirm</button>
    </div>`
})
export class KitYesNoComponent {
    protected close!: (result?: any) => void;

    constructor() {

    }

    closeWindow(value: boolean) {
        this.close(value);
    }
}