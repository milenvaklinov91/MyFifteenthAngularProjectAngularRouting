import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { ErrorComponent } from './error/error.component';
import { CourseGuardService } from './course-guard.service';
import { CanDeactivateGuardService } from './candeactivate-guard.service';
import { CourseResolveService } from './course-resolve.service';

const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  //we have 2 properties (path) and (component)
  {path: 'About', component: AboutComponent},
  {path: 'Contact', canDeactivate: [CanDeactivateGuardService], component: ContactComponent},
  // {path: 'Courses', component: CoursesComponent, canActivate: [CourseGuardService]},
  {path: 'Courses',  component: CoursesComponent, resolve: {courses: CourseResolveService}},
  //To activated Route Object will have a courses property,which will store the list of courses
  // {path: 'Course/:id', component: CourseComponent},
  {path: '', canActivateChild: [CourseGuardService], children: [
    //CanActivateChild Route Guard in Angular

    {path: 'Course/:id', component: CourseComponent},
    //Child Routes in Angular
    // {path: 'Course/:name', component: CourseComponent}
  ]},
  //Route definition with route parameter(id)
  //Route parameter : The value of this parameter is required,if we don't pass the value for this ID parameter we will get an error
  //Query parameter is and optional parameter and if it missing in the URL,wont stop Angular from navigating to the Route
  {path: '**', component: ErrorComponent}
  //Wildcard route - matches every route(If not found any of these routes,it will match this route)
  //It should be on the last place ,because it checks every route above...
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute, {enableTracing: true})],
  // exports: [RouterModule]
  exports:[
RouterModule,
  ]
})
export class AppRoutingModule { }
