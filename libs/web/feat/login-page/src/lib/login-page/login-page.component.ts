import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '@nx-ws/web/shared/services/auth-service';

@Component({
  selector: 'tg-login-page',
  templateUrl: './login-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  constructor(private authService: AuthService) {}

  login() {
    this.authService.setSession(
      {
        username: 'admin',
        email: 'admin@gmail.com'
      },
      'access_token'
    );
    this.authService.navigateAfterLogin();
  }
}
