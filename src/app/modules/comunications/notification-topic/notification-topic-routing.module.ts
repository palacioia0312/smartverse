import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationTopicComponent } from './notification-topic.component';

const routes: Routes = [{ path: '', component: NotificationTopicComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class NotificationTopicRoutingModule {}
