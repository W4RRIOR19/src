import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartillaPageRoutingModule } from './cartilla-routing.module';

import { CartillaPage } from './cartilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartillaPageRoutingModule
  ],
  declarations: [CartillaPage]
})
export class CartillaPageModule {}
