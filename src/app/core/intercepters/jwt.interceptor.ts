import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpResponse,
} from '@angular/common/http';
import { from, mergeMap, Observable, of, throwError } from 'rxjs';
// services
import { AuthenticationService } from '../service/auth.service';
import { hasExpired } from '../helpers/handleToken';

const secret = new TextEncoder().encode(
	'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2'
);

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1cm46ZXhhbXBsZTpjbGFpbSI6dHJ1ZSwiaWF0IjoxNjY5MDU2MjMxLCJpc3MiOiJ1cm46ZXhhbXBsZTppc3N1ZXIiLCJhdWQiOiJ1cm46ZXhhbXBsZTphdWRpZW5jZSJ9.C4iSlLfAUMBq--wnC6VqD9gEOhwpRZpoRarE0m7KEnI';

		const authHeader = request.headers.get('Authorization');

		return of(null)
		.pipe(
			mergeMap(() => {
				if (!request.url.endsWith('/api/login') && request.method !== 'POST') {
					if (authHeader && hasExpired(token)) {
						return throwError({ status: 400, error: { message: 'JWT Expired' } });
					}
				}
				return next.handle(request);
			})
		);
	}
}
