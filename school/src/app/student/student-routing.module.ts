import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  { path: '', redirectTo: 'student-dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: StudentComponent, children: [
      { path: '', component: StudentDashboardComponent }, 
      { path: 'leave', component: LeaveRequestComponent },
      // { path: 'students', component: StudentsComponent },
      // { path: 'attendance', component: AttendanceComponent },
      // { path: 'view-attendance', component: ViewAttendanceComponent },
      // { path: 'add-teacher', component: AddTeacherComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
