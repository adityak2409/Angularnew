import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Employeecomponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { AdiComponent } from './adi/adi.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { Eventbinding1Component } from './eventbinding1/eventbinding1.component';
import { Eventbinding2Component } from './eventbinding2/eventbinding2.component';
import { FormsModule } from '@angular/forms';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { InbuiltpipeComponent } from './inbuiltpipe/inbuiltpipe.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { SummaryPipe } from './utility/summary.pipe';
import { CorseComponent } from './course/corse.component';
import { CourseService } from './utility/course.service';
import { PostComponent } from './post/post.component';
import {HttpClientModule} from'@angular/common/http';
import { Page1Component } from './page1/page1.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { QueryparameterComponent } from './queryparameter/queryparameter.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DemobootstrapComponent } from './demobootstrap/demobootstrap.component';
import { DemotdfComponent } from './demotdf/demotdf.component';
import { Demotdf1Component } from './demotdf1/demotdf1.component';
import { PracticeComponent } from './practice/practice.component';
import { PracticechildComponent } from './practicechild/practicechild.component';
import { Custompipe2Pipe } from './custompipe2.pipe';
import { Post1Component } from './post1/post1.component';


@NgModule({
  declarations: [
    AppComponent,
    Employeecomponent,
    StudentComponent,
    StringinterpolationComponent,
    AdiComponent,
    PropertybindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    EventbindingComponent,
    Eventbinding1Component,
    Eventbinding2Component,
    IfdirectiveComponent,
    FordirectiveComponent,
    SwitchdirectiveComponent,
    ParentComponent,
    ChildComponent,
    Child2Component,
    InbuiltpipeComponent,
    CustompipeComponent,
    SummaryPipe,
    CorseComponent,
    PostComponent,
    Page1Component,
   
    AboutusComponent,
    ContactusComponent,
    FollowerComponent,
    MyfollowerComponent,
    QueryparameterComponent,
    HomeComponent,
    NotfoundComponent,
    DemobootstrapComponent,
    DemotdfComponent,
    Demotdf1Component,
    PracticeComponent,
    PracticechildComponent,
    Custompipe2Pipe,
    Post1Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
