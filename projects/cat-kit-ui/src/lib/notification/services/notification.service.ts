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
    private maxElements = Math.floor(window.innerHeight / this.projectedHeight) - 1;
    private static Popups: any[]= [];

    constructor() {
        setInterval(() => {
            for (let i = 0; i < KitNotificationService.Popups.length; i++) {
                const timestamp1 = new Date().getTime();
                const timestamp2 = KitNotificationService.Popups[i].bornAt.getTime();
                const differenceInSeconds = (timestamp1 - timestamp2) / 1000;

                if (differenceInSeconds > 5) {
                    KitNotificationService.Popups[i].overlayRef.dispose();
                }
            }
        }, 100);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
        const maxElements = Math.round(((event.target as Window).innerHeight / this.projectedHeight) + 15);

    }

    //if popups exceed maxelements, replace oldest with new one
    async open<T = any>(type: NotificationType, title: string, message: string): Promise<T | undefined> {
        let highestPos = KitNotificationService.Popups[0]?.position || 0;
        let popupPosition = 0;
        
        KitNotificationService.Popups.forEach((popup) => {
            if (popup.position >= highestPos) {
                highestPos = popup.position;
            }
        });

        popupPosition = highestPos == 0 && !(KitNotificationService.Popups.length > 0) ? 0 : highestPos + 1;
        
        if(popupPosition >= this.maxElements){
            let oldest = KitNotificationService.Popups[0]?.bornAt ?? new Date();
            let oldestIndex = 0;
            KitNotificationService.Popups.forEach((element, index) => {
                if(element.bornAt < oldest){
                    oldest = element;
                    oldestIndex = index;
                }
            });
            popupPosition = KitNotificationService.Popups[oldestIndex].position;
            KitNotificationService.Popups[oldestIndex].overlayRef.dispose();
            KitNotificationService.Popups.splice(oldestIndex, 1);
        }

        
        const overlayRef = this.overlay.create({
            hasBackdrop: false,
            scrollStrategy: this.overlay.scrollStrategies.noop(),
            positionStrategy: this.overlay.position()
                .global()
                .right('20px')
                .bottom(this.projectedHeight * popupPosition + 20 + 'px'),
            disposeOnNavigation: true
        });

        const modalPortal = new ComponentPortal(NotificationsComponent, null, this.injector);
        const modalRef = overlayRef.attach(modalPortal);
        modalRef.instance.type = type;
        modalRef.instance.header = title;
        modalRef.instance.message = message;

        KitNotificationService.Popups.push({ overlayRef: overlayRef, bornAt: new Date(), position: popupPosition });

        return firstValueFrom(modalRef.instance.onClose$);
    }
}
