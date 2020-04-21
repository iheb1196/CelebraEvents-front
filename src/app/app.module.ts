import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { NeweventComponent } from './newevent/newevent.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { AccountsidebareComponent } from './accountsidebare/accountsidebare.component';
import { MyeventsComponent } from './myevents/myevents.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { ContactComponent } from './contact/contact.component';
import { ProvidersComponent } from './providers/providers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    LoginpageComponent,
    SignuppageComponent,
    NeweventComponent,
    AccountpageComponent,
    AccountsidebareComponent,
    MyeventsComponent,
    EventdetailsComponent,
    ContactComponent,
    ProvidersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
