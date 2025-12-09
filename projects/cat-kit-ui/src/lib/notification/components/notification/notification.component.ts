import { Component } from "@angular/core";
import { Subject } from "rxjs";
import { NotificationType } from "../../models/notification.type";

@Component({
    selector: 'kit-notifications',
    standalone: false,
    templateUrl: './notification.component.html',
    styleUrl: './notification.component.scss'
})
export class NotificationsComponent {
    onClose$ = new Subject<any>(); // Emit result
    
    header: string = 'Notification';
    message!: string;
    type!: NotificationType;
    constructor() {

    }

    closeWindow(value: boolean) {
        this.close(value);
    }

    close(result?: any) {
        this.onClose$.next(result);
        this.onClose$.complete();
    }
}