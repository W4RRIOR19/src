import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartillaPage } from './cartilla.page';

const routes: Routes = [
  {
    path: '',
    component: CartillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartillaPageRoutingModule {}
