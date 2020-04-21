import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = new FormGroup({
    message: new FormControl('',Validators.required),
    fullname: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    subject: new FormControl('',Validators.required),
    
  })
  isLoading:boolean=false;
  errorMessage="";
  sent:boolean=false;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  send(e){
    this.isLoading=true;
    this.sent=false;
    this.errorMessage="";

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    this.http.post<any>('http://localhost:3000/newmessage',this.contact.value,httpOptions ).subscribe((res)=>{
      this.isLoading=false;
      if (res.success==true) {
        this.sent=true;
      }else{
        this.errorMessage=res.message;
      }
     },(error)=>{
       this.errorMessage="Something went, try again."
     })
  }

}
