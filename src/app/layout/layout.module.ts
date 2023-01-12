import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
	declarations: [PublicLayoutComponent, MainLayoutComponent],
	imports: [CommonModule, RouterModule, SharedModule],
	exports: [PublicLayoutComponent, MainLayoutComponent],
})
export class LayoutModule {}
