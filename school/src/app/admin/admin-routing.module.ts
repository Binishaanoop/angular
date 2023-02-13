import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNoticeComponent } from './admin-notice/admin-notice.component';
import { AdminComponent } from './admin.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';

const routes: Routes = [
  {path: 'admin', component:AdminComponent,children:[
    {path:'',component:AdminDashboardComponent},
    {path:'admin-dashboard',component:AdminDashboardComponent},
    {path: 'admin-notice', component:AdminNoticeComponent},
    {path: 'teachers', component:TeachersComponent},
    {path: 'students', component:StudentsComponent},
    {path: 'attendance', component:AttendanceComponent},
    {path: 'view-attendance', component:ViewAttendanceComponent},
    {path: 'add-teacher', component:AddTeacherComponent},
    



  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
