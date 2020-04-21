import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.css']
})
export class MyeventsComponent implements OnInit {

  Events=[];

  constructor(private events:EventsService) { }

  ngOnInit(): void {
    this.getMyEvents();
  }

  getMyEvents(){
    this.events.getMyEventsList().subscribe((events)=>{
      console.log(events);
      
      this.Events=events.events;
      
    })
  }

  confirmEventReservation(id){
    if (confirm("DO YOU REALLY WANNA CONFIRM THIS RESERVATION ?")) {
      this.events.confirmEventReservation(id).subscribe((data)=>{
        if (data.success==true) {
          this.getMyEvents();
        }else{
          alert('Something went wrong try again');
        }
      },(error)=>{
        alert('Something went wrong try again');
      })
    }
  }

  deleteEventReservation(id){
    if (confirm("DO YOU REALLY WANNA DELETE THIS RESERVATION ?")) {
      this.events.deleteEventReservation(id).subscribe((data)=>{
        if (data.success==true) {
          this.getMyEvents();
        }else{
          alert('Something went wrong try again');
        }
      },(error)=>{
        alert('Something went wrong try again');
      });
    }
  }


}
