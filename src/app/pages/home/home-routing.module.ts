import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'dashboard',
		loadChildren: () => import('./../../modules/dashboards/dashboards.module').then((m) => m.DashboardsModule),
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
		path: 'marketplace/items',
		loadChildren: () =>
			import('./../../modules/marketplace/itemsmarket/itemsmarket.module').then((m) => m.ItemsmarketModule),
	},
	{
		path: 'comunication/news',
		loadChildren: () =>
			import('./../../modules/comunications/news/news.module').then((m) => m.NewsModule),
	},
	{
		path: 'comunication/notify',
		loadChildren: () =>
			import('./../../modules/comunications/notification-topic/notification-topic.module').then((m) => m.NotificationTopicModule),
	},
	{
		path: 'settings/neighborhood',
		loadChildren: () =>
			import('./../../modules/settings/neighborhood/nightborhood.module').then((m) => m.NeighborhoodModule),
	},
	{
		path: 'settings/version',
		loadChildren: () =>
			import('./../../modules/settings/version/version.module').then((m) => m.VersionModule),
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
