import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherComponent } from './teacher.component';

const routes: Routes = [
  {path: 'teacher', component:TeacherComponent,children:[
    {path:'',component:TeacherDashboardComponent},
    {path:'teacher-dashboard',component:TeacherDashboardComponent},



  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
