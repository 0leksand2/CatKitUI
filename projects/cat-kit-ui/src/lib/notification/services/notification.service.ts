import { Injectable, Injector, Type, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NotificationsComponent } from '../components/notification/notification.component';
import { NotificationType } from '../models/notification.type';

@Injectable({ providedIn: 'root' })
export class KitNotificationService {
  private overlay = inject(Overlay);
  private injector = inject(Injector);

  async open<T = any>(type: NotificationType, title: string, message: string): Promise<T | undefined> {
    const overlayRef = this.overlay.create({
      hasBackdrop: false,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay.position()
        .global()
        .right('20px')
        .bottom('20px')
    });

    const modalPortal = new ComponentPortal(NotificationsComponent, null, this.injector);
    const modalRef = overlayRef.attach(modalPortal);

    modalRef.instance.type = type;
    modalRef.instance.header = title;
    modalRef.instance.message = message;

    return firstValueFrom(modalRef.instance.onClose$);
  }
}
