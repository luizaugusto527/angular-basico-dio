import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses-list.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { StartComponent } from './star/star.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StartComponent,
    ReplacePipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
