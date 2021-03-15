import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './header.component';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
]

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, 
    ...materialModules,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
