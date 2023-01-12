import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
// service
import { AuthenticationService } from 'src/app/core/service/auth.service';
// types
import { User } from 'src/app/core/models/auth.models';

@Component({
	selector: 'app-auth-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required],
	});
	formSubmitted: boolean = false;
	error: string = '';
	returnUrl: string = '/';
	loading: boolean = false;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private authenticationService: AuthenticationService,
		private fb: FormBuilder
	) {}

	ngOnInit(): void {
		// get return url from route parameters or default to '/'
		this.returnUrl =
			this.route.snapshot.queryParams['returnUrl'] || this.returnUrl;
		// this.prueba();
	}

	/**
	 * convenience getter for easy access to form fields
	 */
	get formValues() {
		return this.loginForm.controls;
	}

	/**
	 * On submit form
	 */
	onSubmit(): void {
		this.formSubmitted = true;
		if (this.loginForm.valid) {
			this.loading = true;
			const { email, password } = this.loginForm.value;
			this.authenticationService
				.login(email, password)
				.pipe(first())
				.subscribe(
					(data: User) => {
						this.router.navigate([this.returnUrl]);
					},
					(error: string) => {
						this.error = error;
						this.loading = false;
					}
				);
		}
	}

	async prueba() {
		return await fetch(
			'https://dpv7ueckjb72i5js34zrx7ggym0xwweg.lambda-url.us-east-1.on.aws/',
			{
				method: 'POST',
				body: JSON.stringify({
					username: 'Gareth Mc Cumskey',
					email: 'kevin@gmail.com',
					password: '123asd456',
				}),
				headers: {
					Accept: '*/*',
					'Content-Type': 'application/json',
				},
			}
		).then((response) => response.json());
	}
}

// const info = {
//   code: "OK",
//   message: "Consulta ejecutada correctamente.",
//   data: {'isActive': true, 'isBlocked': false, 'role': 'ADMIN', 'profile': 'Unity Developer', 'id': 'kevin@gmail.com', 'name': 'Kevin Hernandez', 'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJJdGVtIjp7ImlzQWN0aXZlIjp0cnVlLCJpc0Jsb2NrZWQiOmZhbHNlLCJwYXNzd29yZCI6IjEyM2FzZDQ1NiIsInJvbGUiOiJBRE1JTiIsInByb2ZpbGUiOiJVbml0eSBEZXZlbG9wZXIiLCJpZCI6ImtldmluQGdtYWlsLmNvbSIsIm5hbWUiOiJLZXZpbiBIZXJuYW5kZXoifSwiUmVzcG9uc2VNZXRhZGF0YSI6eyJSZXF1ZXN0SWQiOiI3QUFSNjJGTDdBOEIyREs1SzY4UVFOUjQ1SlZWNEtRTlNPNUFFTVZKRjY2UTlBU1VBQUpHIiwiSFRUUFN0YXR1c0NvZGUiOjIwMCwiSFRUUEhlYWRlcnMiOnsic2VydmVyIjoiU2VydmVyIiwiZGF0ZSI6IlRodSwgMDUgSmFuIDIwMjMgMTI6MjI6NTAgR01UIiwiY29udGVudC10eXBlIjoiYXBwbGljYXRpb24veC1hbXotanNvbi0xLjAiLCJjb250ZW50LWxlbmd0aCI6IjIwNiIsImNvbm5lY3Rpb24iOiJrZWVwLWFsaXZlIiwieC1hbXpuLXJlcXVlc3RpZCI6IjdBQVI2MkZMN0E4QjJESzVLNjhRUU5SNDVKVlY0S1FOU081QUVNVkpGNjZROUFTVUFBSkciLCJ4LWFtei1jcmMzMiI6IjI0MDIxODA2MjcifSwiUmV0cnlBdHRlbXB0cyI6MH0sIkVYUElSQVRJT05fVElNRSI6IjFIIiwiVE9LRU5fSVNTIjoiaGFieXRhdC1kZXYiLCJUT0tFTl9BVUQiOiJoYWJ5dGF0LW1hbmFnZW1lbnQifQ.y8BjF6gpNB2yAZkQTcBiURvbnIK5zKkRiQArHE9N15A'}
// }
// sessionStorage.setItem('currentUser', JSON.stringify(info.data));
// console.log(info.data);
// this.router.navigate([this.returnUrl]);
