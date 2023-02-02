import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { verifyJWT, createJWT } from '../utils/handleToken';


@Injectable({
	providedIn: 'root',
})
export class AccessGuard implements CanActivate {
	constructor(private router: Router) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
			// createJWT();
			verifyJWT().then((response) => console.log(response));

		return true;
	}
}
