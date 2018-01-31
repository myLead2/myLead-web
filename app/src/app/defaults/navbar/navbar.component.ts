import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private location: Location) { }

    ngOnInit() {
    }

    private isLogged(){
        let isLogged = false;
        if (typeof (Storage) !== 'undefined') {
            let user = sessionStorage.getItem('user');
            if(user){
               user = JSON.parse(user);
               isLogged = true;
            }
        }
        return isLogged;
    }

    private showLoginBtn() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        let showLogin = true;
        let isLogged = this.isLogged();
        
        if( titlee === '/login' ) {
            showLogin= false;
        }
        return !isLogged && showLogin;
    }
}
