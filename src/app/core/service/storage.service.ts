import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
	}

	public getToken(): any {
		return sessionStorage.getItem(TOKEN_KEY) || null;
	}

	public saveUser(user: any): void {
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
