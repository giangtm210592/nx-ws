import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSidebarComponent } from './web-sidebar/web-sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [WebSidebarComponent],
  declarations: [WebSidebarComponent]
})
export class WebSidebarModule {}
