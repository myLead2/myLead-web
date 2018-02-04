import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { NotificationsService } from 'angular2-notifications';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html` ,
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  title = 'MyLead';
  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    showProgressBar: false,
    pauseOnHover: true,
    clickToClose: true
  }


  constructor( private _service: NotificationsService) {} 
 
  ngOnInit() {}
 
}
