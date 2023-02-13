import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsmarketComponent } from './itemsmarket.component';

const routes: Routes = [{ path: '', component: ItemsmarketComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsmarketRoutingModule { }
