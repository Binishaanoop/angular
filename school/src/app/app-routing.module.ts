import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '' , redirectTo:'home', pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'contact', component:ContactComponent},
  

  
  { path: '', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
  { path: '', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  { path: '', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
