import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/auth.service';

@Injectable({
	providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
	constructor(
		private router: Router,
		private authenticationService: AuthenticationService
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		const currentUser = this.authenticationService.currentUser();

		if (!currentUser) {
			return true;
		}

		// if logged in so redirect to login page with the return url
		this.router.navigate(['dashboard'], {
			queryParams: { returnUrl: state.url },
		});
		return false;
	}
}
