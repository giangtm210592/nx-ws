import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@nx-ws/web/shared/config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig, private http: HttpClient) {}

  get<T>(url: string, params: HttpParams) {
    return this.http.get<T>(this.appConfig.apiUrl + url, { params });
  }

  post<T, P>(url: string, bodyData: P | null = null) {
    return this.http.post<T>(this.appConfig.apiUrl + url, bodyData);
  }

  put<T, P>(url: string, bodyData: P | null = null) {
    return this.http.put<T>(this.appConfig.apiUrl + url, bodyData);
  }

  delete<T>(url: string) {
    return this.http.delete<T>(this.appConfig.apiUrl + url);
  }

  deleteWithBody<T, P>(url: string, bodyData: P | null = null) {
    return this.http.delete<T>(this.appConfig.apiUrl + url, { body: bodyData });
  }

  getResponse<T>(url: string) {
    return this.http.get<T>(this.appConfig.apiUrl + url, { observe: 'response' });
  }

  getWithRetry<T>(url: string, retryNumber: number) {
    return this.http.get<T>(this.appConfig.apiUrl + url).pipe(retry(retryNumber));
  }
}
