import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsmarketRoutingModule } from './itemsmarket-routing.module';
import { ItemsmarketComponent } from './itemsmarket.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ItemsmarketComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule,
    ItemsmarketRoutingModule

  ]
})
export class ItemsmarketModule { }
