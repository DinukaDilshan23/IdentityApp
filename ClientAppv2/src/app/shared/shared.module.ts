import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHasRoleDirective } from './directives/user-has-role.directive';
import { NotificationComponent } from './components/modals/notification/notification.component';
import { ExpiringSessionCountdownComponent } from './components/modals/expiring-session-countdown/expiring-session-countdown.component';
import { ValidationMessagesComponent } from './components/errors/validation-messages/validation-messages.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';



@NgModule({
  declarations: [
    UserHasRoleDirective,
    NotificationComponent,
    ExpiringSessionCountdownComponent,
    ValidationMessagesComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
