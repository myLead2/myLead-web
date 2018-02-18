import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { UserService } from '../../../user.service';
// import * as _ from "lodash";
import {sortBy} from "lodash";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./../../../../assets/sass/material-dashboard.scss']
})
export class DashboardComponent implements OnInit {
  private leads;
  private user = {
    'number_results': 0,
    'number_requests': 0,
    'not_declarete': true
  }

  constructor(
    private userService: UserService
  ) { }

  showNumberRequets(){
    return this.user.number_requests && !this.user.not_declarete
  }


  showNumberResults(){
    return this.user.number_results && !this.user.not_declarete
  }

  showProcessing(){
    return !this.user.number_results && !this.user.not_declarete && this.user.number_requests
  }

  showSend(){
    return !this.user.number_results && this.user.not_declarete && !this.user.number_requests
  }

  ngOnInit() {
    this.userService.getUserRequestData().then((res:any) => {
        if(res.result[0].count ){
          this.user.not_declarete = false;
          this.user.number_requests = res.result[0].count    
        }    
        this.userService.getUserAnalitycData().then( (resp: any) => {
          console.log(resp)
          if(resp.result[0].count){
            this.user.not_declarete = false;
            this.user.number_results = resp.result[0].count;
            this.userService.getSuperLeads().then( (data: any) => {
              console.log(data.data[0].result)

              this.leads = sortBy(data.data[0].result,['name', 'result'], ['asc', 'desc']);
            
            });
          }
        });
    });
  }

}
