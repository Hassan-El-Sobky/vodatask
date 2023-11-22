import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable,of,tap } from 'rxjs';
import { CacheService } from '../services/cache.service';

@Injectable()
export class HttpcacheInterceptor implements HttpInterceptor {

  constructor(private _cache:CacheService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.method !=='GET'){

      return next.handle(request);
    }
    
    const cachedResponse= this._cache.get(`${request.url}?${request.params}`);
    
    if(cachedResponse){
      console.log(cachedResponse);

      return of(cachedResponse);
    }
     
    return next.handle(request).pipe(
      tap((event:HttpEvent<any>)=>{
        console.log(event);
        
        if(event.type === HttpEventType.Response ){
          this._cache.saveCache(`${request.url}?${request.params}`,event)
        }
      })
    )

  }
}
