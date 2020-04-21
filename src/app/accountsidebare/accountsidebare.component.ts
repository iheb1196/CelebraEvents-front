import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountsidebare',
  templateUrl: './accountsidebare.component.html',
  styleUrls: ['./accountsidebare.component.css']
})
export class AccountsidebareComponent implements OnInit {
  email="Loading...";
  fullname="Loading...";
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.getUserData()
  }


  getUserData(){
    this.auth.getUserData().subscribe((user)=>{
      this.email=user.user.email;
      this.fullname=user.user.fullname;
      
    },(error)=>{

    })
  }

  logOut(e){
    e.preventDefault();
    if (confirm('Do you really wanna log out now ?')) {
      window.localStorage.removeItem('token');
      this.router.navigate(['home'])
    }
  }

}
