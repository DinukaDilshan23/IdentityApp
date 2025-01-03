//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { SendEmailComponent } from './send-email/send-email.component';
//import { ResetPasswordComponent } from './reset-password/reset-password.component';
//import { RegisterComponent } from './register/register.component';
//import { RegisterWithThirdPartyComponent } from './register-with-third-party/register-with-third-party.component';
//import { LoginComponent } from './login/login.component';
//import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';



//@NgModule({
//  declarations: [
//    SendEmailComponent,
//    ResetPasswordComponent,
//    RegisterComponent,
//    RegisterWithThirdPartyComponent,
//    LoginComponent,
//    ConfirmEmailComponent
//  ],
//  imports: [
//    CommonModule
//  ]
//})
//export class AccountModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }
