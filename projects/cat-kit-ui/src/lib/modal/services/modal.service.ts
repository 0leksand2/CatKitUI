import { Injectable, Injector, Type, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { KitModalComponent } from '../components/modal.component/modal.component';
import { KitYesNoComponent } from '../components/yes.no.component/yes.no.component';

@Injectable({ providedIn: 'root' })
export class KitModalService {
  // private overlay = inject(Overlay);
  // private injector = inject(Injector);

  // async open<T = any>(component: Type<any>, title: string, data?: any): Promise<T | undefined> {
  //   // const overlayRef = this.overlay.create({
  //   //   hasBackdrop: true,
  //   //   backdropClass: 'dark-backdrop',
  //   //   panelClass: 'modal-panel',
  //   //   scrollStrategy: this.overlay.scrollStrategies.block(),
  //   //   positionStrategy: this.overlay.position()
  //   //     .global()
  //   //     .centerHorizontally()
  //   //     .centerVertically()
  //   // });

  //   // const modalPortal = new ComponentPortal(KitModalComponent, null, this.injector);
  //   // const modalRef = overlayRef.attach(modalPortal);

  //   // modalRef.instance.childComponent = component;
  //   // modalRef.instance.data = data;
  //   // modalRef.instance.title = title;
  //   // modalRef.instance.overlayRef = overlayRef;

  //   // return firstValueFrom(modalRef.instance.onClose$);
  // }

  // async yesNoDialog<T = any>(title: string): Promise<T | undefined> {
  //   const overlayRef = this.overlay.create({
  //     hasBackdrop: true,
  //     backdropClass: 'dark-backdrop',
  //     panelClass: 'modal-panel',
  //     scrollStrategy: this.overlay.scrollStrategies.block(),
  //     positionStrategy: this.overlay.position()
  //       .global()
  //       .centerHorizontally()
  //       .centerVertically()
  //   });

  //   const modalPortal = new ComponentPortal(KitModalComponent, null, this.injector);
  //   const modalRef = overlayRef.attach(modalPortal);

  //   modalRef.instance.childComponent = KitYesNoComponent;
  //   modalRef.instance.data = null;
  //   modalRef.instance.title = title;
  //   modalRef.instance.overlayRef = overlayRef;

  //   return firstValueFrom(modalRef.instance.onClose$);
  // }
}
