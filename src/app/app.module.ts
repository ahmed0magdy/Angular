import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/day2/first/first.component';
import { SecondComponent } from './components/day2/second/second.component';
import { AllInOneComponent } from './components/day3/all-in-one/all-in-one.component';
import { HomeComponent } from './components/day3/ComponentInteraction/home/home.component';
// import { RegistrationComponent } from './components/day3/ComponentInteraction/registration/registration.component';
import { RegistrationComponent } from './components/day3/task3/registration/registration.component';
// import { ParentComponent } from './components/day3/ComponentInteraction/parent/parent.component';
import { ParentComponent } from './components/day3/task3/parent/parent.component';
import { StudentsComponent } from './components/day3/task3/students/students.component';
import { RegisterComponent } from './components/day4/ComponentInteraction/register/register.component';
import { StudentssComponent } from './components/day4/ComponentInteraction/studentss/studentss.component';
import { ValidTestComponent } from './components/day4/validation/valid-test/valid-test.component';
import { UsersComponent } from './components/day4/Routing/users/users.component';
import { UserDetailsComponent } from './components/day4/Routing/user-details/user-details.component';
import { HeaderComponent } from './components/day4/Routing/header/header.component';
import { ProfileComponent } from './components/day4/Routing/profile/profile.component';
import { ErrorComponent } from './components/day4/Routing/error/error.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    AllInOneComponent,
    HomeComponent,
    RegistrationComponent,
    ParentComponent,
    StudentsComponent,
    RegisterComponent,
    StudentssComponent,
    ValidTestComponent,
    UsersComponent,
    UserDetailsComponent,
    HeaderComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
