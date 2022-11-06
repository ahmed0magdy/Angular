import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/day4/Routing/error/error.component';
import { ProfileComponent } from './components/day4/Routing/profile/profile.component';
import { UserDetailsComponent } from './components/day4/Routing/user-details/user-details.component';
import { UsersComponent } from './components/day4/Routing/users/users.component';

const routes: Routes = [
  {path:'',component:UsersComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component:UserDetailsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
