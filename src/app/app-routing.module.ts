import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
	{
		path: '',
		component: MainLayoutComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: '',
				loadChildren: () =>
					import('./pages/home/home.module').then(
						(m) => m.HomeModule
					),
			},
		],
	},
	{
		path: '',
		component: PublicLayoutComponent,
		children: [
			{
				path: 'auth',
				loadChildren: () =>
					import('./pages/auth/auth.module').then(
						(m) => m.AuthModule
					),
			},
		],
		canActivate: [NoAuthGuard]
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			useHash: true,
			anchorScrolling: 'enabled',
			scrollPositionRestoration: 'enabled',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
