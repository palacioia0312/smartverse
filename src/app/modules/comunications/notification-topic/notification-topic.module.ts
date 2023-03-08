import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationTopicRoutingModule } from './notification-topic-routing.module';
import { NotificationTopicComponent } from './notification-topic.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/core/pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
	declarations: [NotificationTopicComponent],
	imports: [
		CommonModule,
		FormsModule,
		NgxPaginationModule,
		NgbTooltipModule,
		NotificationTopicRoutingModule
	],
	providers:[
		FilterPipe
	]
})
export class NotificationTopicModule {}
