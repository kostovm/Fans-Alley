import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('accessToken');

    if (token) {
      const cloned = req.clone({
        setHeaders: {
          'X-Authorization': token,
        },
      });
      return next.handle(cloned).pipe(
        catchError((error: HttpErrorResponse) => this.handleErrors(error))
      );
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => this.handleErrors(error))
    );
  }

  private handleErrors(error: HttpErrorResponse): Observable<never> {
    if (error.status === 403) {
      localStorage.removeItem('accessToken');
      this.router.navigate(['/login'], {
        queryParams: { sessionExpired: true },
      });
    } else if (error.status === 0) {
      alert('The server is currently unavailable. Please try again later.');
    }

    return throwError(() => error);
  }
}