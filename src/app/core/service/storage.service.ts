import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'currentUser';

@Injectable({
	providedIn: 'root',
})
export class StorageService {
	constructor(private _router: Router) {}

	signOut(): void {
		this.clearStorage();

		this._router.navigate(['/auth/logout']);
	}

	public clearStorage() {
		window.sessionStorage.clear();
		window.localStorage.clear();
	}

	public saveToken(token: string): void {
		window.sessionStorage.removeItem(TOKEN_KEY);
		window.sessionStorage.setItem(TOKEN_KEY, token);
		this.saveUser(token);
	}

	public getToken(): any {
		return sessionStorage.getItem(TOKEN_KEY) || null;
	}

	public saveUser(info: any): void {
		const user = jwtDecode(info)
		window.sessionStorage.removeItem(USER_KEY);
		window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
	}

	public getUser(): any {
		const user = window.sessionStorage.getItem(USER_KEY);
		if (user) {
			return JSON.parse(user);
		}
		return null;
	}
}
