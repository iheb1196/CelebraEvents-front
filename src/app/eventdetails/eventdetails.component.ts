import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';
import { AuthService } from '../auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {

  id;
  isLoading:boolean=true;
  event:any;
  user:any;
  constructor(private auth:AuthService, private events:EventsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.id=data.id;
      this.getEventDetails(this.id);
    });

    this.auth.getUserData().subscribe((data)=>{
      console.log(data);
      
      this.user=data.user
    })
    
  }

  getEventDetails(id){
    this.events.getMyEventDetails(id).subscribe((event)=>{
      this.isLoading=false;
      if (event.success==true) {
        this.event=event.event[0];
        console.log(this.event);
        
      }else{

      }
      
    })
  }


  printDoc(){
    $(document).ready(function(){
      var doc= $(".paper-to-print").html();
      var win = window.open('','Print document');
      win.document.open();


      
      win.document.write('<html><head ><styl></style></head><body onload="window.print();">'+doc+'</body></html>');
      win.document.close();

    });
  }

}
