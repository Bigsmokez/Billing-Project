import { from } from "rxjs";
import { Routes } from '@angular/router';
import { SignupComponent } from './user/signup/signup.component';
import { UserComponent } from "./user/user.component";
import { LoginComponent } from "./modules/login/login.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { BillComponent } from "./modules/bill/bill.component";

export const appRoutes: Routes = [
     {
         path: 'signup', component : UserComponent,
         children : [{path: '', component : SignupComponent}]
     },
     {
         path:'', redirectTo:'/signup', pathMatch:'full'
     },

     {
         path: 'login', component : LoginComponent,
     },
     {
         path: '',redirectTo:'/login', pathMatch:'full'
     },

     {
        path: 'dashboard', component : DashboardComponent,
    },
    {
        path: '',redirectTo:'/', pathMatch:'full'
    },
    
    {
        path: 'bill', component : BillComponent,
    },
    {
        path: '',redirectTo:'/bill', pathMatch:'full'
    }

];