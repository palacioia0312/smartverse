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
import { StorageService } from '../service/storage.service';

const secret = new TextEncoder().encode(
	'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2'
);

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	constructor(private _storage:StorageService) {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const token = this._storage.getToken();

		const authHeader = request.headers.get('Authorization');

		return of(null)
		.pipe(
			mergeMap(() => {
				if (!request.url.endsWith('/api/login') && request.method !== 'POST') {
					if (authHeader && hasExpired(token)) {
						return throwError({ status: 401, error: { message: 'JWT Expired' } });
					}
				}
				return next.handle(request);
			})
		);
	}
}
