import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/core/pipes/filter.pipe';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
	FormsModule,
	UserRoutingModule,
	NgxPaginationModule,
    NgbTooltipModule
  ],
  providers:[
	FilterPipe
  ]
})
export class UserModule { }
