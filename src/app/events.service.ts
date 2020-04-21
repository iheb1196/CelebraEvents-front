import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private auth:AuthService, private http:HttpClient) {

  }


  getEventsList():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': window.localStorage.getItem('token')
      })
    };
     return this.http.get<any>('http://localhost:3000/eventsList',httpOptions );
  }


  getEventsLocationsList(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': window.localStorage.getItem('token')
      })
    };
     return this.http.get<any>('http://localhost:3000/eventsLocations?idEvent='+id,httpOptions );
  }



  getEventsMusicList(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': window.localStorage.getItem('token')
      })
    };
     return this.http.get<any>('http://localhost:3000/eventsMusic?idEvent='+id,httpOptions );
  }
  getEventsPhotographyList(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': window.localStorage.getItem('token')
      })
    };
     return this.http.get<any>('http://localhost:3000/EventsPhotography?idEvent='+id,httpOptions );
  }

  getEventsBeautyList(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': window.localStorage.getItem('token')
      })
    };
     return this.http.get<any>('http://localhost:3000/EventsBeauty?idEvent='+id,httpOptions );
  }

  getEventsWearingList(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': window.localStorage.getItem('token')
      })
    };
     return this.http.get<any>('http://localhost:3000/EventsWearing?idEvent='+id,httpOptions );
  }


  createEvent(eventData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': window.localStorage.getItem('token')
      })
    };
     return this.http.post<any>('http://localhost:3000/eventCreate',eventData,httpOptions );
  }


  getMyEventsList(){
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': window.localStorage.getItem('token')
      })
    };
     return this.http.get<any>('http://localhost:3000/myEventsList',httpOptions );
  }


  getMyEventDetails(id){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': window.localStorage.getItem('token')
        })
      };
       return this.http.get<any>('http://localhost:3000/myEventDetails?idEvent='+id,httpOptions );
    
  }

  confirmEventReservation(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': window.localStorage.getItem('token')
      })
    };
     return this.http.get<any>('http://localhost:3000/confirmEvent?idEvent='+id,httpOptions );
  }

  deleteEventReservation(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': window.localStorage.getItem('token')
      })
    };
     return this.http.get<any>('http://localhost:3000/deleteEvent?idEvent='+id,httpOptions );
  }

  


}
