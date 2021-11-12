import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses-list.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { StartComponent } from './star/star.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error404/error404.component';
import { CourseInfoComponent } from './courses/course-info.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StartComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path:'',redirectTo:'courses',pathMatch:'full'
    },{
      path:'courses',component:CoursesComponent
    },{
      path:'courses/info/:id',component:CourseInfoComponent
    },
    {
      path:'**',component:Error404Component
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
