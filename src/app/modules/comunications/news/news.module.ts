import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/core/pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { LimitToPipe } from 'src/app/core/pipes/limit-to.pipe';
@NgModule({
	declarations: [NewsComponent],
	imports: [
		CommonModule,
		FormsModule,
		NgxPaginationModule,
		NgbTooltipModule,
		NewsRoutingModule
	],
	providers:[
		FilterPipe,
		LimitToPipe
	]
})
export class NewsModule {}
