import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tg-web-main',
  templateUrl: './web-main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebMainComponent {}
