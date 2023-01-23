import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeighborhoodRoutingModule } from './neighborhood-routing.module';
import { NeighborhoodComponent } from './neighborhood.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    NeighborhoodComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule,
    NeighborhoodRoutingModule

  ]
})
export class NeighborhoodModule { }
