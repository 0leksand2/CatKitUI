import {
    Component, ViewChild, ViewContainerRef, Input, Type,
    AfterViewInit, ChangeDetectionStrategy,
    ViewEncapsulation
} from '@angular/core';
//import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';

@Component({
    selector: 'kit-modal',
    standalone: false,
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KitModalComponent implements AfterViewInit {
    @ViewChild('vc', { read: ViewContainerRef }) vc!: ViewContainerRef;

    @Input() childComponent!: Type<any>;
    @Input() data?: any;
    @Input() title?: string;
    //@Input() overlayRef!: OverlayRef;
    onClose$ = new Subject<any>(); // Emit result

    ngAfterViewInit() {
        const componentRef = this.vc.createComponent(this.childComponent);

        componentRef.instance.data = this.data;

        componentRef.instance.close = (result?: any) => {
            this.close(result);
        };
    }

    close(result?: any) {
        this.onClose$.next(result);
        this.onClose$.complete();
        //this.overlayRef.dispose();
    }
}
