import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { ErrorInterceptor } from './intercepters/error.interceptor';
import { FakeBackendProvider } from './intercepters/fake-backend';
import { JwtInterceptor } from './intercepters/jwt.interceptor';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [
		Title,
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
		// provider used to create fake backend
		FakeBackendProvider,
	],
})
export class CoreModule {}
