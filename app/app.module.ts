import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { McaLeComponent } from './mca-le/mca-le.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { DaaComponent } from './daa/daa.component';
import { MentorService } from '../app/mentor.service';
  import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    McaLeComponent,
    LoginComponent,
    ListComponent,
    DaaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MentorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
