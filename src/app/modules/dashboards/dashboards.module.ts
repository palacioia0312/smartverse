import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { WidgetModule } from 'src/app/components/widget/widget.module';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SalesChartComponent } from 'src/app/components/charts/sales-chart/sales-chart.component';
import { StatisticsChartComponent } from 'src/app/components/charts/statistics-chart/statistics-chart.component';
import { RevenueChartComponent } from 'src/app/components/charts/revenue-chart/revenue-chart.component';
import { InboxComponent } from 'src/app/components/inbox/inbox.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';

@NgModule({
	declarations: [
		DashboardComponent,
		SalesChartComponent,
		StatisticsChartComponent,
		RevenueChartComponent,
		InboxComponent,
		ProjectsComponent,
	],
	imports: [
		CommonModule,
		NgApexchartsModule,
		NgbDropdownModule,
		WidgetModule,
		DashboardsRoutingModule,
	],
})
export class DashboardsModule {}
