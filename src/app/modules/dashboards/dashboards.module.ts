import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ComponentModule } from 'src/app/components/component.module';
import { DashboardOneComponent } from './dashboard-one/dashboard-one.component';
import { DashboardsRoutingModule } from './dashboards-routing.module';




@NgModule({
  declarations: [
    DashboardOneComponent,
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    NgbDropdownModule,
    ComponentModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
