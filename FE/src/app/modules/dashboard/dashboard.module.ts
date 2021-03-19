import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AssignmentsContainerModule } from './modules/assignments-container/assignments-container.module';
import { LessonsContainerModule } from './modules/lessons-container/lessons-container.module';
import { QuickLinksContainerModule } from './modules/quick-links-container/quick-links-container.module';
import { ResourcesContainerModule } from './modules/resources-container/resources-container.module';

@NgModule({
  declarations: [
    DashboardComponent    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    LessonsContainerModule,
    AssignmentsContainerModule,
    QuickLinksContainerModule,
    ResourcesContainerModule
  ],
  exports:[
    DashboardComponent,    
  ]
})
export class DashboardModule { }
