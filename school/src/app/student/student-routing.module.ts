import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent,children:[
    {path: '',component:StudentDashboardComponent},
    {path:'student-dashboard',component:StudentDashboardComponent},
    {path:'student-login',component:StudentLoginComponent},
    {path:'leave-request',component:LeaveRequestComponent},
    
  
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
