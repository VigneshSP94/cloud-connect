import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpdaService } from './httpda.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{


  constructor(private injector: Injector) { }

  intercept(req, next) {
      let auth = this.injector.get(HttpdaService);
      let tokenizedReq = req.clone({
        setHeaders: {
            "x-access-token":auth.getToken()
        }
      })

      return next.handle(tokenizedReq)
        
  }
}
