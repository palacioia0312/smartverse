import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
	declarations: [],
	imports: [CommonModule, NgxPaginationModule, HomeRoutingModule],
})
export class HomeModule {}
