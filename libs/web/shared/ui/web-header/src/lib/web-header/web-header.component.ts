import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tg-web-header',
  templateUrl: './web-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebHeaderComponent {}
