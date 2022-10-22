import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebMainComponent } from './web-main/web-main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [WebMainComponent],
  declarations: [WebMainComponent]
})
export class WebMainModule {}
