import { Routes } from '@angular/router';
import { UsersComponent } from './pages/user/users/users.component';
import { MyProfileComponent } from './pages/user/myProfile/myProfile.component';
import { MyConquestsComponent } from './pages/user/myConquests/myConquests.component';
import { MyDisciplinesComponent } from './pages/user/my-Disciplines/my-Disciplines.component';

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
  { path: '', redirectTo: 'users', pathMatch: 'full' },
];
