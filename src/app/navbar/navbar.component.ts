import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isConnected:boolean=false;
  constructor(private auth:AuthService) { 

  }

  ngOnInit(): void {
    this.isConnected=this.auth.isConnected();
  }

}
