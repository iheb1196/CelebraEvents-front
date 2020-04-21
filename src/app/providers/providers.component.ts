import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  locationsList=[];
  musicList=[];
  BeautyList=[];
  photographsList=[];
  wearingList=[];

  constructor(private events:EventsService) {
    
  }

  ngOnInit(): void {
    this.events.getEventsLocationsList('notset').subscribe((data)=>{
      this.locationsList=data.locations;
    })

    this.events.getEventsMusicList('notset').subscribe((data)=>{
      this.musicList=data.music;
    })

    this.events.getEventsBeautyList('notset').subscribe((data)=>{
      this.BeautyList=data.beautys;
    })
    this.events.getEventsPhotographyList('notset').subscribe((data)=>{
      this.photographsList=data.photographs;
    })

    this.events.getEventsWearingList('notset').subscribe((data)=>{
      this.wearingList=data.wearing;
    })
    
    
    

  }

}
