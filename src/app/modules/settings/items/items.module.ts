import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule,
    ItemsRoutingModule

  ]
})
export class ItemsModule { }
