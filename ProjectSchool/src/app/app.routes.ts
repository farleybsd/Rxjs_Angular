import { Routes } from '@angular/router';
import { UsersComponent } from './pages/user/users/users.component';
import { MyProfileComponent } from './pages/user/myProfile/myProfile.component';
import { MyConquestsComponent } from './pages/user/myConquests/myConquests.component';
import { MyDisciplinesComponent } from './pages/user/my-Disciplines/my-Disciplines.component';
import { DashboardComponent } from './pages/dash/dashboard/dashboard.component';
import { CoursesComponent } from './pages/cursos/courses/courses.component';
import { StudentsComponent } from './pages/students/students/students.component';
import { SupportComponent } from './pages/supports/support/support.component';
import { TeachersComponent } from './pages/teachers/teachers/teachers.component';

export const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      { path: '', redirectTo: 'myProfile', pathMatch: 'full' },
      { path: 'myProfile', component: MyProfileComponent },
      { path: 'myDisciplines', component: MyDisciplinesComponent },
      { path: 'myConquests', component: MyConquestsComponent },
      
    ]
  },
  {
    path: 'dash', 
    component: DashboardComponent,
    children: []
  },
  {
    path: 'course', 
    component: CoursesComponent,
    children: []
  },
  {
    path: 'student', 
    component: StudentsComponent,
    children: []
  },
  {
    path: 'support', 
    component: SupportComponent,
    children: []
  },
  {
    path: 'teacher', 
    component: TeachersComponent,
    children: []
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
 
];
