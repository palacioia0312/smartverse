import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MarketPlaceRoutingModule } from './marketplace-routing.module';
import { MarketplaceComponent } from './marketplace.component';

@NgModule({
	declarations: [MarketplaceComponent],
	imports: [CommonModule, NgbTooltipModule, MarketPlaceRoutingModule],
})
export class MarketPlaceModule {}
