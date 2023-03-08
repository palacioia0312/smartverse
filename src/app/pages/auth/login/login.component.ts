import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
// service
import { AuthenticationService } from 'src/app/core/service/auth.service';
import { SweetAlertService } from 'src/app/core/service/sweet-alert.service';
// types

@Component({
	selector: 'app-auth-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup = this.fb.group({
		email: ['', [Validators.required]],
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
		private fb: FormBuilder,
		private _alert: SweetAlertService,
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
						if (!data.data){
							// this._alert.notify({ text: data.message, icon: 'error' })
							this.error = data.message;
							return;
						}
						this.router.navigate([this.returnUrl]);
					},
					(error: string) => {
						this.error = error;
						this.loading = false;
						this._alert.notify({ text: error || 'Erro al validar las credenciales', icon: 'error' })
					}
				);
		}
	}


	fnCloseAlert(): void {
		this.error = '';
	}
}
