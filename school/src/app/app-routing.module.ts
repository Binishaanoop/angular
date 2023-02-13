import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AloginComponent } from './alogin/alogin.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SloginComponent } from './slogin/slogin.component';
import { TloginComponent } from './tlogin/tlogin.component';

const routes: Routes = [
  { path: '' , redirectTo:'home', pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'contact', component:ContactComponent},
  { path:'slogin', component:SloginComponent},
  { path:'tlogin', component:TloginComponent},
  { path:'alogin', component:AloginComponent},

  

  
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
