import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    AllInOneComponent,
    HomeComponent,
    RegistrationComponent,
    ParentComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
