import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { DefaultComponent } from './layout/default/default.component';
import { BillComponent } from './modules/bill/bill.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    DefaultComponent,
    BillComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
