import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'dashboard',
		loadChildren: () =>
			import('./../../modules/dashboards/dashboards.module').then(
				(m) => m.DashboardsModule
			),
	},
	{
		path: 'items',
		loadChildren: () =>
			import('./../../modules/projects/projects.module').then((m) => m.ProjectsModule),
	},
	{
		path: 'security/user',
		loadChildren: () =>
			import('./../../modules/security/user/user.module').then((m) => m.UserModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRoutingModule {}
