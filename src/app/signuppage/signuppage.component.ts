import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  createdSuccessfully:boolean=false;
  errorMessage="";
  isLoading:boolean=false;

  signUpForm = new FormGroup({
    fullname:new FormControl('',[Validators.required,Validators.min(6)]),
    login:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.min(6)]),
    confPassword:new FormControl('',[Validators.required]),
    
  })
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  signUpUser(e){
    this.errorMessage="";
    this.isLoading=true;
    this.createdSuccessfully=false;

    if (this.signUpForm.value.password !== this.signUpForm.value.confPassword) {
      this.errorMessage="Passwords don't match";
    }else{
      this.auth.createUser(this.signUpForm.value).subscribe((data)=>{
        console.log(data);
        
        try{
          let res = data;
          
          if (res.success == true) {
            this.createdSuccessfully=true;
            this.isLoading=false;
            this.signUpForm.setValue({
              fullname:"",
              password:"",
              login:"",
              confPassword:""
            })
        }else{
          this.isLoading=false;
          this.errorMessage=res.message;
        }
        }catch(e){
          this.isLoading=false;
          this.errorMessage="Something went wrong, try again.";
        }
  
        
      },(error)=>{
        this.isLoading=false;
        this.errorMessage="Something went wrong, try again.";
      })
    }
  }
}
