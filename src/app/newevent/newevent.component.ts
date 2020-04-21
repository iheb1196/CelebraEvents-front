import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventsService } from '../events.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newevent',
  templateUrl: './newevent.component.html',
  styleUrls: ['./newevent.component.css']
})
export class NeweventComponent implements OnInit {

  eventsList=[];
  locationsList=[];
  MusicList=[];
  photographsList=[];
  beautyList=[];
  wearingList=[];


  locationDetails={
    price:0,
    capacity:0,
    type:"",
    images:[],
    location:""
  };

  musicDetails={
    price:0,
    images:[],
    location:""
  };
  photographDetails={
    price:0,
    images:[],
    location:""
  };
  beautyDetails={
    price:0,
    images:[],
    location:""
  };

  wearingDetails={
    price:0,
    images:[],
    location:""
  };

  
  


  currentBudget=0;
  isLoading:boolean=false;
  errorMessage="";
  createdSuccessfully:boolean=false;


  step=1;
  eventType=new FormGroup({
    eventId:new FormControl('notset',Validators.required) ,
    max: new FormControl(0),
    date: new FormControl(''),
    name: new FormControl('')
  })


  eventLocation=new FormGroup({
    eventLocationId:new FormControl('notset',Validators.required),
  })

  eventMusic=new FormGroup({
    eventMusicId:new FormControl('notset',Validators.required),
  })


  eventPhotograph=new FormGroup({
    eventPhotographId:new FormControl('notset',Validators.required),
  })
  eventBeauty=new FormGroup({
    eventBeautyId:new FormControl('notset',Validators.required),
  })

  eventWearing=new FormGroup({
    eventWearingId:new FormControl('notset',Validators.required),
  })

  
  constructor(private events:EventsService,private router:Router) { }

  ngOnInit(): void {
    this.getEventList();
    
  }

  finish(){
    this.errorMessage="";
    this.createdSuccessfully=false;
    let event={
      name:this.eventType.value.name,
      evnetTypeId: this.eventType.value.eventId,
      date: this.eventType.value.date,
      eventLocationId: this.eventLocation.value.eventLocationId,
      eventMusicId:this.eventMusic.value.eventMusicId,
      eventPhotographId:this.eventPhotograph.value.eventPhotographId,
      eventBeautyId:this.eventBeauty.value.eventBeautyId,
      eventWearingId:this.eventWearing.value.eventWearingId,
      uid:localStorage.getItem('token'),
      adddate: new Date(),
      stat:0
      
    }

    if (confirm('DO Y OU REALLY WANNA CREATE THIS EVENT ?')) {
      this.isLoading=true;
      this.events.createEvent(event).subscribe((data)=>{
        this.isLoading=false;
        if (data.success == true) {
            this.createdSuccessfully=true;
            setTimeout(()=>{
              this.router.navigate(['/account/myevents']);
            },3000)
        }else{
          this.errorMessage=data.message;
        }
      },(error)=>{
        this.errorMessage="Something went wrong, try again.";
        this.isLoading=false;
      })
    }
  }

  nextForm(){
    this.step++;
    if (this.step==2) {
      this.currentBudget=this.eventType.value.max;
        this.getEventLocations(this.eventType.value.eventId);
    }else if (this.step==3) {
      this.currentBudget-=this.locationDetails.price;
      this.getEventMusic(this.eventType.value.eventId);
    }else if (this.step==4) {
      this.currentBudget-=this.musicDetails.price;
      this.getPhotagraphsList(this.eventType.value.eventId);
    }else if (this.step==5) {
      this.currentBudget-=this.photographDetails.price;
      this.getEventBeauty(this.eventType.value.eventId);
    }else if (this.step==6) {
      this.currentBudget-=this.beautyDetails.price;
      this.getEventWearing(this.eventType.value.eventId);
    }

    
    
  }

