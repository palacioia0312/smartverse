import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// types
import { User } from '../models/auth.models';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
	user: User | null = null;

	constructor(private http: HttpClient, private _storage: StorageService) {}

	/**
	 * Returns the current user
	 */
	public currentUser(): User | null {
		// if (!this.user) {
		// 	this.user = loggedInUser();
		// }
		return this._storage.getUser();
	}

	/**
	 * Performs the login auth
	 * @param email email of user
	 * @param password password of user
	 */
	login(email: string, password: string) {
		return this.http
			.post(`${environment.server}/auth/login`, { email, password }, {})
			.pipe(
				map((res: any) => {
					if (res && res.data) {
						// store user details and jwt in session
						this._storage.saveToken(res.data);
						//sessionStorage.setItem('currentUser', JSON.stringify(res));
					}
					return res;
				})
			);
	}

	/**
	 * Performs the signup auth
	 * @param name name of user
	 * @param email email of user
	 * @param password password of user
	 */
	signup(name: string, email: string, password: string): Observable<User> {
		return this.http
			.post<User>(`/api/signup`, { name, email, password })
			.pipe(map((user) => user));
	}


	/**
	 * Logout the user
	 */
	logout(): void {
		// remove user from session storage to log user out
		this._storage.signOut();
		this.user = null;
	}
}
