import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpResponse,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

// types
import { User } from '../models/auth.models';
@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
	user: User = {
		email: 'username@correo.com',
		firstName: 'Jon',
		lastName: 'Doe',
		location: 'COL',
		name: 'Jon Doe',
		password: '123456',
		title: 'Title',
		token: 'header.body.footer',
		userName: '_jon.doe',
		id: 12345,
	};

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const authHeader = request.headers.get('Authorization');
		const isLoggedIn =
			authHeader && authHeader.startsWith('Bearer fake-jwt-token');
		// wrap in delayed observable to simulate server api call
		return of(null)
			.pipe(
				mergeMap(() => {
					let temp: User[] = [];
					// authenticate - public
					if (
						request.url.endsWith('/api/login') &&
						request.method === 'POST'
					) {
						const { email, password } = request.body;
						if (!email || !password) {
							return error('Email or password is incorrect');
						}

						if (email !== this.user.email) {
							return error('Email is incorrect');
						}

						if (password !== this.user.password) {
							return error('Password is incorrect');
						}

						return ok({
							code: 'ok',
							...this.user,
						});
					}
					// pass through any requests not handled above
					return next.handle(request);
				})
			)
			.pipe(materialize())
			.pipe(delay(500))
			.pipe(dematerialize());

		// private helper functions
		function ok(body?: any) {
			return of(new HttpResponse({ status: 200, body }));
		}

		function unauthorised() {
			return throwError({
				status: 401,
				error: { message: 'Unauthorised' },
			});
		}

		function error(message: any) {
			return throwError({ status: 400, error: { message } });
		}
	}
}

export let FakeBackendProvider = {
	// use fake backend in place of Http service for backend-less development
	provide: HTTP_INTERCEPTORS,
	useClass: FakeBackendInterceptor,
	multi: true,
};