  previousForm(){
    this.step--;
    if (this.step==2) {
      this.currentBudget=this.locationDetails.price+this.currentBudget;
        this.getEventLocations(this.eventType.value.eventId);
    }else if (this.step==3) {
      this.currentBudget+=this.musicDetails.price;
      this.getEventMusic(this.eventType.value.eventId);
    }else if (this.step==4) {
      this.currentBudget+=this.photographDetails.price;
      this.getPhotagraphsList(this.eventType.value.eventId);
    }else if (this.step==5) {
      this.currentBudget+=this.beautyDetails.price;
      this.getEventBeauty(this.eventType.value.eventId);
    }





    
  }

  

  checkAll(){
    
    
  }


  getEventList(){
    this.eventsList=[];
    this.events.getEventsList().subscribe((events)=>{
      this.eventsList=events.events;
      
    })
  }

  getEventLocations(idEvent){
    this.locationsList=[];
    this.events.getEventsLocationsList(idEvent).subscribe((locations)=>{
      console.log(locations);
      for (let i = 0; i < locations.locations.length; i++) {
        if ( locations.locations[i].price < this.eventType.value.max) {
            this.locationsList.push(locations.locations[i]);
        }
        
      }      
    });
  }


  getEventMusic(idEvent){
    this.MusicList=[];
    this.events.getEventsMusicList(idEvent).subscribe((data)=>{
      console.log(data);
      for (let i = 0; i < data.music.length; i++) {
        if ( data.music[i].price <= this.currentBudget) {
            this.MusicList.push(data.music[i]);
        }
        
      }      
    });
  }


  getPhotagraphsList(idEvent){
    this.photographsList=[];
    this.events.getEventsPhotographyList(idEvent).subscribe((data)=>{
      console.log(data);
      for (let i = 0; i < data.photographs.length; i++) {
        if ( data.photographs[i].price <= this.currentBudget) {
            this.photographsList.push(data.photographs[i]);
        }
        
      }      
    });
  }

  getEventBeauty(idEvent){
    this.beautyList=[];
    this.events.getEventsBeautyList(idEvent).subscribe((data)=>{
      console.log(data);
      for (let i = 0; i < data.beautys.length; i++) {
        if ( data.beautys[i].price <= this.currentBudget) {
            this.beautyList.push(data.beautys[i]);
        }
        
      }      
    });
  }

  getEventWearing(idEvent){
    this.wearingList=[];
    this.events.getEventsWearingList(idEvent).subscribe((data)=>{
      console.log(data);
      for (let i = 0; i < data.wearing.length; i++) {
        if ( data.wearing[i].price <= this.currentBudget) {
            this.wearingList.push(data.wearing[i]);
        }
        
      }      
    });
  }




  locationUpdated(){
    for (let i = 0; i < this.locationsList.length; i++) {
      if (this.locationsList[i]._id==this.eventLocation.value.eventLocationId) {
          this.locationDetails=this.locationsList[i];
        break;
      }
      
    }
  }



  musicUpdated(){
    for (let i = 0; i < this.MusicList.length; i++) {
      if (this.MusicList[i]._id==this.eventMusic.value.eventMusicId) {
          this.musicDetails=this.MusicList[i];
        break;
      }
      
    }

  }

  photographUpdated(){
    for (let i = 0; i < this.photographsList.length; i++) {
      if (this.photographsList[i]._id==this.eventPhotograph.value.eventPhotographId) {
          this.photographDetails=this.photographsList[i];
        break;
      }
      
    }
    
  }

  beautyUpdated(){
    for (let i = 0; i < this.beautyList.length; i++) {
      if (this.beautyList[i]._id==this.eventBeauty.value.eventBeautyId) {
          this.beautyDetails=this.beautyList[i];
        break;
      }
      
    }
    
  }


  wearingUpdated(){
    for (let i = 0; i < this.wearingList.length; i++) {
      if (this.wearingList[i]._id==this.eventWearing.value.eventWearingId) {
          this.wearingDetails=this.wearingList[i];
        break;
      }
      
    }
    
  }

}
