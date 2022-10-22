import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { mergeMap, Observable, take } from 'rxjs';
import { AuthService } from '@nx-ws/web/shared/services/auth-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authService.isAuthed.pipe(
      take(1),
      mergeMap(() => {
        const token = this.authService.getToken();
        if (!token) {
          return next.handle(request);
        }
        const headers = request.headers.set('Authorization', `Bearer ${token}`);
        const authReq = request.clone({
          headers
        });
        return next.handle(authReq);
      })
    );
  }
}
