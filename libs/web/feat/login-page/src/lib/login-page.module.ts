import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: LoginPageComponent }])],
  declarations: [LoginPageComponent]
})
export class LoginPageModule {}
