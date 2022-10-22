import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSidebarComponent } from './web-sidebar/web-sidebar.component';

@NgModule({
  imports: [CommonModule],
  exports: [WebSidebarComponent],
  declarations: [WebSidebarComponent]
})
export class WebSidebarModule {}
