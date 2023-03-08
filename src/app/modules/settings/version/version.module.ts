import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { VersionRoutingModule } from './version-routing.module';
import { VersionComponent } from './version.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/core/pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
	declarations: [VersionComponent],
	imports: [
		CommonModule,
		FormsModule,
		NgxPaginationModule,
		NgbTooltipModule,
		VersionRoutingModule
	],
	providers:[
		FilterPipe
	]
})
export class VersionModule {}
