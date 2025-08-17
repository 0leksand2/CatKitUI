import { Component } from "@angular/core";

@Component({
    selector: 'kit-ok-component',
    standalone: false,
    template: `
    <div class="modal-footer">
        <button class="button primary mr-5" (click)="closeWindow()">Ok</button>
    </div>`
})
export class KitOkComponent {
    protected close!: (result?: any) => void;

    constructor() {

    }

    closeWindow() {
        this.close();
    }
}