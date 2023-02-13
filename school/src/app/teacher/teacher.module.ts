import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';


@NgModule({
  declarations: [
    TeacherComponent,
    TeacherDashboardComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    RouterModule,
    
  ]
})
export class TeacherModule { }
