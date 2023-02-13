import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentLoginComponent } from './student-login/student-login.component';

import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { LeaveRequestComponent } from './leave-request/leave-request.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentLoginComponent,
    StudentDashboardComponent,
    LeaveRequestComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    RouterModule,
    FormsModule,
    AppModule
    
  ]
})
export class StudentModule { }
