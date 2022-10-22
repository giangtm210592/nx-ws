import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebHeaderComponent } from './web-header/web-header.component';

@NgModule({
  imports: [CommonModule],
  exports: [WebHeaderComponent],
  declarations: [WebHeaderComponent]
})
export class WebHeaderModule {}
