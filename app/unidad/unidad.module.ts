import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnidadPageRoutingModule } from './unidad-routing.module';

import { UnidadPage } from './unidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnidadPageRoutingModule
  ],
  declarations: [UnidadPage]
})
export class UnidadPageModule {}
