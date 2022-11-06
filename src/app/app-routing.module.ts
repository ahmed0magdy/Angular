import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/day5/demoFinal/students/students.component';
import { ErrorComponent } from './components/day4/Routing/error/error.component';
import { StudentDetailsComponent } from './components/day5/demoFinal/student-details/student-details.component';
import { AddstudentComponent } from './components/day5/demoFinal/addstudent/addstudent.component';
import { UpdatestudentComponent } from './components/day5/demoFinal/updatestudent/updatestudent.component';
// import { ProfileComponent } from './components/day4/Routing/profile/profile.component';
// import { UserDetailsComponent } from './components/day4/Routing/user-details/user-details.component';
// import { UserDetailsComponent } from './components/day5/demo/user-details/user-details.component';
// import { UsersComponent } from './components/day4/Routing/users/users.component';
// import { UsersComponent } from './components/day5/demo/users/users.component';


const routes: Routes = [
  //#region Day 4
  //   {path:'',component:UsersComponent},
  //   {path:'users',component:UsersComponent},
  //   {path:'users/:id',component:UserDetailsComponent},
  //   {path:'profile',component:ProfileComponent},
  //   {path:'**',component:ErrorComponent}
  //#endregion

  //#region Day 5 demo
  // { path: '', component: UsersComponent },
  // { path: 'users', component: UsersComponent },
  // { path: 'users/:id', component: UserDetailsComponent },
  // { path: '**', component: ErrorComponent }
  //#endregion


  //#region demoFinal
  { path: '', component: StudentsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'student/:id', component: StudentDetailsComponent },
  { path: 'addstudent', component: AddstudentComponent },
  { path: 'updatestudent', component: UpdatestudentComponent },
  { path: '**', component: ErrorComponent }
  //#endregion
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
