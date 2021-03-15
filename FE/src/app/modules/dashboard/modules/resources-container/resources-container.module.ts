import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ResourcesContainerComponent } from './components/resources-container/resources-container.component';

@NgModule({
  declarations: [
    ResourcesContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResourcesContainerComponent
  ]
})
export class ResourcesContainerModule { }
