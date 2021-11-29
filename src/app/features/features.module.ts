import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { MenuLateralComponent } from '../shared/components/menu-lateral/menu-lateral.component';


@NgModule({
  declarations: [
    FeaturesComponent,
    HeaderComponent,
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
