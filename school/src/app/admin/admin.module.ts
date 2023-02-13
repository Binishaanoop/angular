import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminNoticeComponent } from './admin-notice/admin-notice.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminNoticeComponent,
    TeachersComponent,
    StudentsComponent,
    AttendanceComponent,
    ViewAttendanceComponent,
    AddTeacherComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class AdminModule { }
