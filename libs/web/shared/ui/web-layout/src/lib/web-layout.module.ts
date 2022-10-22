import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebLayoutComponent } from './web-layout/web-layout.component';
import { WebHeaderModule } from '@nx-ws/web/shared/ui/web-header';
import { WebSidebarModule } from '@nx-ws/web/shared/ui/web-sidebar';
import { WebMainModule } from '@nx-ws/web/shared/ui/web-main';
import { WebFooterModule } from '@nx-ws/web/shared/ui/web-footer';

@NgModule({
  imports: [CommonModule, WebHeaderModule, WebSidebarModule, WebMainModule, WebFooterModule],
  declarations: [WebLayoutComponent]
})
export class WebLayoutModule {}
