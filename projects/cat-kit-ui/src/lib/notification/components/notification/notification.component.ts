import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { NotificationType } from "../../models/notification.type";

@Component({
    selector: 'kit-notifications',
    standalone: false,
    templateUrl: './notification.component.html',
    styleUrl: './notification.component.scss'
})
export class NotificationsComponent implements OnInit {
    onClose$ = new Subject<any>(); // Emit result
    
    header: string = 'Notification';
    message!: string;
    type!: NotificationType;
    constructor() {

    }
    ngOnInit(): void {
    }

    closeWindow() {
        this.close();
    }

    close() {
        this.onClose$.next(null);
        this.onClose$.complete();
    }
}