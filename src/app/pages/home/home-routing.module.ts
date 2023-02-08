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
		path: 'settings/item',
		loadChildren: () =>
			import('./../../modules/settings/items/items.module').then((m) => m.ItemsModule),
	},
	{
		path: 'settings/house',
		loadChildren: () =>
			import('./../../modules/settings/house/house.module').then((m) => m.HouseModule),
	},
	{
		path: 'settings/neighborhood',
		loadChildren: () =>
			import('./../../modules/settings/neighborhood/nightborhood.module').then((m) => m.NeighborhoodModule),
	},
	{
		path: 'settings/marketplace',
		loadChildren: () =>
			import('./../../modules/settings/marketplace/marketplace.module').then((m) => m.MarketPlaceModule),
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
