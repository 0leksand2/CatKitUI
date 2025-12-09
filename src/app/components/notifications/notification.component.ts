import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContentHeaderModule, KitNotificationModule, KitNotificationService, NotificationType } from 'cat-kit-ui';

@Component({
  selector: 'app-notifications',
  imports: [ContentHeaderModule, KitNotificationModule],
  templateUrl: './notification.component.html',
  standalone: true
})
export class NotificationComponent {
  constructor(private titleService: Title,
    private notificationService: KitNotificationService
  ) {
    this.titleService.setTitle('Notifications | CatKitUI');
  }

  showSuccess(){
    this.notificationService.open(NotificationType.Success, 'Success', 'The operation was completed successfully!');
  }

  showInfo(){
    this.notificationService.open(NotificationType.Info, 'Info', 'This is some information!');
  }

  showWarning(){
    this.notificationService.open(NotificationType.Warning, 'Warning', 'This is warning!');
  }

  showError(){
    this.notificationService.open(NotificationType.Error, 'Error', 'This is error!');
  }
}
