import { HostListener, Injectable, Injector, OnInit, Type, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NotificationsComponent } from '../components/notification/notification.component';
import { NotificationType } from '../models/notification.type';
import { Queue } from '../../utilities/queue';

@Injectable({ providedIn: 'root' })
export class KitNotificationService {

    private overlay = inject(Overlay);
    private injector = inject(Injector);
    private projectedHeight: number = 120;

    private static Popups: Queue<{ overlayRef: any, bornAt: Date }> = new Queue();

    constructor(){
        setInterval(() => {
            if (KitNotificationService.Popups.size() > 1) {
                const el = KitNotificationService.Popups.dequeue();
                el.overlayRef.dispose();
            }

            const popups = KitNotificationService.Popups.list();
            for (let i = 0; i < popups.length; i++) {
                const timestamp1 = new Date().getTime(); 
                const timestamp2 = popups[i].bornAt.getTime(); 
                const differenceInSeconds = (timestamp1 - timestamp2) / 1000;

                if (differenceInSeconds > 5) {
                    popups[i].overlayRef.dispose();
                    KitNotificationService.Popups.dequeue();
                }
            }
        }, 100);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
        const maxElements = Math.round(((event.target as Window).innerHeight / this.projectedHeight) + 15);

    }

    async open<T = any>(type: NotificationType, title: string, message: string): Promise<T | undefined> {

        const overlayRef = this.overlay.create({
            hasBackdrop: false,
            scrollStrategy: this.overlay.scrollStrategies.noop(),
            positionStrategy: this.overlay.position()
                .global()
                .right('20px')
                .bottom(20 + 'px'),
            disposeOnNavigation: true
        });

        const modalPortal = new ComponentPortal(NotificationsComponent, null, this.injector);
        const modalRef = overlayRef.attach(modalPortal);
        //KitNotificationService.popupsCount++;
        modalRef.instance.type = type;
        modalRef.instance.header = title;
        modalRef.instance.message = message;

        KitNotificationService.Popups.enqueue({ overlayRef: overlayRef, bornAt: new Date() });

        return firstValueFrom(modalRef.instance.onClose$);
    }
}
