import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `client-Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage =
            `Server-Error Code: ${error.status}\nMessage: ` +
            JSON.stringify(error.error);
        }
        // window.alert(JSON.stringify(errorMessage));
        return throwError(error.error);
      })
    );
  }
}
