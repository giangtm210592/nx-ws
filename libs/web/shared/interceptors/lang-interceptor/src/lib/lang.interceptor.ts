import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LangInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const lang = localStorage.getItem('lang') === 'en' ? 'en' : 'vi';
    const headers = request.headers.set('lang', lang);
    const langReq = request.clone({
      headers
    });
    return next.handle(langReq);
  }
}
