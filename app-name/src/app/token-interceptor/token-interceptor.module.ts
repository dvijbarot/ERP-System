import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigModule } from '../shared/components/config/config.module';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const config = new ConfigModule();
    const userToken = config.API;
    const modifiedReq = req.clone({
      headers: req.headers.set('x-auth-token', userToken),
    });
    return next.handle(modifiedReq);
  }
}
