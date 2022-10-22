import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: LandingPageComponent }])],
  declarations: [LandingPageComponent]
})
export class LandingPageModule {}
