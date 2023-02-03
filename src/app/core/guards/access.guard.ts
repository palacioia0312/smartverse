import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../service/storage.service';
import { hasExpired } from '../helpers/handleToken';

@Injectable({
	providedIn: 'root',
})
export class AccessGuard implements CanActivate {
	constructor(private router: Router, private _storage: StorageService) {}
	async canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	) {
		const token = hasExpired(this._storage.getToken());

		if (!token) return true;

		this._storage.clearStorage();

		this.router.navigate(['auth/login'], {
			queryParams: { returnUrl: state.url },
		});

		return false;
	}
}
