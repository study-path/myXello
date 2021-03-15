import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QuickLinksContainerComponent } from './components/quick-links-container/quick-links-container.component';

@NgModule({
  declarations: [
    QuickLinksContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuickLinksContainerComponent
  ]
})
export class QuickLinksContainerModule { }
