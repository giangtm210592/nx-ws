import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { webRoutes } from './web-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(webRoutes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class CoreModule {}
