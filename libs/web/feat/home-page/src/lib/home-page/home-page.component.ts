import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-ws-home-page',
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {}
