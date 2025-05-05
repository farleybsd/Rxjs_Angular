import { Routes } from '@angular/router';
import { UsersComponent } from './pages/user/users/users.component';
import { MyProfileComponent } from './pages/user/myProfile/myProfile.component';
import { MyConquestsComponent } from './pages/user/myConquests/myConquests.component';
import { MyDisciplinesComponent } from './pages/user/my-Disciplines/my-Disciplines.component';


export const routes: Routes = [
    { 
      path: '',
       component: UsersComponent,
      pathMatch: 'prefix',
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'myProfile'
        },
        {
          path: 'myProfile',
          component: MyProfileComponent,
        },
        {
          path: 'myConquests',
          component: MyConquestsComponent,
        },
        {
          path: 'myDisciplines',
          component: MyDisciplinesComponent,
        }
      ]
    },
    
  ];
  
