import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderModule } from './header/header.module';
import { LayoutRoutingModule } from './layout-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutRoutingModule,   
  ],
  exports: [
    HeaderModule,   
  ]
})
export class LayoutModule { }
