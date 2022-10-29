import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: LoginPageComponent }]), TranslocoModule],
  declarations: [LoginPageComponent]
})
export class LoginPageModule {}
