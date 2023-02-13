import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
// service
import { AuthenticationService } from 'src/app/core/service/auth.service';
// types

@Component({
	selector: 'app-auth-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup = this.fb.group({
		email: ['admin@habytat.io', [Validators.required, Validators.email]],
		password: ['be5a2ccefa0e957b87b9496e28552375', Validators.required],
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
		this.returnUrl =
		this.route.snapshot.queryParams['returnUrl'] || this.returnUrl;
	}

	get formValues() {
		return this.loginForm.controls;
	}

	onSubmit(): void {
		this.formSubmitted = true;
		if (this.loginForm.valid) {
			this.loading = true;
			const { email, password } = this.loginForm.value;
			this.authenticationService
				.login(email, password)
				.pipe(first())
				.subscribe(
					(data: any) => {
						this.loading = false;
						console.log(data);
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
		var myHeaders = new Headers();
			myHeaders.append("Content-Type", "text/plain");

		fetch("https://j53tlbaeb1.execute-api.us-east-1.amazonaws.com/v0/auth/login",{
			method: 'POST',
			headers: myHeaders,
			body: JSON.stringify({
				"username": "",
				"email": "admin@habytat.io",
				"password": "be5a2ccefa0e957b87b9496e28552375"
			}),
			redirect: 'follow'
		})
		.then(response => response.json())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));
	}
}
