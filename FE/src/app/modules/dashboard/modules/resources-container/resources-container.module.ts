import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ResourcesContainerComponent } from './components/resources-container/resources-container.component';

@NgModule({
  declarations: [
    ResourcesContainerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    ResourcesContainerComponent
  ]
})
export class ResourcesContainerModule { }
