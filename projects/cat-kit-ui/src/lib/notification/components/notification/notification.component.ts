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
    opacity:number = 0;
    constructor() {

    }
    ngOnInit(): void {
        setTimeout(() => {
            this.opacity = 1;
        }, 10);
    }

    closeWindow() {
        this.opacity = 0;
        setTimeout(() => {
            this.close();
        }, 300);
    }

    close() {
        this.onClose$.next(true);
        this.onClose$.complete();
    }
}