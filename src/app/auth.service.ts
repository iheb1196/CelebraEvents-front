import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {

  }



  isConnected():boolean{
    if (window.localStorage.getItem('token')!=null) {
      return true;
    }

    return false;
  }


  createUser(userData):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
     return this.http.post<any>('http://localhost:3000/userCreate',{
       email:userData.login,
       fullname:userData.fullname,
       password:userData.password
     },httpOptions );
  }


  login(login,password):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
     return this.http.post<any>('http://localhost:3000/userAuth',{
       email:login,
       password:password
     },httpOptions );
  }


  getUserData():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': window.localStorage.getItem('token')
      })
    };
     return this.http.get<any>('http://localhost:3000/userInfo',httpOptions );
  }


}
