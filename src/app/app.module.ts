import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './Services/courses.service';
import { CourseComponent } from './courses/course/course.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';


const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  //we have 2 properties (path) and (component)
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Courses', component: CoursesComponent},
  {path: 'Course/:id', component: CourseComponent},
  //Route definition with route parameter(id)
  //Route parameter : The value of this parameter is required,if we don't pass the value for this ID parameter we will get an error
  //Query parameter is and optional parameter and if it missing in the URL,wont stop Angular from navigating to the Route
  {path: '**', component: ErrorComponent}
  //Wildcard route - matches every route(If not found any of these routes,it will match this route)
  //It should be on the last place ,because it checks every route above...
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    CourseComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
