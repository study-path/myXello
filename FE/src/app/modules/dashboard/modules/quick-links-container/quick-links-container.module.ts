import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { QuickLinksContainerComponent } from './components/quick-links-container/quick-links-container.component';

@NgModule({
  declarations: [
    QuickLinksContainerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    QuickLinksContainerComponent
  ]
})
export class QuickLinksContainerModule { }
