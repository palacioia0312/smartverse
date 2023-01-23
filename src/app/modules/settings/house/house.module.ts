import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseRoutingModule } from './house-routing.module';
import { HouseComponent } from './house.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HouseComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule,
    HouseRoutingModule

  ]
})
export class HouseModule { }
