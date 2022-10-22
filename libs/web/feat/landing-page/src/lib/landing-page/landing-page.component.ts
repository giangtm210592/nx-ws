import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tg-landing-page',
  templateUrl: './landing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {}
