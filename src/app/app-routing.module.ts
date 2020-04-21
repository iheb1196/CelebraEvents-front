import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { NeweventComponent } from './newevent/newevent.component';
import { AuthGuard } from './auth.guard';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { MyeventsComponent } from './myevents/myevents.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { ContactComponent } from './contact/contact.component';
import { ProvidersComponent } from './providers/providers.component';


const routes: Routes = [
  { path:"" , component : HomepageComponent },
  { path:"home" , component : HomepageComponent },
  { path:"contact" , component : ContactComponent },
  { path:"providers" , component : ProvidersComponent },
  { path:"login" , component : LoginpageComponent },
  { path:"signup" , component : SignuppageComponent },
  { path:"account" , component : AccountpageComponent , canActivate:[AuthGuard] , children:[
    { path:"" , component : MyeventsComponent },
    { path:"myevents" , component : MyeventsComponent },
    { path:"newevent" , component : NeweventComponent},
  ]},
  { path:"event/:id" , component : EventdetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
